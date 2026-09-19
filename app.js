const SUPABASE_URL = "https://pwywhqgpnxtjmiledfbu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_wjfbUMrLbJO5cQl2h6TgDg_anYBQWN3";


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


const loginSection =
    document.getElementById("login-section");

const appSection =
    document.getElementById("app-section");

const loginForm =
    document.getElementById("login-form");

const showRegisterButton =
    document.getElementById(
        "show-register-button"
    );

const registerContainer =
    document.getElementById(
        "register-container"
    );

const registerForm =
    document.getElementById(
        "register-form"
    );

const registerEmail =
    document.getElementById(
        "register-email"
    );

const registerPassword =
    document.getElementById(
        "register-password"
    );

const registerPasswordConfirm =
    document.getElementById(
        "register-password-confirm"
    );

const registerMessage =
    document.getElementById(
        "register-message"
    );

const backToLoginButton =
    document.getElementById(
        "back-to-login-button"
    );

const forgotPasswordButton =
    document.getElementById(
        "forgot-password-button"
    );

const forgotPasswordContainer =
    document.getElementById(
        "forgot-password-container"
    );

const forgotPasswordForm =
    document.getElementById(
        "forgot-password-form"
    );

const forgotPasswordEmail =
    document.getElementById(
        "forgot-password-email"
    );

const forgotPasswordMessage =
    document.getElementById(
        "forgot-password-message"
    );

const backFromForgotPasswordButton =
    document.getElementById(
        "back-from-forgot-password-button"
    );

const newPasswordContainer =
    document.getElementById(
        "new-password-container"
    );

const newPasswordForm =
    document.getElementById(
        "new-password-form"
    );

const newRecoveryPassword =
    document.getElementById(
        "new-recovery-password"
    );

const newRecoveryPasswordConfirm =
    document.getElementById(
        "new-recovery-password-confirm"
    );

const newPasswordMessage =
    document.getElementById(
        "new-password-message"
    );

const expenseForm =
    document.getElementById("expense-form");

const expenseDate =
    document.getElementById("expense-date");

const amountInput =
    document.getElementById("amount");

const categorySelect =
    document.getElementById("category");

const descriptionInput =
    document.getElementById("description");

const merchantInput =
    document.getElementById("merchant");

const paymentMethodSelect =
    document.getElementById("payment-method");

const recurringInput =
    document.getElementById("is-recurring");

const noteInput =
    document.getElementById("note");

const expenseMessage =
    document.getElementById("expense-message");

const recentExpensesToggle =
    document.getElementById("recent-expenses-toggle");

const recentExpensesContent =
    document.getElementById("recent-expenses-content");

const recentExpensesArrow =
    document.getElementById("recent-expenses-arrow");

const categoryBudgetsToggle =
    document.getElementById(
        "category-budgets-toggle"
    );

const categoryBudgetsContent =
    document.getElementById(
        "category-budgets-content"
    );

const categoryBudgetsArrow =
    document.getElementById(
        "category-budgets-arrow"
    );

const recentExpensesBody =
    document.getElementById("recent-expenses-body");

const expenseTableBody =
    document.getElementById("expense-table-body");

const tableSortButtons =
    document.querySelectorAll(
        ".table-sort-button"
    );

const historyFiltersToggle =
    document.getElementById(
        "history-filters-toggle"
    );

const historyFiltersContent =
    document.getElementById(
        "history-filters-content"
    );

const historyFiltersArrow =
    document.getElementById(
        "history-filters-arrow"
    );

const historyCategoryFilter =
    document.getElementById("history-category-filter");

const historyPaymentFilter =
    document.getElementById("history-payment-filter");

const historyDateFrom =
    document.getElementById("history-date-from");

const historyDateTo =
    document.getElementById("history-date-to");

const historySearch =
    document.getElementById("history-search");

const clearHistoryFiltersButton =
    document.getElementById("clear-history-filters");

const exportExpensesButton =
    document.getElementById(
        "export-expenses-button"
    );

const filteredTotal =
    document.getElementById("filtered-total");

const filteredCount =
    document.getElementById("filtered-count");

const filteredAverage =
    document.getElementById("filtered-average");

const viewAllExpensesButton =
    document.getElementById("view-all-expenses-button");

const dashboardMonth =
    document.getElementById("dashboard-month");

const totalSpent =
    document.getElementById("total-spent");

const monthlyBudget =
    document.getElementById("monthly-budget");

const budgetPercentage =
    document.getElementById("budget-percentage");

const budgetProgress =
    document.getElementById("budget-progress");

const availableBudget =
    document.getElementById(
        "available-budget"
    );

const monthlySpendingCanvas =
    document.getElementById("monthly-spending-chart");

const categoryBudgetList =
    document.getElementById("category-budget-list");

const budgetForm =
    document.getElementById("budget-form");

const monthlyBudgetInput =
    document.getElementById("monthly-budget-input");

const categoryBudgetInputs =
    document.getElementById("category-budget-inputs");

const budgetMessage =
    document.getElementById("budget-message");

const copyPreviousBudgetButton =
    document.getElementById(
        "copy-previous-budget-button"
    );

const currencySelect =
    document.getElementById(
        "currency-select"
    );

const paymentMethodForm =
    document.getElementById(
        "payment-method-form"
    );

const newPaymentMethodInput =
    document.getElementById(
        "new-payment-method"
    );

const paymentMethodSettingsList =
    document.getElementById(
        "payment-method-settings-list"
    );

const showInactivePaymentMethodsButton =
    document.getElementById(
        "show-inactive-payment-methods-button"
    );

const inactivePaymentMethodSettingsList =
    document.getElementById(
        "inactive-payment-method-settings-list"
    );

const paymentMethodSettingsMessage =
    document.getElementById(
        "payment-method-settings-message"
    );

const passwordForm =
    document.getElementById(
        "password-form"
    );

const newPasswordInput =
    document.getElementById(
        "new-password"
    );

const passwordMessage =
    document.getElementById(
        "password-message"
    );

const homeView =
    document.getElementById("home-view");

const historyView =
    document.getElementById("history-view");

const expenseView =
    document.getElementById("expense-view");

const budgetsView =
    document.getElementById("budgets-view");


const navHome =
    document.getElementById("nav-home");

const navHistory =
    document.getElementById("nav-history");

const navAddExpense =
    document.getElementById("nav-add-expense");

const navBudgets =
    document.getElementById("nav-budgets");

const expenseSubmitButton =
    document.getElementById("expense-submit-button");

const cancelEditButton =
    document.getElementById("cancel-edit-button");

let editingExpenseId = null;

let monthlySpendingChart = null;

let allExpenses = [];

let currentFilteredExpenses = [];

let currentCurrency =
    "EUR";

let userSettingsId =
    null;

let expenseSortField =
    "expense_date";

let expenseSortDirection =
    "desc";

const loginMessage =
    document.getElementById("login-message");

const userInfo =
    document.getElementById("user-info");

const categoryList =
    document.getElementById("category-list");

const logoutButton =
    document.getElementById("logout-button");


function setTodayAsDefault() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    expenseDate.value =
        `${year}-${month}-${day}`;
}


function formatDate(dateString) {

    const [year, month, day] =
        dateString.split("-");

    return `${day}-${month}-${year}`;
}


