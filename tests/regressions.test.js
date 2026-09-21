(async () => {
    const logs = [];
    const check = (condition, message) => {
        if (!condition) throw new Error(message);
        logs.push('PASS ' + message);
    };
    const tick = () => new Promise(resolve => setTimeout(resolve, 10));
    const settle = async () => {
        for (let i = 0; i < 100 && activeMutation; i++) await tick();
        check(!activeMutation, 'Operación termina y libera controles');
    };
    const submit = form => form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    const initial = structuredClone(db);
    const originalRun = Query.prototype.run;
    const reset = async () => {
        Query.prototype.run = originalRun;
        for (const key of Object.keys(initial)) db[key] = structuredClone(initial[key]);
        apiLimit = 1000;
        emitAuth('SIGNED_OUT', null);
        await showMockApp({ id: 'A' });
    };
    const hold = predicate => {
        let release;
        let intercepted = false;
        Query.prototype.run = function () {
            const result = originalRun.call(this);
            if (!intercepted && predicate(this)) {
                intercepted = true;
                return new Promise(resolve => { release = () => resolve(result); });
            }
            return result;
        };
        return async () => {
            for (let i = 0; i < 100 && !release; i++) await tick();
            if (!release) throw Error('No se interceptó la consulta');
            return release;
        };
    };
    const draftExpense = () => {
        resetExpenseForm(); expenseDate.value = date; amountInput.value = '12';
        categorySelect.value = '1'; paymentMethodSelect.value = '1'; descriptionInput.value = 'Nuevo';
    };
    try {
        await reset();
        currentCurrency = 'USD'; await loadDashboard();
        historySearch.value = 'Secreto A'; newPasswordInput.value = 'Contraseña A';
        const chart = monthlySpendingChart;
        await signOutCurrentUser();
        check(allExpenses.length === 0 && allCategories.length === 0 && allPaymentMethods.length === 0, 'Logout vacía todos los catálogos');
        check(currentCurrency === 'EUR' && userSettingsId === null && currencySelect.value === 'EUR', 'Logout restablece moneda y configuración');
        check(totalSpent.textContent === formatCurrency(0) && monthlyBudget.textContent === formatCurrency(0), 'Logout limpia totales');
        check(chart.destroyed && monthlySpendingChart === null, 'Logout destruye gráfico');
        check(!historySearch.value && !newPasswordInput.value && !paymentMethodSettingsList.textContent, 'Logout limpia filtros, contraseñas y métodos visibles');
        await showMockApp({ id: 'B' });
        check(currentUserId === 'B' && !appSection.textContent.includes('Secreto A'), 'B no recibe estado de A');

        for (const loader of [loadDashboard, loadPaymentMethods, loadUserSettings, loadExpenses, loadCategories]) {
            await reset();
            const wait = hold(query => query.action === 'select');
            const oldContext = sessionContext;
            const pending = loader(oldContext).catch(error => error);
            const release = await wait();
            await signOutCurrentUser(); await showMockApp({ id: 'B' });
            const before = appSection.textContent;
            release(); await pending;
            check(appSection.textContent === before && currentUserId === 'B', loader.name + ': respuesta tardía A descartada en B');
        }
        await reset();
        const waitSame = hold(query => query.table === 'payment_methods');
        const old = loadPaymentMethods().catch(error => error);
        const releaseSame = await waitSame();
        await signOutCurrentUser(); await showMockApp({ id: 'A' });
        const sameBefore = allPaymentMethods;
        releaseSame(); await old;
        check(allPaymentMethods === sameBefore, 'A → logout → A también invalida la generación anterior');

        await reset();
        db.monthly_budgets = [{ id: 77, user_id: 'A', month_start: previous, amount: 777 }];
        const waitCopy = hold(query => query.table === 'monthly_budgets' && query.columns === 'id');
        const copy = copyPreviousMonthBudgets(); const releaseCopy = await waitCopy();
        await showMockApp({ id: 'B' });
        releaseCopy(); await copy;
        check(!db.monthly_budgets.some(row => row.user_id === 'B'), 'Copia pendiente de A no escribe presupuestos bajo B');
        check(!budgetMessage.textContent.includes('copiado correctamente'), 'Operación cancelada no muestra éxito en B');
        check(!monthlyBudgetInput.disabled, 'Finalización antigua no bloquea controles de B');

        await reset(); draftExpense();
        const waitInsert = hold(query => query.table === 'expenses' && query.action === 'insert');
        submit(expenseForm); const releaseInsert = await waitInsert();
        await showMockApp({ id: 'B' }); releaseInsert(); await tick();
        check(!db.expenses.some(row => row.user_id === 'B'), 'Petición enviada bajo A nunca adopta identidad de B');
        check(allExpenses.length === 0 && !expenseMessage.textContent, 'Respuesta de escritura antigua no modifica vista B');

        await reset(); draftExpense();
        const waitOldWrite = hold(query => query.table === 'expenses' && query.action === 'insert');
        submit(expenseForm); const finishOldWrite = await waitOldWrite();
        const oldContext = sessionContext;
        const oldClientOptions = clientOptions.filter(options => options.accessToken).at(-1);
        await showMockApp({ id: 'B' });
        let rejectedToken = false;
        try { await oldClientOptions.accessToken(); }
        catch { rejectedToken = true; }
        check(rejectedToken && oldContext.controller.signal.aborted, 'Contexto antiguo cancelado antes de nuevas peticiones');
        const waitNewWrite = hold(query => query.table === 'payment_methods' && query.action === 'insert');
        newPaymentMethodInput.value = 'Método B'; submit(paymentMethodForm);
        const finishNewWrite = await waitNewWrite(); const newMutation = activeMutation;
        finishOldWrite(); await tick();
        check(activeMutation === newMutation && newPaymentMethodInput.disabled, 'Finally de A no desbloquea una operación nueva de B');
        finishNewWrite(); await settle();

        await reset();
        const tokenBefore = sessionContext;
        const readsBeforeRefresh = reads.length;
        emitAuth('TOKEN_REFRESHED', sessionFor('A')); await tick();
        check(sessionContext === tokenBefore && reads.length === readsBeforeRefresh, 'Renovar token conserva generación y no duplica cargas');

        await reset();
        db.expenses[0].payment_method_id = 2; await loadExpenses();
        check(![...paymentMethodSelect.options].some(option => option.value === '2'), 'Método inactivo ausente de gastos nuevos');
        check([...historyPaymentFilter.options].some(option => option.value === '2'), 'Historial permite filtrar método inactivo utilizado');
        historyPaymentFilter.value = '2'; applyExpenseFilters();
        check(currentFilteredExpenses.length === 1, 'Filtro inactivo encuentra su gasto');
        startEditingExpense(allExpenses[0]);
        check(paymentMethodSelect.value === '2' && paymentMethodSelect.selectedOptions[0].text.includes('eliminado'), 'Edición ofrece el método inactivo original');
        submit(expenseForm); await settle();
        check(db.expenses[0].payment_method_id === 2, 'Guardar histórico conserva el método eliminado');
        check(![...paymentMethodSelect.options].some(option => option.value === '2'), 'Tras guardar, gasto nuevo excluye otra vez inactivos');
        startEditingExpense(allExpenses[0]); paymentMethodSelect.value = '1'; submit(expenseForm); await settle();
        check(db.expenses[0].payment_method_id === 1, 'Histórico puede cambiar a método activo');

        await reset(); draftExpense();
        let before = db.expenses.length;
        submit(expenseForm); submit(expenseForm);
        check(expenseSubmitButton.disabled && amountInput.disabled, 'Guardar gasto bloquea controles');
        await settle(); check(db.expenses.length === before + 1, 'Doble submit crea exactamente un gasto');
        draftExpense(); nextError = { message: 'error simulado' }; before = db.expenses.length;
        submit(expenseForm); await settle();
        check(db.expenses.length === before && amountInput.value === '12' && !amountInput.disabled, 'Error conserva borrador y restaura controles');
        submit(expenseForm); await settle(); check(db.expenses.length === before + 1, 'Reintento explícito funciona');
        newPaymentMethodInput.value = 'Método único'; before = db.payment_methods.length;
        submit(paymentMethodForm); submit(paymentMethodForm); await settle();
        check(db.payment_methods.length === before + 1, 'Doble submit crea un método');
        newCategoryInput.value = 'Categoría única'; before = db.categories.length;
        submit(categoryForm); submit(categoryForm); await settle();
        check(db.categories.length === before + 1, 'Doble submit crea una categoría');
        const budgetWrites = writes.length;
        monthlyBudgetInput.value = '600'; submit(budgetForm); submit(budgetForm); await settle();
        check(writes.slice(budgetWrites).filter(write => write.table === 'monthly_budgets').length === 1, 'Doble submit guarda una vez el presupuesto mensual');
        newPasswordInput.value = 'contraseña nueva'; const passwordCalls = authCalls.length;
        submit(passwordForm); submit(passwordForm); await settle();
        check(authCalls.slice(passwordCalls).filter(call => call.startsWith('updateUser')).length === 1, 'Doble submit cambia contraseña una vez');
        await signOutCurrentUser();
        registerEmail.value = 'new@example.test'; registerPassword.value = registerPasswordConfirm.value = 'password';
        let authCount = authCalls.length; submit(registerForm); submit(registerForm); await settle();
        check(authCalls.slice(authCount).filter(call => call === 'signUp').length === 1, 'Registro protegido contra doble envío');
        forgotPasswordEmail.value = 'a@example.test'; authCount = authCalls.length;
        submit(forgotPasswordForm); submit(forgotPasswordForm); await settle();
        check(authCalls.slice(authCount).filter(call => call === 'recover').length === 1, 'Solicitud de recuperación protegida');
        document.getElementById('email').value = 'a@example.test'; document.getElementById('password').value = 'password';
        authCount = authCalls.length; submit(loginForm); submit(loginForm); await tick(); await sessionContext.ready;
        check(authCalls.slice(authCount).filter(call => call === 'signIn').length === 1, 'Login protegido contra doble envío');

        await reset(); apiLimit = 137;
        db.expenses = Array.from({ length: 1251 }, (_, index) => ({ ...initial.expenses[0], id: index + 1,
            category_id: 1, payment_method_id: index % 2 ? 2 : 1, amount: 1,
            expense_date: index < 1200 ? date : previous, description: 'Gasto ' + index }));
        await loadExpenses(); const queryCount = reads.filter(read => read.table === 'expenses').length;
        await loadDashboard(); await loadMonthlyEvolution(); await loadCategoryBudgets();
        check(allExpenses.length === 1251 && currentFilteredExpenses.length === 1251, 'Paginación carga más de 1000 incluso con límite API de 137');
        check(totalSpent.textContent === formatCurrency(1200) && paymentSpendingTotal.textContent === formatCurrency(1200), 'Dashboard y distribución incluyen todos los gastos del mes');
        check(monthlySpendingChart.options.data.datasets[0].data.at(-1) === 1200, 'Gráfico usa el total completo');
        check(categoryBudgetList.textContent.includes(formatCurrency(1200)), 'Presupuesto por categoría usa todos los gastos');
        check(reads.filter(read => read.table === 'expenses').length === queryCount, 'Los cálculos no vuelven a consultar expenses');
        let csvBlob; const originalUrl = URL.createObjectURL; const originalClick = HTMLAnchorElement.prototype.click;
        URL.createObjectURL = blob => { csvBlob = blob; return 'blob:test'; }; HTMLAnchorElement.prototype.click = () => {};
        exportExpensesToCsv(); const csv = await csvBlob.text();
        URL.createObjectURL = originalUrl; HTMLAnchorElement.prototype.click = originalClick;
        check(csv.trim().split('\n').length === 1252, 'CSV exporta 1251 gastos más cabecera');
        const complete = allExpenses;
        Query.prototype.run = function () {
            if (this.table === 'expenses' && this.page?.[0] > 0) return { error: { message: 'page failed' }, data: null };
            return originalRun.call(this);
        };
        await loadExpenses().catch(() => {});
        check(allExpenses === complete, 'Fallo intermedio no sustituye datos completos por una página parcial');
        check(escapeCsvValue('=1+1').startsWith('"\''), 'CSV neutraliza fórmulas');

        await reset();
        db.payment_methods[0].name = 'A'.repeat(60); db.categories[0].name = 'B'.repeat(100);
        await loadPaymentMethods(); await loadPaymentMethodSettings(); await loadCategories(); await loadBudgetSettings();
        showView('budgets');
        check(document.documentElement.scrollWidth <= document.documentElement.clientWidth, 'Nombres largos no desbordan móvil/escritorio');
        check(newPaymentMethodInput.labels.length === 1, 'Método de pago tiene label accesible');
        check(testErrors.length === 0, 'Sin errores JavaScript no controlados');
        document.title = 'TESTS PASSED';
    } catch (error) { logs.push('FAIL ' + error.stack); document.title = 'TESTS FAILED'; }
    const out = document.createElement('pre'); out.id = 'test-results'; out.textContent = logs.join('\n'); document.body.append(out);
})();
