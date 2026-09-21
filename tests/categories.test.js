const logs = [];
const assert = (value, message) => { if (!value) throw new Error(message); logs.push('OK: ' + message); };
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const options = el => [...el.options].map(o => o.value);
(async () => {
try {
    await showMockApp({id:'A',email:'a@example.test'});
    assert(allCategories.length === 3 && allCategories.every(c => c.id !== 4), 'Solo carga categorías del usuario A');
    assert(!options(categorySelect).includes('3') && options(historyCategoryFilter).includes('3'), 'Nueva entrada solo activas; historial incluye eliminadas');
    assert(!document.getElementById('category-budget-3'), 'Presupuestos ocultan categorías eliminadas');
    historyCategoryFilter.value = '3'; applyExpenseFilters();
    assert(currentFilteredExpenses.length === 1, 'Filtra un gasto de categoría eliminada');
    startEditingExpense(allExpenses[0]);
    assert(categorySelect.value === '3' && categorySelect.selectedOptions[0].text.includes('eliminada'), 'Edición conserva la categoría eliminada original');
    assert(options(categorySelect).includes('1') && options(categorySelect).includes('2'), 'Edición permite pasar a una categoría activa');
    const expenseBefore = db.expenses[0];
    expenseForm.dispatchEvent(new Event('submit', {bubbles:true,cancelable:true})); await tick(); await tick();
    assert(String(db.expenses[0].category_id) === '3' && editingExpenseId === null, 'Guarda la edición con categoría eliminada y vuelve al modo nuevo');
    assert(!options(categorySelect).includes('3'), 'Tras guardar no ofrece eliminadas en gastos nuevos');
    startEditingExpense(allExpenses[0]); navAddExpense.click();
    assert(editingExpenseId === null && !options(categorySelect).includes('3'), '+ Gasto abandona edición y excluye eliminadas');
    startEditingExpense(allExpenses[0]); categorySelect.value = '1';
    expenseForm.dispatchEvent(new Event('submit', {bubbles:true,cancelable:true})); await tick(); await tick();
    assert(String(db.expenses[0].category_id) === '1', 'Permite cambiar gasto histórico a categoría activa');

    monthlyBudgetInput.value = '1234'; document.getElementById('category-budget-1').value = '77';
    amountInput.value = '23'; descriptionInput.value = 'Borrador'; categorySelect.value = '1';
    assert(await saveCategory({name:'  Viajes  '}), 'Añade categoría');
    assert(db.categories.some(c=>c.user_id==='A' && c.name==='Viajes'), 'Aplica trim y guarda propietario');
    assert(monthlyBudgetInput.value === '1234' && document.getElementById('category-budget-1').value === '77', 'Añadir conserva presupuestos sin guardar');
    assert(amountInput.value === '23' && descriptionInput.value === 'Borrador' && categorySelect.value === '1', 'Añadir conserva borrador de gasto');
    const id = db.categories.find(c=>c.name==='Viajes').id;
    assert(!await saveCategory({name:' viajes '}), 'Gestiona duplicado activo sin crear filas');
    assert(categorySettingsMessage.textContent.includes('Ya tienes'), 'Mensaje comprensible para duplicado activo');
    assert(!await saveCategory({name:' restaurantes '}), 'Gestiona duplicado inactivo');
    assert(categorySettingsMessage.textContent.includes('restaurarla'), 'Sugiere restaurar categoría inactiva');
    assert(!await saveCategory({name:'   '}), 'Rechaza nombre vacío');

    await saveCategory({name:'Restaurante favorito'},3);
    assert(db.categories.find(c=>c.id===3).name === 'Restaurante favorito', 'Renombra categoría inactiva conservando ID');
    assert(historyCategoryFilter.querySelector('option[value="3"]').text.includes('Restaurante favorito'), 'Actualiza nombre del filtro histórico');
    historyCategoryFilter.value = '1'; applyExpenseFilters();
    await saveCategory({name:'Alimentación familiar'},1);
    assert(currentFilteredExpenses.length === 1 && expenseTableBody.textContent.includes('Alimentación familiar'), 'Renombrar actualiza historial y conserva filtro');
    assert(document.getElementById('category-budget-1').value === '77', 'Renombrar no descarta presupuesto en edición');
    const originalBudget = JSON.stringify(db.category_budgets.find(b=>b.id===10));
    await saveCategory({is_active:false},1);
    assert(!options(categorySelect).includes('1') && !document.getElementById('category-budget-1'), 'Eliminar oculta categoría de gastos nuevos y presupuestos');
    assert(expenseTableBody.textContent.includes('Alimentación familiar') && options(historyCategoryFilter).includes('1'), 'Eliminar conserva historial y filtro');
    assert(JSON.stringify(db.category_budgets.find(b=>b.id===10))===originalBudget, 'Soft delete no modifica presupuesto existente');
    showInactiveCategoriesButton.click();
    assert(!inactiveCategorySettingsList.hidden && showInactiveCategoriesButton.textContent.includes('(2)'), 'Sección eliminadas plegable con contador');
    await saveCategory({is_active:true},1);
    assert(options(categorySelect).includes('1') && document.getElementById('category-budget-1').value==='100', 'Restaurar recupera selector y presupuesto guardado');
    assert(!inactiveCategorySettingsList.hidden, 'Actualizar mantiene sección eliminadas abierta');

    showView('budgets');
    const row = [...categorySettingsList.children].find(r=>r.textContent.includes('Viajes'));
    row.querySelector('button').click();
    const rename = row.querySelector('form'); rename.querySelector('input').value = 'Vacaciones';
    rename.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})); await tick(); await tick();
    assert(db.categories.find(c=>c.id===id).name==='Vacaciones', 'Formulario inline guarda renombrado');
    const freshRow = [...categorySettingsList.children].find(r=>r.textContent.includes('Vacaciones'));
    freshRow.querySelector('button').click();
    freshRow.querySelector('button[type="button"]').click();
    assert(!freshRow.querySelector('form'), 'Cancelar renombrado recupera acciones');

    // Error de red / RLS y conflicto creado en otra pestaña.
    nextError = {code:'42501',message:'blocked'};
    assert(!await saveCategory({name:'No guardar'}), 'Error de escritura no simula éxito');
    assert(!categoryMutationPending && !newCategoryInput.disabled, 'Error restablece controles');
    db.categories.push({id:20,user_id:'A',name:'Otro dispositivo',is_active:false});
    assert(!await saveCategory({name:'Otro dispositivo'}), 'Detecta duplicado remoto no cargado');
    assert(categorySettingsMessage.textContent.includes('restaurarla'), 'Duplicado remoto inactivo también sugiere restauración');
    await copyPreviousMonthBudgets();
    assert(db.category_budgets.find(b=>b.id===12).amount===66, 'Copiar conserva presupuesto existente de categoría inactiva');
    assert(!writes.some(w=>w.table==='categories' && w.action==='delete'), 'Ninguna operación borra categorías físicamente');
    assert(!writes.some(w=>w.table==='category_budgets' && w.action==='delete'), 'Copia no borra presupuestos');
    assert(db.category_budgets.find(b=>b.id===10).amount===111, 'Copia actualiza presupuesto de categoría activa');

    for (const c of [...allCategories].filter(c=>c.is_active)) await saveCategory({is_active:false},c.id);
    assert(categorySelect.options.length===1 && categorySettingsList.textContent.includes('No tienes'), 'Estado sin categorías activas');
    await saveCategory({is_active:true},1);
    mockUser = 'B'; await showMockApp({id:'B',email:'b@example.test'});
    assert(allCategories.length===1 && allCategories[0].id===4 && !options(historyCategoryFilter).includes('1'), 'Cambiar usuario limpia catálogo y filtro anteriores');
    assert(db.categories.find(c=>c.id===4).name==='Privada B', 'Las operaciones de A no cambiaron categorías de B');
    assert(allExpenses.length===0 && !expenseTableBody.textContent.includes('Alimentación familiar'), 'Cambio de sesión no conserva gastos ajenos');
    clearCategoryState();
    assert(allCategories.length===0 && !expenseTableBody.textContent && categorySelect.options.length===1, 'Cerrar sesión limpia datos de categorías y gastos');
    mockUser='A'; await showMockApp({id:'A',email:'a@example.test'}); showView('budgets');
    // Texto malicioso se muestra como texto, nunca como HTML.
    await saveCategory({name:'<img src=x onerror=alert(1)>'});
    assert(!categorySettingsList.querySelector('img'), 'Nombres se insertan como texto');
    assert(document.getElementById('category-settings').scrollWidth <= document.getElementById('category-settings').clientWidth, 'La sección no desborda horizontalmente');
    assert([...document.querySelectorAll('form')].every(f=>!f.querySelector('form')), 'No hay formularios anidados');
    const originalLoadBudgetSettings = loadBudgetSettings;
    loadBudgetSettings = async () => false;
    assert(await saveCategory({is_active:false},1), 'Guardado confirmado aunque falle recarga de presupuestos');
    assert(!document.getElementById('category-budget-1'), 'La categoría eliminada se oculta aunque falle la recarga');
    assert(categorySettingsMessage.textContent.includes('recarga'), 'Distingue guardado correcto y recarga fallida');
    loadBudgetSettings = originalLoadBudgetSettings;
    await saveCategory({is_active:true},1);
    await saveCategory({name:'Nombre muy largo '.repeat(20)},1);
    assert(categorySettings.scrollWidth <= categorySettings.clientWidth, 'Nombres largos no desbordan en móvil');
    const failedRow = [...categorySettingsList.children].find(r=>r.textContent.includes('Hogar'));
    // Hogar está en eliminadas en este punto; comprobar el formulario allí.
    showInactiveCategoriesButton.click();
    const deletedRow = [...inactiveCategorySettingsList.children].find(r=>r.textContent.includes('Hogar'));
    deletedRow.querySelector('button').click();
    const failedForm = deletedRow.querySelector('form');
    failedForm.querySelector('input').value='Vacaciones';
    failedForm.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})); await tick(); await tick();
    assert(failedForm.isConnected && failedForm.querySelector('input').value==='Vacaciones', 'Duplicado al renombrar conserva formulario y texto');
    document.title='TESTS PASSED';
} catch(error) { logs.push('FAIL: '+error.stack); document.title='TESTS FAILED'; }
const output=document.createElement('pre');output.id='test-results';output.textContent=logs.join('\n');document.body.prepend(output);
})();