function formatCurrency(amount) {

    const numericAmount =
        Number(amount);


    if (currentCurrency === "PYG") {

        const formattedAmount =
            new Intl.NumberFormat(
                "es-PY",
                {
                    maximumFractionDigits: 0
                }
            ).format(
                numericAmount
            );

        return `Gs. ${formattedAmount}`;
    }


    const formattedAmount =
        new Intl.NumberFormat(
            "es-ES",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        ).format(
            numericAmount
        );


    if (currentCurrency === "USD") {

        return `US$ ${formattedAmount}`;
    }


    return `${formattedAmount} €`;
}


function escapeCsvValue(value) {

    if (
        value === null
        || value === undefined
    ) {

        return "";
    }


    const text =
        String(value)
            .replaceAll(
                '"',
                '""'
            );


    return `"${text}"`;
}


function getCurrentMonthRange() {

    const now =
        new Date();

    const year =
        now.getFullYear();

    const month =
        now.getMonth();


    const start =
        new Date(
            year,
            month,
            1
        );

    const nextMonth =
        new Date(
            year,
            month + 1,
            1
        );


    const formatDate =
        (date) => {

            const year =
                date.getFullYear();

            const month =
                String(
                    date.getMonth() + 1
                ).padStart(2, "0");

            const day =
                String(
                    date.getDate()
                ).padStart(2, "0");

            return `${year}-${month}-${day}`;
        };


    return {
        startDate:
            formatDate(start),

        nextMonthDate:
            formatDate(nextMonth),

        label:
            now.toLocaleDateString(
                "es-ES",
                {
                    month: "long",
                    year: "numeric"
                }
            )
    };
}


function getPreviousMonthStart() {

    const now =
        new Date();


    const previousMonth =
        new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1
        );


    const year =
        previousMonth.getFullYear();

    const month =
        String(
            previousMonth.getMonth() + 1
        ).padStart(2, "0");


    return `${year}-${month}-01`;
}


function showView(viewName) {

    homeView.hidden =
        viewName !== "home";

    historyView.hidden =
        viewName !== "history";

    expenseView.hidden =
        viewName !== "expense";

    budgetsView.hidden =
        viewName !== "budgets";


    navHome.classList.toggle(
        "active",
        viewName === "home"
    );

    navHistory.classList.toggle(
        "active",
        viewName === "history"
    );

    navAddExpense.classList.toggle(
        "active",
        viewName === "expense"
    );

    navBudgets.classList.toggle(
        "active",
        viewName === "budgets"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showPasswordRecoveryScreen() {

    appSection.hidden =
        true;

    loginSection.hidden =
        false;


    loginForm.hidden =
        true;

    showRegisterButton.hidden =
        true;

    forgotPasswordButton.hidden =
        true;

    loginMessage.hidden =
        true;


    registerContainer.hidden =
        true;

    forgotPasswordContainer.hidden =
        true;


    newPasswordContainer.hidden =
        false;

    newPasswordMessage.textContent =
        "";
}


navHome.addEventListener(
    "click",
    () => {
        showView("home");
    }
);


navHistory.addEventListener(
    "click",
    () => {
        showView("history");
    }
);


navAddExpense.addEventListener(
    "click",
    () => {
        showView("expense");
    }
);


navBudgets.addEventListener(
    "click",
    () => {
        showView("budgets");
    }
);


recentExpensesToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            !recentExpensesContent.hidden;


        recentExpensesContent.hidden =
            isOpen;


        recentExpensesToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );


        recentExpensesArrow.textContent =
            isOpen
                ? "▼"
                : "▲";
    }
);


categoryBudgetsToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            !categoryBudgetsContent.hidden;


        categoryBudgetsContent.hidden =
            isOpen;


        categoryBudgetsToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );


        categoryBudgetsArrow.textContent =
            isOpen
                ? "▼"
                : "▲";
    }
);


historyFiltersToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            !historyFiltersContent.hidden;


        historyFiltersContent.hidden =
            isOpen;


        historyFiltersToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );


        historyFiltersArrow.textContent =
            isOpen
                ? "▼"
                : "▲";
    }
);



viewAllExpensesButton.addEventListener(
    "click",
    () => {
        showView("history");
    }
);


for (
    const button
    of tableSortButtons
) {

    button.addEventListener(
        "click",
        () => {

            const selectedField =
                button.dataset.sort;


            if (
                expenseSortField
                === selectedField
            ) {

                expenseSortDirection =
                    expenseSortDirection
                    === "asc"
                        ? "desc"
                        : "asc";

            } else {

                expenseSortField =
                    selectedField;

                expenseSortDirection =
                    "asc";
            }


            applyExpenseFilters();
        }
    );
}


currencySelect.addEventListener(
    "change",
    async () => {

        const selectedCurrency =
            currencySelect.value;


        if (!userSettingsId) {
            return;
        }


        const { error } =
            await supabaseClient
                .from("user_settings")
                .update({
                    currency_code:
                        selectedCurrency
                })
                .eq(
                    "id",
                    userSettingsId
                );


        if (error) {

            console.error(
                "Error cambiando moneda:",
                error
            );

            return;
        }


        currentCurrency =
            selectedCurrency;


        await loadExpenses();

        await loadDashboard();

        await loadMonthlyEvolution();

        await loadCategoryBudgets();
    }
);


historyCategoryFilter.addEventListener(
    "change",
    applyExpenseFilters
);


historyPaymentFilter.addEventListener(
    "change",
    applyExpenseFilters
);


historyDateFrom.addEventListener(
    "change",
    applyExpenseFilters
);


historyDateTo.addEventListener(
    "change",
    applyExpenseFilters
);


historySearch.addEventListener(
    "input",
    applyExpenseFilters
);


clearHistoryFiltersButton.addEventListener(
    "click",
    () => {

        historyCategoryFilter.value = "";
        historyPaymentFilter.value = "";

        historyDateFrom.value = "";
        historyDateTo.value = "";

        historySearch.value = "";

        applyExpenseFilters();
    }
);


exportExpensesButton.addEventListener(
    "click",
    () => {

        exportExpensesToCsv();
    }
);


forgotPasswordButton.addEventListener(
    "click",
    () => {

        loginForm.hidden =
            true;

        showRegisterButton.hidden =
            true;

        forgotPasswordButton.hidden =
            true;

        loginMessage.hidden =
            true;

        registerContainer.hidden =
            true;

        newPasswordContainer.hidden =
            true;


        forgotPasswordContainer.hidden =
            false;

        forgotPasswordMessage.textContent =
            "";
    }
);


backFromForgotPasswordButton.addEventListener(
    "click",
    () => {

        forgotPasswordContainer.hidden =
            true;

        newPasswordContainer.hidden =
            true;

        registerContainer.hidden =
            true;


        loginForm.hidden =
            false;

        showRegisterButton.hidden =
            false;

        forgotPasswordButton.hidden =
            false;

        loginMessage.hidden =
            false;


        forgotPasswordMessage.textContent =
            "";
    }
);


showRegisterButton.addEventListener(
    "click",
    () => {

        loginForm.hidden =
            true;

        showRegisterButton.hidden =
            true;
        
        forgotPasswordButton.hidden =
            true;

        loginMessage.hidden =
            true;

        registerContainer.hidden =
            false;

        registerMessage.textContent =
            "";
    }
);


backToLoginButton.addEventListener(
    "click",
    () => {

        registerContainer.hidden =
            true;

        loginForm.hidden =
            false;

        showRegisterButton.hidden =
            false;

        forgotPasswordButton.hidden =
            false;

        loginMessage.hidden =
            false;

        registerMessage.textContent =
            "";
    }
);


registerForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const email =
            registerEmail.value
                .trim();

        const password =
            registerPassword.value;

        const passwordConfirm =
            registerPasswordConfirm.value;


        if (
            password
            !== passwordConfirm
        ) {

            registerMessage.textContent =
                "Las contraseñas no coinciden.";

            return;
        }


        if (
            password.length < 8
        ) {

            registerMessage.textContent =
                "La contraseña debe tener al menos 8 caracteres.";

            return;
        }


        registerMessage.textContent =
            "Creando cuenta...";


        const redirectUrl =
            window.location.origin
            + window.location.pathname;


        const {
            data,
            error
        } =
            await supabaseClient
                .auth
                .signUp({
                    email:
                        email,

                    password:
                        password,

                    options: {
                        emailRedirectTo:
                            redirectUrl
                    }
                });


        if (error) {

            registerMessage.textContent =
                "Error: "
                + error.message;

            return;
        }


        registerForm.reset();


        if (data.session) {

            registerMessage.textContent =
                "";

            await showApp(
                data.user
            );

            return;
        }


        registerMessage.textContent =
            "Cuenta creada. Revisa tu correo y confirma tu email antes de iniciar sesión.";
    }
);


forgotPasswordForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const email =
            forgotPasswordEmail
                .value
                .trim();


        const redirectUrl =
            window.location.origin
            + window.location.pathname
            + "?recovery=1";


        forgotPasswordMessage.textContent =
            "Enviando enlace...";


        const { error } =
            await supabaseClient
                .auth
                .resetPasswordForEmail(
                    email,
                    {
                        redirectTo:
                            redirectUrl
                    }
                );


        if (error) {

            forgotPasswordMessage.textContent =
                "Error: "
                + error.message;

            return;
        }


        forgotPasswordForm.reset();


        forgotPasswordMessage.textContent =
            "Si existe una cuenta asociada a ese email, recibirás un enlace para cambiar la contraseña.";
    }
);


newPasswordForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const password =
            newRecoveryPassword.value;

        const passwordConfirm =
            newRecoveryPasswordConfirm.value;


        if (
            password
            !== passwordConfirm
        ) {

            newPasswordMessage.textContent =
                "Las contraseñas no coinciden.";

            return;
        }


        if (
            password.length < 8
        ) {

            newPasswordMessage.textContent =
                "La contraseña debe tener al menos 8 caracteres.";

            return;
        }


        newPasswordMessage.textContent =
            "Actualizando contraseña...";


        const { error } =
            await supabaseClient
                .auth
                .updateUser({
                    password:
                        password
                });


        if (error) {

            newPasswordMessage.textContent =
                "Error: "
                + error.message;

            return;
        }


        newPasswordForm.reset();


        await supabaseClient
            .auth
            .signOut();


        window.history.replaceState(
            {},
            document.title,
            window.location.pathname
        );


        newPasswordContainer.hidden =
            true;

        forgotPasswordContainer.hidden =
            true;

        registerContainer.hidden =
            true;


        loginForm.hidden =
            false;

        showRegisterButton.hidden =
            false;

        forgotPasswordButton.hidden =
            false;

        loginMessage.hidden =
            false;


        loginMessage.textContent =
            "Contraseña actualizada. Ya puedes iniciar sesión con la nueva contraseña.";
    }
);


loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });


    if (error) {
        loginMessage.textContent =
            "Error: " + error.message;

        return;
    }


    loginMessage.textContent = "";

    showApp(data.user);
});


async function showApp(user) {

    loginSection.hidden = true;
    appSection.hidden = false;

    showView("home");

    userInfo.textContent =
        `Conectado como: ${user.email}`;

    await loadCategories();

    await loadPaymentMethods();

    await loadPaymentMethodSettings();

    await loadUserSettings();

    await loadExpenses();

    await loadDashboard();

    await loadMonthlyEvolution();

    await loadCategoryBudgets();

    await loadBudgetSettings();

    setTodayAsDefault();
}


async function loadCategories() {

    const { data, error } =
        await supabaseClient
            .from("categories")
            .select("id, name")
            .eq("is_active", true)
            .order("name");


    if (error) {

        categoryList.innerHTML =
            `<li>Error: ${error.message}</li>`;

        return;
    }


    categoryList.innerHTML = "";

    categorySelect.innerHTML =
        `<option value="">
            Selecciona una categoría
        </option>`;

    historyCategoryFilter.innerHTML =
        `<option value="">
            Todas
        </option>`;

    for (const category of data) {

        // Añadimos la categoría a la lista que ya teníamos

        const item =
            document.createElement("li");

        item.textContent =
            category.name;

        categoryList.appendChild(item);


        // Añadimos la misma categoría al desplegable

        const option =
            document.createElement("option");

        option.value =
            category.id;

        option.textContent =
            category.name;

        categorySelect.appendChild(option);

        const filterOption =
            document.createElement("option");

        filterOption.value =
            category.id;

        filterOption.textContent =
            category.name;

        historyCategoryFilter.appendChild(
            filterOption
        );
    }
}


async function loadPaymentMethods() {

    const { data, error } =
        await supabaseClient
            .from("payment_methods")
            .select("id, name")
            .eq("is_active", true)
            .order("name");


    if (error) {

        expenseMessage.textContent =
            "Error cargando métodos de pago: "
            + error.message;

        return;
    }


    paymentMethodSelect.innerHTML =
        `<option value="">
            Selecciona método de pago
        </option>`;

    historyPaymentFilter.innerHTML =
        `<option value="">
            Todos
        </option>`;

    for (const method of data) {

        const option =
            document.createElement("option");

        option.value =
            method.id;

        option.textContent =
            method.name;

        paymentMethodSelect.appendChild(option);

        const filterOption =
            document.createElement("option");

        filterOption.value =
            method.id;

        filterOption.textContent =
            method.name;

        historyPaymentFilter.appendChild(
            filterOption
        );
    }
}


async function loadPaymentMethodSettings() {

    const inactiveSectionWasOpen =
        showInactivePaymentMethodsButton
            .getAttribute("aria-expanded")
        === "true";


    const { data, error } =
        await supabaseClient
            .from("payment_methods")
            .select(`
                id,
                name,
                is_active
            `)
            .order("name");


    if (error) {

        paymentMethodSettingsMessage.textContent =
            "Error cargando métodos de pago: "
            + error.message;

        return;
    }


    const activeMethods =
        data.filter(
            method => method.is_active
        );


    const inactiveMethods =
        data.filter(
            method => !method.is_active
        );


    paymentMethodSettingsList.innerHTML =
        "";

    inactivePaymentMethodSettingsList.innerHTML =
        "";


    /*
        MÉTODOS ACTIVOS
    */

    if (activeMethods.length === 0) {

        paymentMethodSettingsList.textContent =
            "No tienes métodos de pago activos.";
    }


    for (const method of activeMethods) {

        const row =
            document.createElement("div");

        row.className =
            "payment-method-setting-row";


        const name =
            document.createElement("span");

        name.textContent =
            method.name;


        const deleteButton =
            document.createElement("button");

        deleteButton.type =
            "button";

        deleteButton.className =
            "secondary-button";

        deleteButton.textContent =
            "Eliminar";


        deleteButton.addEventListener(
            "click",
            async () => {

                const confirmed =
                    window.confirm(
                        `¿Eliminar "${method.name}" de tus métodos de pago?\n\nPodrás restaurarlo después.`
                    );


                if (!confirmed) {

                    return;
                }


                const { error } =
                    await supabaseClient
                        .from("payment_methods")
                        .update({
                            is_active:
                                false
                        })
                        .eq(
                            "id",
                            method.id
                        );


                if (error) {

                    paymentMethodSettingsMessage.textContent =
                        "Error: "
                        + error.message;

                    return;
                }


                await loadPaymentMethods();

                await loadPaymentMethodSettings();


                paymentMethodSettingsMessage.textContent =
                    `"${method.name}" se ha eliminado de tus métodos activos.`;
            }
        );


        row.appendChild(name);

        row.appendChild(
            deleteButton
        );


        paymentMethodSettingsList.appendChild(
            row
        );
    }


    /*
        MÉTODOS ELIMINADOS
    */

    for (const method of inactiveMethods) {

        const row =
            document.createElement("div");

        row.className =
            "payment-method-setting-row";


        const name =
            document.createElement("span");

        name.textContent =
            method.name;


        const restoreButton =
            document.createElement("button");

        restoreButton.type =
            "button";

        restoreButton.className =
            "secondary-button";

        restoreButton.textContent =
            "Restaurar";


        restoreButton.addEventListener(
            "click",
            async () => {

                const { error } =
                    await supabaseClient
                        .from("payment_methods")
                        .update({
                            is_active:
                                true
                        })
                        .eq(
                            "id",
                            method.id
                        );


                if (error) {

                    paymentMethodSettingsMessage.textContent =
                        "Error: "
                        + error.message;

                    return;
                }


                await loadPaymentMethods();

                await loadPaymentMethodSettings();


                paymentMethodSettingsMessage.textContent =
                    `"${method.name}" se ha restaurado.`;
            }
        );


        row.appendChild(name);

        row.appendChild(
            restoreButton
        );


        inactivePaymentMethodSettingsList.appendChild(
            row
        );
    }


    /*
        BOTÓN DE MÉTODOS ELIMINADOS
    */

    if (inactiveMethods.length === 0) {

        showInactivePaymentMethodsButton.hidden =
            true;

        showInactivePaymentMethodsButton
            .setAttribute(
                "aria-expanded",
                "false"
            );

        inactivePaymentMethodSettingsList.hidden =
            true;

    } else {

        showInactivePaymentMethodsButton.hidden =
            false;


        showInactivePaymentMethodsButton
            .setAttribute(
                "aria-expanded",
                inactiveSectionWasOpen
                    ? "true"
                    : "false"
            );


        inactivePaymentMethodSettingsList.hidden =
            !inactiveSectionWasOpen;


        showInactivePaymentMethodsButton.textContent =
            `Métodos eliminados (${inactiveMethods.length}) ${
                inactiveSectionWasOpen
                    ? "▲"
                    : "▼"
            }`;
    }
}


async function loadUserSettings() {

    const { data, error } =
        await supabaseClient
            .from("user_settings")
            .select(`
                id,
                currency_code
            `)
            .maybeSingle();


    if (error) {

        console.error(
            "Error cargando configuración:",
            error
        );

        return;
    }


    if (data) {

        userSettingsId =
            data.id;

        currentCurrency =
            data.currency_code;

        currencySelect.value =
            currentCurrency;

        return;
    }


    const {
        data: newSettings,
        error: insertError
    } =
        await supabaseClient
            .from("user_settings")
            .insert({
                currency_code: "EUR"
            })
            .select(`
                id,
                currency_code
            `)
            .single();


    if (insertError) {

        console.error(
            "Error creando configuración:",
            insertError
        );

        return;
    }


    userSettingsId =
        newSettings.id;

    currentCurrency =
        newSettings.currency_code;

    currencySelect.value =
        currentCurrency;
}


async function loadExpenses() {

    const { data, error } =
        await supabaseClient
            .from("expenses")
            .select(`
                id,
                expense_date,
                amount,
                category_id,
                payment_method_id,
                description,
                merchant,
                is_recurring,
                note,
                created_at,
                categories (
                    name
                ),
                payment_methods (
                    name
                )
            `)
            .order(
                "expense_date",
                {
                    ascending: false
                }
            )
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (error) {

        expenseList.textContent =
            "Error cargando gastos: "
            + error.message;

        return;
    }


    allExpenses = data;


    renderRecentExpenses();

    applyExpenseFilters();
}


function renderRecentExpenses() {

    recentExpensesBody.innerHTML = "";


    const recentExpenses =
        allExpenses.slice(0, 5);


    if (recentExpenses.length === 0) {

        const row =
            document.createElement("tr");

        const cell =
            document.createElement("td");

        cell.colSpan = 4;

        cell.textContent =
            "Todavía no hay gastos.";

        row.appendChild(cell);

        recentExpensesBody.appendChild(row);

        return;
    }


    for (const expense of recentExpenses) {

        const row =
            document.createElement("tr");


        const dateCell =
            document.createElement("td");

        dateCell.textContent =
            formatDate(
                expense.expense_date
            );


        const amountCell =
            document.createElement("td");

        amountCell.textContent =
            formatCurrency(
                expense.amount
            );


        const categoryCell =
            document.createElement("td");

        categoryCell.textContent =
            expense.categories.name;


        const merchantCell =
            document.createElement("td");

        merchantCell.textContent =
            expense.merchant || "—";


        row.appendChild(dateCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);
        row.appendChild(merchantCell);


        recentExpensesBody.appendChild(row);
    }
}


function renderExpenseTable(expenses) {

    expenseTableBody.innerHTML = "";


    if (expenses.length === 0) {

        const row =
            document.createElement("tr");

        const cell =
            document.createElement("td");

        cell.colSpan =
            7;

        cell.textContent =
            "No hay gastos para mostrar.";

        row.appendChild(cell);

        expenseTableBody.appendChild(row);

        return;
    }


    for (const expense of expenses) {

        const row =
            document.createElement("tr");


        const dateCell =
            document.createElement("td");

        dateCell.textContent =
            formatDate(expense.expense_date);


        const amountCell =
            document.createElement("td");

        amountCell.textContent =
            formatCurrency(
                expense.amount
            );


        const categoryCell =
            document.createElement("td");

        categoryCell.textContent =
            expense.categories.name;


        const merchantCell =
            document.createElement("td");

        merchantCell.textContent =
            expense.merchant || "—";


        const paymentCell =
            document.createElement("td");

        paymentCell.textContent =
            expense.payment_methods.name;


        const descriptionCell =
            document.createElement("td");

        descriptionCell.textContent =
            expense.description;


        const actionsCell =
            document.createElement("td");


        const editButton =
            document.createElement("button");

        editButton.type =
            "button";

        editButton.className =
            "secondary-button table-button";

        editButton.textContent =
            "Editar";


        editButton.addEventListener(
            "click",
            () => {

                startEditingExpense(expense);

                showView("expense");
            }
        );


        const deleteButton =
            document.createElement("button");

        deleteButton.type =
            "button";

        deleteButton.className =
            "danger-button table-button";

        deleteButton.textContent =
            "Eliminar";


        deleteButton.addEventListener(
            "click",
            async () => {

                await deleteExpense(expense.id);
            }
        );


        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);


        row.appendChild(dateCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);
        row.appendChild(merchantCell);
        row.appendChild(paymentCell);
        row.appendChild(descriptionCell);
        row.appendChild(actionsCell);


        expenseTableBody.appendChild(row);
    }
}


function getExpenseSortValue(
    expense,
    field
) {

    if (field === "expense_date") {

        return expense.expense_date;
    }


    if (field === "amount") {

        return Number(
            expense.amount
        );
    }


    if (field === "category") {

        return (
            expense.categories.name
            || ""
        ).toLowerCase();
    }


    if (field === "merchant") {

        return (
            expense.merchant
            || ""
        ).toLowerCase();
    }


    if (field === "payment_method") {

        return (
            expense.payment_methods.name
            || ""
        ).toLowerCase();
    }


    if (field === "description") {

        return (
            expense.description
            || ""
        ).toLowerCase();
    }


    return "";
}


function sortExpenses(expenses) {

    const sortedExpenses =
        [...expenses];


    sortedExpenses.sort(
        (expenseA, expenseB) => {

            const valueA =
                getExpenseSortValue(
                    expenseA,
                    expenseSortField
                );

            const valueB =
                getExpenseSortValue(
                    expenseB,
                    expenseSortField
                );


            let comparison = 0;


            if (
                typeof valueA === "number"
                && typeof valueB === "number"
            ) {

                comparison =
                    valueA - valueB;

            } else {

                comparison =
                    String(valueA)
                        .localeCompare(
                            String(valueB),
                            "es",
                            {
                                sensitivity:
                                    "base"
                            }
                        );
            }


            if (
                comparison === 0
                && expenseSortField
                    === "expense_date"
            ) {

                comparison =
                    String(
                        expenseA.created_at
                    ).localeCompare(
                        String(
                            expenseB.created_at
                        )
                    );
            }


            return expenseSortDirection
                === "asc"
                    ? comparison
                    : -comparison;
        }
    );


    return sortedExpenses;
}


function applyExpenseFilters() {

    const categoryId =
        historyCategoryFilter.value;

    const paymentMethodId =
        historyPaymentFilter.value;

    const dateFrom =
        historyDateFrom.value;

    const dateTo =
        historyDateTo.value;

    const searchTerm =
        historySearch.value
            .trim()
            .toLowerCase();


    const filteredExpenses =
        allExpenses.filter(
            (expense) => {

                const matchesCategory =
                    categoryId === ""
                    || String(expense.category_id)
                        === categoryId;


                const matchesPayment =
                    paymentMethodId === ""
                    || String(
                        expense.payment_method_id
                    ) === paymentMethodId;


                const matchesDateFrom =
                    dateFrom === ""
                    || expense.expense_date
                        >= dateFrom;


                const matchesDateTo =
                    dateTo === ""
                    || expense.expense_date
                        <= dateTo;


                const searchableText =
                    [
                        expense.description,
                        expense.merchant,
                        expense.categories.name,
                        expense.payment_methods.name
                    ]
                        .filter(Boolean)
                        .join(" ")
                        .toLowerCase();


                const matchesSearch =
                    searchTerm === ""
                    || searchableText.includes(
                        searchTerm
                    );


                return (
                    matchesCategory
                    && matchesPayment
                    && matchesDateFrom
                    && matchesDateTo
                    && matchesSearch
                );
            }
        );


    const sortedExpenses =
        sortExpenses(
            filteredExpenses
        );
    
    currentFilteredExpenses =
        sortedExpenses;

    renderExpenseTable(
        sortedExpenses
    );


    updateHistorySummary(
        filteredExpenses
    );


    updateSortIndicators();
}


function updateSortIndicators() {

    for (
        const button
        of tableSortButtons
    ) {

        const indicator =
            button.querySelector(
                ".sort-indicator"
            );


        if (
            button.dataset.sort
            === expenseSortField
        ) {

            indicator.textContent =
                expenseSortDirection
                === "asc"
                    ? "↑"
                    : "↓";

        } else {

            indicator.textContent =
                "";
        }
    }
}


function updateHistorySummary(expenses) {

    const count =
        expenses.length;


    let total = 0;


    for (const expense of expenses) {

        total +=
            Number(expense.amount);
    }


    const average =
        count > 0
            ? total / count
            : 0;


    filteredTotal.textContent =
        formatCurrency(total);

    filteredCount.textContent =
        count;

    filteredAverage.textContent =
        formatCurrency(average);
}


function exportExpensesToCsv() {

    if (
        currentFilteredExpenses.length === 0
    ) {

        window.alert(
            "No hay gastos para exportar."
        );

        return;
    }


    const headers = [
        "Fecha",
        "Importe",
        "Moneda",
        "Categoría",
        "Comercio",
        "Método de pago",
        "Descripción",
        "Recurrente",
        "Nota"
    ];


    const rows =
        currentFilteredExpenses.map(
            (expense) => {

                return [
                    formatDate(
                        expense.expense_date
                    ),

                    Number(
                        expense.amount
                    ).toLocaleString(
                        "es-ES",
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    ),

                    currentCurrency,

                    expense.categories.name,

                    expense.merchant || "",

                    expense.payment_methods.name,

                    expense.description,

                    expense.is_recurring
                        ? "Sí"
                        : "No",

                    expense.note || ""
                ];
            }
        );


    const csvLines = [
        headers,
        ...rows
    ]
        .map(
            (row) =>
                row
                    .map(escapeCsvValue)
                    .join(";")
        )
        .join("\n");


    const csvContent =
        "\uFEFF"
        + csvLines;


    const blob =
        new Blob(
            [csvContent],
            {
                type:
                    "text/csv;charset=utf-8;"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    const today =
        new Date();


    const fileDate =
        [
            today.getFullYear(),

            String(
                today.getMonth() + 1
            ).padStart(2, "0"),

            String(
                today.getDate()
            ).padStart(2, "0")
        ].join("-");


    link.href =
        url;

    link.download =
        `gastos-${fileDate}.csv`;


    document.body.appendChild(
        link
    );

    link.click();

    link.remove();


    URL.revokeObjectURL(
        url
    );
}


async function loadDashboard() {

    const month =
        getCurrentMonthRange();


    dashboardMonth.textContent =
        month.label;


    const {
        data: expenses,
        error: expensesError
    } =
        await supabaseClient
            .from("expenses")
            .select("amount")
            .gte(
                "expense_date",
                month.startDate
            )
            .lt(
                "expense_date",
                month.nextMonthDate
            );


    if (expensesError) {

        console.error(
            "Error cargando gastos del dashboard:",
            expensesError
        );

        return;
    }


    let spent = 0;


    for (const expense of expenses) {

        spent +=
            Number(expense.amount);
    }


    const {
        data: budget,
        error: budgetError
    } =
        await supabaseClient
            .from("monthly_budgets")
            .select("amount")
            .eq(
                "month_start",
                month.startDate
            )
            .maybeSingle();


    if (budgetError) {

        console.error(
            "Error cargando presupuesto:",
            budgetError
        );

        return;
    }


    const budgetAmount =
        budget
            ? Number(budget.amount)
            : 0;


    const percentage =
        budgetAmount > 0
            ? spent / budgetAmount * 100
            : 0;

    const available =
        budgetAmount - spent;

    totalSpent.textContent =
        formatCurrency(spent);

    monthlyBudget.textContent =
        formatCurrency(
            budgetAmount
        );

    budgetPercentage.textContent =
        `${percentage.toFixed(2)} %`;
    
    availableBudget.textContent =
        formatCurrency(
            available
        );


    availableBudget.classList.toggle(
        "negative-value",
        available < 0
    );

    budgetProgress.value =
        Math.min(
            percentage,
            100
        );
    
    budgetProgress.classList.toggle(
        "over-budget",
        percentage > 100
    );
}


async function loadMonthlyEvolution() {

    const month =
        getCurrentMonthRange();


    const {
        data: expenses,
        error
    } =
        await supabaseClient
            .from("expenses")
            .select(`
                expense_date,
                amount
            `)
            .gte(
                "expense_date",
                month.startDate
            )
            .lt(
                "expense_date",
                month.nextMonthDate
            )
            .order(
                "expense_date",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Error cargando evolución mensual:",
            error
        );

        return;
    }


    const now =
        new Date();

    const year =
        now.getFullYear();

    const monthIndex =
        now.getMonth();


    const daysInMonth =
        new Date(
            year,
            monthIndex + 1,
            0
        ).getDate();


    const spentPerDay =
        new Map();


    for (const expense of expenses) {

        const day =
            Number(
                expense.expense_date.slice(8, 10)
            );


        const currentAmount =
            spentPerDay.get(day) || 0;


        spentPerDay.set(
            day,
            currentAmount
            + Number(expense.amount)
        );
    }


    const labels = [];

    const cumulativeData = [];

    let cumulativeTotal = 0;


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        labels.push(day);


        const amountToday =
            spentPerDay.get(day) || 0;


        cumulativeTotal +=
            amountToday;


        cumulativeData.push(
            cumulativeTotal
        );
    }


    if (monthlySpendingChart) {

        monthlySpendingChart.destroy();
    }


    monthlySpendingChart =
        new Chart(
            monthlySpendingCanvas,
            {
                type: "line",

                data: {
                    labels: labels,

                    datasets: [
                        {
                            label:
                                `Gasto acumulado (${currentCurrency})`,

                            data:
                                cumulativeData,

                            tension:
                                0.25
                        }
                    ]
                },

                options: {

                    responsive:
                        true,

                    scales: {

                        y: {
                            beginAtZero:
                                true
                        }
                    }
                }
            }
        );
}


async function loadCategoryBudgets() {

    const month =
        getCurrentMonthRange();


    const {
        data: budgets,
        error: budgetsError
    } =
        await supabaseClient
            .from("category_budgets")
            .select(`
                amount,
                category_id,
                categories (
                    name
                )
            `)
            .eq(
                "month_start",
                month.startDate
            );


    if (budgetsError) {

        console.error(
            "Error cargando presupuestos por categoría:",
            budgetsError
        );

        return;
    }


    const {
        data: expenses,
        error: expensesError
    } =
        await supabaseClient
            .from("expenses")
            .select(`
                amount,
                category_id
            `)
            .gte(
                "expense_date",
                month.startDate
            )
            .lt(
                "expense_date",
                month.nextMonthDate
            );


    if (expensesError) {

        console.error(
            "Error cargando gastos por categoría:",
            expensesError
        );

        return;
    }


    const spentByCategory =
        new Map();


    for (const expense of expenses) {

        const categoryId =
            expense.category_id;

        const currentAmount =
            spentByCategory.get(categoryId) || 0;

        spentByCategory.set(
            categoryId,
            currentAmount + Number(expense.amount)
        );
    }


    categoryBudgetList.innerHTML = "";


    if (budgets.length === 0) {

        categoryBudgetList.textContent =
            "Todavía no hay presupuestos por categoría para este mes.";

        return;
    }


    budgets.sort(
        (a, b) =>
            a.categories.name.localeCompare(
                b.categories.name
            )
    );


    for (const budget of budgets) {

        const budgetAmount =
            Number(budget.amount);

        const spent =
            spentByCategory.get(
                budget.category_id
            ) || 0;


        const percentage =
            budgetAmount > 0
                ? spent / budgetAmount * 100
                : 0;


        const container =
            document.createElement("article");
        
        container.className =
            "budget-card";


        const title =
            document.createElement("h3");

        title.textContent =
            budget.categories.name;


        const details =
            document.createElement("p");

        details.textContent =
            `${formatCurrency(spent)} / `
            + `${formatCurrency(budgetAmount)}`
            + ` — ${percentage.toFixed(2)} %`;


        const progress =
            document.createElement("progress");

        progress.max =
            100;

        progress.value =
            Math.min(
                percentage,
                100
            );
        
        progress.classList.toggle(
            "over-budget",
            percentage > 100
        );


        container.appendChild(title);
        container.appendChild(details);
        container.appendChild(progress);


        categoryBudgetList.appendChild(
            container
        );
    }
}


async function loadBudgetSettings() {

    const month =
        getCurrentMonthRange();


    // 1. Cargar presupuesto total

    const {
        data: monthlyBudgetData,
        error: monthlyBudgetError
    } =
        await supabaseClient
            .from("monthly_budgets")
            .select("id, amount")
            .eq(
                "month_start",
                month.startDate
            )
            .maybeSingle();


    if (monthlyBudgetError) {

        console.error(
            "Error cargando presupuesto mensual:",
            monthlyBudgetError
        );

        return;
    }


    if (monthlyBudgetData) {

        monthlyBudgetInput.value =
            monthlyBudgetData.amount;

        monthlyBudgetInput.dataset.budgetId =
            monthlyBudgetData.id;

    } else {

        monthlyBudgetInput.value = "";

        monthlyBudgetInput.dataset.budgetId = "";
    }


    // 2. Cargar todas las categorías

    const {
        data: categories,
        error: categoriesError
    } =
        await supabaseClient
            .from("categories")
            .select("id, name")
            .eq("is_active", true)
            .order("name");


    if (categoriesError) {

        console.error(
            "Error cargando categorías:",
            categoriesError
        );

        return;
    }


    // 3. Cargar presupuestos existentes por categoría

    const {
        data: budgets,
        error: budgetsError
    } =
        await supabaseClient
            .from("category_budgets")
            .select(`
                id,
                category_id,
                amount
            `)
            .eq(
                "month_start",
                month.startDate
            );


    if (budgetsError) {

        console.error(
            "Error cargando presupuestos:",
            budgetsError
        );

        return;
    }


    // 4. Crear un mapa:
    // category_id → presupuesto existente

    const budgetByCategory =
        new Map();


    for (const budget of budgets) {

        budgetByCategory.set(
            budget.category_id,
            budget
        );
    }


    // 5. Construir los inputs

    categoryBudgetInputs.innerHTML = "";


    for (const category of categories) {

        const existingBudget =
            budgetByCategory.get(
                category.id
            );


        const container =
            document.createElement("div");
        
        container.className =
            "budget-input-row";


        const label =
            document.createElement("label");

        label.textContent =
            category.name;


        const input =
            document.createElement("input");

        input.type =
            "number";

        input.min =
            "0.01";

        input.step =
            "0.01";

        input.placeholder =
            "Sin límite";


        input.dataset.categoryId =
            category.id;


        if (existingBudget) {

            input.value =
                existingBudget.amount;

            input.dataset.budgetId =
                existingBudget.id;

        } else {

            input.dataset.budgetId =
                "";
        }


        container.appendChild(label);
        container.appendChild(input);

        categoryBudgetInputs.appendChild(
            container
        );
    }
}


async function copyPreviousMonthBudgets() {

    const currentMonth =
        getCurrentMonthRange();

    const previousMonthStart =
        getPreviousMonthStart();


    budgetMessage.textContent =
        "Buscando presupuesto del mes anterior...";


    // 1. Buscar presupuesto total anterior

    const {
        data: previousMonthlyBudget,
        error: monthlyError
    } =
        await supabaseClient
            .from("monthly_budgets")
            .select("amount")
            .eq(
                "month_start",
                previousMonthStart
            )
            .maybeSingle();


    if (monthlyError) {

        budgetMessage.textContent =
            "Error buscando el presupuesto anterior: "
            + monthlyError.message;

        return;
    }


    // 2. Buscar presupuestos por categoría anteriores

    const {
        data: previousCategoryBudgets,
        error: categoriesError
    } =
        await supabaseClient
            .from("category_budgets")
            .select(`
                category_id,
                amount
            `)
            .eq(
                "month_start",
                previousMonthStart
            );


    if (categoriesError) {

        budgetMessage.textContent =
            "Error buscando los presupuestos anteriores: "
            + categoriesError.message;

        return;
    }


    // 3. Comprobar que realmente haya algo para copiar

    if (
        !previousMonthlyBudget
        && previousCategoryBudgets.length === 0
    ) {

        budgetMessage.textContent =
            "No hay presupuestos en el mes anterior para copiar.";

        return;
    }


    // 4. Pedir confirmación

    const confirmed =
        window.confirm(
            "Se copiarán los presupuestos del mes anterior. "
            + "Los presupuestos actuales que coincidan serán reemplazados. "
            + "¿Quieres continuar?"
        );


    if (!confirmed) {

        budgetMessage.textContent = "";

        return;
    }


    budgetMessage.textContent =
        "Copiando presupuestos...";


    // 5. Copiar presupuesto mensual total

    if (previousMonthlyBudget) {

        const {
            data: currentMonthlyBudget,
            error: currentMonthlyError
        } =
            await supabaseClient
                .from("monthly_budgets")
                .select("id")
                .eq(
                    "month_start",
                    currentMonth.startDate
                )
                .maybeSingle();


        if (currentMonthlyError) {

            budgetMessage.textContent =
                "Error revisando el presupuesto actual: "
                + currentMonthlyError.message;

            return;
        }


        if (currentMonthlyBudget) {

            const { error } =
                await supabaseClient
                    .from("monthly_budgets")
                    .update({
                        amount:
                            previousMonthlyBudget.amount
                    })
                    .eq(
                        "id",
                        currentMonthlyBudget.id
                    );


            if (error) {

                budgetMessage.textContent =
                    "Error copiando el presupuesto total: "
                    + error.message;

                return;
            }

        } else {

            const { error } =
                await supabaseClient
                    .from("monthly_budgets")
                    .insert({
                        month_start:
                            currentMonth.startDate,

                        amount:
                            previousMonthlyBudget.amount
                    });


            if (error) {

                budgetMessage.textContent =
                    "Error copiando el presupuesto total: "
                    + error.message;

                return;
            }
        }
    }


    // 6. Copiar presupuestos por categoría

    if (
        previousCategoryBudgets.length > 0
    ) {

        const { error: deleteError } =
            await supabaseClient
                .from("category_budgets")
                .delete()
                .eq(
                    "month_start",
                    currentMonth.startDate
                );


        if (deleteError) {

            budgetMessage.textContent =
                "Error preparando los presupuestos por categoría: "
                + deleteError.message;

            return;
        }


        const budgetsToInsert =
            previousCategoryBudgets.map(
                (budget) => ({
                    month_start:
                        currentMonth.startDate,

                    category_id:
                        budget.category_id,

                    amount:
                        budget.amount
                })
            );


        const { error: insertError } =
            await supabaseClient
                .from("category_budgets")
                .insert(
                    budgetsToInsert
                );


        if (insertError) {

            budgetMessage.textContent =
                "Error copiando los presupuestos por categoría: "
                + insertError.message;

            return;
        }
    }


    // 7. Actualizar la interfaz

    await loadDashboard();

    await loadCategoryBudgets();

    await loadBudgetSettings();


    budgetMessage.textContent =
        "Presupuesto del mes anterior copiado correctamente.";
}


function startEditingExpense(expense) {

    editingExpenseId =
        expense.id;


    expenseDate.value =
        expense.expense_date;

    amountInput.value =
        expense.amount;

    categorySelect.value =
        expense.category_id;

    descriptionInput.value =
        expense.description;

    merchantInput.value =
        expense.merchant || "";

    paymentMethodSelect.value =
        expense.payment_method_id;

    recurringInput.checked =
        expense.is_recurring;

    noteInput.value =
        expense.note || "";


    expenseSubmitButton.textContent =
        "Guardar cambios";

    cancelEditButton.hidden =
        false;


    expenseForm.scrollIntoView({
        behavior: "smooth"
    });
}


function resetExpenseForm() {

    editingExpenseId =
        null;

    expenseForm.reset();

    setTodayAsDefault();

    expenseSubmitButton.textContent =
        "Guardar gasto";

    cancelEditButton.hidden =
        true;
}


async function deleteExpense(expenseId) {

    const confirmed =
        window.confirm(
            "¿Seguro que quieres eliminar este gasto?"
        );


    if (!confirmed) {
        return;
    }


    const { error } =
        await supabaseClient
            .from("expenses")
            .delete()
            .eq("id", expenseId);


    if (error) {

        expenseMessage.textContent =
            "Error al eliminar: "
            + error.message;

        return;
    }


    expenseMessage.textContent =
        "Gasto eliminado correctamente.";


    await loadExpenses();

    await loadDashboard();

    await loadMonthlyEvolution();

    await loadCategoryBudgets();
}


cancelEditButton.addEventListener(
    "click",
    () => {

        resetExpenseForm();

        expenseMessage.textContent = "";
    }
);


copyPreviousBudgetButton.addEventListener(
    "click",
    async () => {

        await copyPreviousMonthBudgets();
    }
);


showInactivePaymentMethodsButton.addEventListener(
    "click",
    () => {

        const isOpen =
            showInactivePaymentMethodsButton
                .getAttribute(
                    "aria-expanded"
                )
            === "true";


        const newState =
            !isOpen;


        showInactivePaymentMethodsButton
            .setAttribute(
                "aria-expanded",
                newState
                    ? "true"
                    : "false"
            );


        inactivePaymentMethodSettingsList.hidden =
            !newState;


        const count =
            inactivePaymentMethodSettingsList
                .querySelectorAll(
                    ".payment-method-setting-row"
                )
                .length;


        showInactivePaymentMethodsButton.textContent =
            `Métodos eliminados (${count}) ${
                newState
                    ? "▲"
                    : "▼"
            }`;
    }
);


paymentMethodForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const name =
            newPaymentMethodInput
                .value
                .trim();


        if (!name) {

            return;
        }


        const { error } =
            await supabaseClient
                .from("payment_methods")
                .insert({
                    name: name
                });


        if (error) {

            paymentMethodSettingsMessage.textContent =
                "Error: "
                + error.message;

            return;
        }


        paymentMethodForm.reset();


        paymentMethodSettingsMessage.textContent =
            "Método añadido correctamente.";


        await loadPaymentMethods();

        await loadPaymentMethodSettings();
    }
);


passwordForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const newPassword =
            newPasswordInput.value;


        const { error } =
            await supabaseClient
                .auth
                .updateUser({
                    password:
                        newPassword
                });


        if (error) {

            passwordMessage.textContent =
                "Error: "
                + error.message;

            return;
        }


        passwordForm.reset();


        passwordMessage.textContent =
            "Contraseña actualizada correctamente.";
    }
);


budgetForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const month =
            getCurrentMonthRange();


        budgetMessage.textContent =
            "Guardando...";


        // ─────────────────────────────
        // PRESUPUESTO TOTAL
        // ─────────────────────────────

        const monthlyAmount =
            Number(
                monthlyBudgetInput.value
            );


        const monthlyBudgetId =
            monthlyBudgetInput.dataset.budgetId;


        let monthlyError;


        if (monthlyBudgetId) {

            const result =
                await supabaseClient
                    .from("monthly_budgets")
                    .update({
                        amount: monthlyAmount
                    })
                    .eq(
                        "id",
                        monthlyBudgetId
                    );

            monthlyError =
                result.error;

        } else {

            const result =
                await supabaseClient
                    .from("monthly_budgets")
                    .insert({
                        month_start:
                            month.startDate,

                        amount:
                            monthlyAmount
                    });

            monthlyError =
                result.error;
        }


        if (monthlyError) {

            budgetMessage.textContent =
                "Error: "
                + monthlyError.message;

            return;
        }


        // ─────────────────────────────
        // PRESUPUESTOS POR CATEGORÍA
        // ─────────────────────────────

        const inputs =
            categoryBudgetInputs
                .querySelectorAll("input");


        for (const input of inputs) {

            const categoryId =
                Number(
                    input.dataset.categoryId
                );

            const budgetId =
                input.dataset.budgetId;

            const rawValue =
                input.value.trim();


            // Campo vacío:
            // eliminar presupuesto existente
            // si lo había.

            if (rawValue === "") {

                if (budgetId) {

                    const { error } =
                        await supabaseClient
                            .from("category_budgets")
                            .delete()
                            .eq(
                                "id",
                                budgetId
                            );


                    if (error) {

                        budgetMessage.textContent =
                            "Error: "
                            + error.message;

                        return;
                    }
                }


                continue;
            }


            const amount =
                Number(rawValue);


            // Ya existía → UPDATE

            if (budgetId) {

                const { error } =
                    await supabaseClient
                        .from("category_budgets")
                        .update({
                            amount: amount
                        })
                        .eq(
                            "id",
                            budgetId
                        );


                if (error) {

                    budgetMessage.textContent =
                        "Error: "
                        + error.message;

                    return;
                }

            }

            // No existía → INSERT

            else {

                const { error } =
                    await supabaseClient
                        .from("category_budgets")
                        .insert({

                            month_start:
                                month.startDate,

                            category_id:
                                categoryId,

                            amount:
                                amount
                        });


                if (error) {

                    budgetMessage.textContent =
                        "Error: "
                        + error.message;

                    return;
                }
            }
        }


        budgetMessage.textContent =
            "Presupuestos guardados correctamente.";


        await loadDashboard();

        await loadCategoryBudgets();

        await loadBudgetSettings();
    }
);


expenseForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const expense = {

            expense_date:
                expenseDate.value,

            amount:
                Number(amountInput.value),

            category_id:
                Number(categorySelect.value),

            description:
                descriptionInput.value.trim(),

            merchant:
                merchantInput.value.trim() || null,

            payment_method_id:
                Number(paymentMethodSelect.value),

            is_recurring:
                recurringInput.checked,

            note:
                noteInput.value.trim() || null
        };


        let error;


        if (editingExpenseId === null) {

            const result =
                await supabaseClient
                    .from("expenses")
                    .insert(expense);

            error = result.error;

        } else {

            const result =
                await supabaseClient
                    .from("expenses")
                    .update(expense)
                    .eq("id", editingExpenseId);

            error = result.error;
        }


        if (error) {

            expenseMessage.textContent =
                "Error: " + error.message;

            return;
        }


        if (editingExpenseId === null) {

            expenseMessage.textContent =
                "Gasto guardado correctamente.";

        } else {

            expenseMessage.textContent =
                "Gasto actualizado correctamente.";
        }


        await loadExpenses();

        await loadDashboard();

        await loadMonthlyEvolution();

        await loadCategoryBudgets();

        resetExpenseForm();

        showView("home");
    }
);


logoutButton.addEventListener("click", async () => {

    await supabaseClient.auth.signOut();

    appSection.hidden = true;
    loginSection.hidden = false;

    registerContainer.hidden =
        true;
    
    forgotPasswordContainer.hidden =
        true;

    newPasswordContainer.hidden =
        true;

    loginForm.hidden =
        false;

    showRegisterButton.hidden =
        false;
    
    forgotPasswordButton.hidden =
        false;

    loginMessage.hidden =
        false;

    categoryList.innerHTML = "";
});


async function initializeApp() {

    const isPasswordRecovery =
        new URLSearchParams(
            window.location.search
        ).get("recovery")
        === "1";


    const {
        data: { session }
    } =
        await supabaseClient
            .auth
            .getSession();


    if (isPasswordRecovery) {

        if (session) {

            showPasswordRecoveryScreen();

        } else {

            loginMessage.textContent =
                "El enlace de recuperación no es válido o ha caducado. Solicita uno nuevo.";


            window.history.replaceState(
                {},
                document.title,
                window.location.pathname
            );
        }


        return;
    }


    if (session) {

        showApp(
            session.user
        );
    }
}


if (
    "serviceWorker" in navigator
) {

    window.addEventListener(
        "load",
        async () => {

            try {

                const registration =
                    await navigator
                        .serviceWorker
                        .register(
                            "./service-worker.js"
                        );


                console.log(
                    "Service Worker registrado:",
                    registration.scope
                );

            } catch (error) {

                console.error(
                    "Error registrando Service Worker:",
                    error
                );
            }
        }
    );
}


initializeApp();

