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

const paymentSpendingToggle = document.getElementById("payment-spending-toggle");
const paymentSpendingContent = document.getElementById("payment-spending-content");
const paymentSpendingArrow = document.getElementById("payment-spending-arrow");
const paymentSpendingTotal = document.getElementById("payment-spending-total");
const paymentSpendingList = document.getElementById("payment-spending-list");

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

let editingExpenseCategoryId = null;

let currentUserId = null;

let allCategories = [];

let categoryMutationPending = false;

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

const categorySettings = document.getElementById("category-settings");
const categoryForm = document.getElementById("category-form");
const newCategoryInput = document.getElementById("new-category");
const categorySettingsList = document.getElementById("category-settings-list");
const inactiveCategorySettingsList =
    document.getElementById("inactive-category-settings-list");
const showInactiveCategoriesButton =
    document.getElementById("show-inactive-categories-button");
const categorySettingsMessage =
    document.getElementById("category-settings-message");

const logoutButton =
    document.getElementById("logout-button");

const openResetAppButton = document.getElementById("open-reset-app-button");
const resetAppDialog = document.getElementById("reset-app-dialog");
const resetAppForm = document.getElementById("reset-app-form");
const resetAppConfirmation = document.getElementById("reset-app-confirmation");
const cancelResetAppButton = document.getElementById("cancel-reset-app-button");
const confirmResetAppButton = document.getElementById("confirm-reset-app-button");
const resetAppMessage = document.getElementById("reset-app-message");
let resetAppPending = false;

function updateResetAppControls() {
    openResetAppButton.disabled = resetAppPending;
    resetAppConfirmation.disabled = resetAppPending;
    cancelResetAppButton.disabled = resetAppPending;
    confirmResetAppButton.disabled = resetAppPending
        || resetAppConfirmation.value !== "BORRAR";
    confirmResetAppButton.textContent = resetAppPending
        ? "Borrando datos..." : "Borrar mis datos";
    resetAppForm.setAttribute("aria-busy", String(resetAppPending));
}

function clearResetAppConfirmation() {
    resetAppForm.reset();
    resetAppMessage.textContent = "";
    updateResetAppControls();
}

openResetAppButton.addEventListener("click", () => {
    if (resetAppPending || resetAppDialog.open) return;
    clearResetAppConfirmation();
    // Un diálogo modal impide interactuar con el resto de la aplicación.
    resetAppDialog.showModal();
    resetAppConfirmation.focus();
});

resetAppConfirmation.addEventListener("input", updateResetAppControls);

cancelResetAppButton.addEventListener("click", () => {
    if (!resetAppPending) resetAppDialog.close();
});

resetAppDialog.addEventListener("cancel", event => {
    // Escape permite cancelar antes de enviar; una RPC en curso no se cancela.
    if (resetAppPending) event.preventDefault();
});

resetAppDialog.addEventListener("close", () => {
    if (!resetAppPending) clearResetAppConfirmation();
});

resetAppForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (resetAppPending || !resetAppDialog.open
        || resetAppConfirmation.value !== "BORRAR") return;

    resetAppPending = true;
    updateResetAppControls();
    resetAppMessage.textContent = "Borrando datos...";

    try {
        const { error } = await supabaseClient.rpc("reset_my_app_data", {
            p_confirmation: "BORRAR"
        });
        if (error) throw error;
    } catch (error) {
        resetAppPending = false;
        resetAppMessage.textContent = "No se pudo confirmar el reinicio. "
            + "Comprueba tu conexión y vuelve a intentarlo. "
            + "Si se perdió la conexión, revisa tus datos antes de repetir la acción.";
        updateResetAppControls();
        resetAppConfirmation.focus();
        return;
    }

    // Mantener el bloqueo hasta recargar; no reconstruir datos ni cerrar sesión.
    confirmResetAppButton.textContent = "Reinicio completado";
    resetAppMessage.textContent = "Reinicio completado. Recargando la aplicación...";
    await new Promise(resolve => window.setTimeout(resolve, 1200));
    window.location.reload();
});


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
        if (editingExpenseId !== null) {
            resetExpenseForm();
            expenseMessage.textContent = "";
        }
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


paymentSpendingToggle.addEventListener("click", () => {
    const isOpen = !paymentSpendingContent.hidden;
    paymentSpendingContent.hidden = isOpen;
    paymentSpendingToggle.setAttribute("aria-expanded", String(!isOpen));
    paymentSpendingArrow.textContent = isOpen ? "▼" : "▲";
});


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

    if (currentUserId !== user.id) {
        clearCategoryState();
    }
    currentUserId = user.id;

    loginSection.hidden = true;
    appSection.hidden = false;

    showView("home");

    userInfo.textContent =
        `Conectado como: ${user.email}`;

    for (const load of [
        loadCategories, loadPaymentMethods, loadPaymentMethodSettings,
        loadUserSettings, loadExpenses, loadDashboard, loadMonthlyEvolution,
        loadCategoryBudgets, loadBudgetSettings
    ]) {
        await load();
        if (currentUserId !== user.id) return;
    }

    setTodayAsDefault();
}


// RLS protege la propiedad; el filtro explícito también limita cada petición
// al usuario cuya sesión inició la operación.
async function loadCategories() {
    const userId = currentUserId;
    if (!userId) return false;

    try {
        const { data, error } = await supabaseClient
            .from("categories")
            .select("id, name, is_active")
            .eq("user_id", userId)
            .order("name");

        if (currentUserId !== userId) return false;
        if (error) throw error;

        allCategories = data;
        renderCategoryOptions();
        renderCategorySettings();
        return true;
    } catch (error) {
        if (currentUserId === userId) {
            categorySettingsMessage.textContent =
                "No se pudieron cargar las categorías. Inténtalo de nuevo.";
        }
        return false;
    }
}


function renderExpenseCategoryOptions(selectedValue = categorySelect.value) {
    const available = allCategories.filter(category =>
        category.is_active || (
            editingExpenseId !== null
            && String(category.id) === editingExpenseCategoryId
        )
    );

    categorySelect.replaceChildren(new Option(
        available.length
            ? "Selecciona una categoría"
            : "Crea o restaura una categoría en Ajustes",
        ""
    ));

    for (const category of available) {
        categorySelect.add(new Option(
            category.name + (category.is_active ? "" : " — eliminada"),
            String(category.id)
        ));
    }
    categorySelect.value = selectedValue;
    if (categorySelect.selectedIndex < 0) categorySelect.value = "";
}


function renderCategoryOptions() {
    renderExpenseCategoryOptions();

    const selectedFilter = historyCategoryFilter.value;
    historyCategoryFilter.replaceChildren(new Option("Todas", ""));

    // El historial puede consultar también las categorías eliminadas.
    for (const category of allCategories) {
        historyCategoryFilter.add(new Option(
            category.name + (category.is_active ? "" : " — eliminada"),
            String(category.id)
        ));
    }
    historyCategoryFilter.value = selectedFilter;
    if (historyCategoryFilter.selectedIndex < 0) historyCategoryFilter.value = "";
}


function setCategoryControlsBusy(busy) {
    categoryMutationPending = busy;
    categorySettings.setAttribute("aria-busy", String(busy));
    for (const control of categorySettings.querySelectorAll("input, button")) {
        control.disabled = busy;
    }
}


function renderCategorySettings() {
    const inactive = allCategories.filter(category => !category.is_active);
    const wasOpen = showInactiveCategoriesButton.getAttribute("aria-expanded") === "true";

    categorySettingsList.replaceChildren();
    inactiveCategorySettingsList.replaceChildren();

    if (!allCategories.some(category => category.is_active)) {
        categorySettingsList.textContent =
            "No tienes categorías activas. Añade una o restaura una eliminada.";
    }

    for (const category of allCategories) {
        const row = document.createElement("div");
        row.className = "category-setting-row";

        const name = document.createElement("span");
        name.textContent = category.name;
        const actions = document.createElement("div");
        actions.className = "category-actions";

        const renameButton = document.createElement("button");
        renameButton.type = "button";
        renameButton.className = "secondary-button";
        renameButton.textContent = "Renombrar";
        renameButton.setAttribute("aria-label", `Renombrar ${category.name}`);
        renameButton.addEventListener("click", () => {
            const form = document.createElement("form");
            form.className = "category-rename-form";
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.id = `category-name-${category.id}`;
            input.type = "text";
            input.required = true;
            input.value = category.name;
            label.htmlFor = input.id;
            label.textContent = `Nuevo nombre de ${category.name}`;

            const formActions = document.createElement("div");
            formActions.className = "category-actions";
            const save = document.createElement("button");
            save.type = "submit";
            save.textContent = "Guardar";
            const cancel = document.createElement("button");
            cancel.type = "button";
            cancel.className = "secondary-button";
            cancel.textContent = "Cancelar";
            cancel.addEventListener("click", () => {
                row.replaceChildren(name, actions);
                renameButton.focus();
            });
            formActions.append(save, cancel);
            form.append(label, input, formActions);
            form.addEventListener("submit", async event => {
                event.preventDefault();
                const saved = await saveCategory({ name: input.value.trim() }, category.id);
                if (!saved && input.isConnected) input.focus();
            });
            row.replaceChildren(form);
            input.focus();
            input.select();
        });

        const toggleButton = document.createElement("button");
        toggleButton.type = "button";
        toggleButton.className = "secondary-button";
        toggleButton.textContent = category.is_active ? "Eliminar" : "Restaurar";
        toggleButton.setAttribute("aria-label", `${toggleButton.textContent} ${category.name}`);
        toggleButton.addEventListener("click", async () => {
            if (category.is_active && !window.confirm(
                `¿Eliminar "${category.name}"?\n\nSe conservarán sus gastos y presupuestos. Podrás restaurarla después.`
            )) return;
            await saveCategory({ is_active: !category.is_active }, category.id);
        });

        actions.append(renameButton, toggleButton);
        row.append(name, actions);
        (category.is_active ? categorySettingsList : inactiveCategorySettingsList).append(row);
    }

    showInactiveCategoriesButton.hidden = inactive.length === 0;
    const isOpen = inactive.length > 0 && wasOpen;
    showInactiveCategoriesButton.setAttribute("aria-expanded", String(isOpen));
    showInactiveCategoriesButton.textContent =
        `Categorías eliminadas (${inactive.length}) ${isOpen ? "▲" : "▼"}`;
    inactiveCategorySettingsList.hidden = !isOpen;
    setCategoryControlsBusy(categoryMutationPending);
}


async function categorySaveError(error, changes, categoryId, userId) {
    if (error.code !== "23505") {
        return "No se pudo guardar la categoría. Inténtalo de nuevo.";
    }

    // Consultar de nuevo permite reconocer duplicados creados en otra pestaña.
    let categories = allCategories;
    try {
        const { data, error: readError } = await supabaseClient
            .from("categories")
            .select("id, name, is_active")
            .eq("user_id", userId);
        if (!readError) categories = data;
    } catch {
        // El catálogo ya cargado permite dar una indicación si falla la red.
    }

    const name = changes.name?.trim().toLowerCase();
    const duplicate = categories.find(category =>
        String(category.id) !== String(categoryId)
        && category.name.trim().toLowerCase() === name
    );
    return duplicate && !duplicate.is_active
        ? `Ya existe "${duplicate.name}" en Categorías eliminadas. Puedes restaurarla desde allí.`
        : "Ya tienes una categoría con ese nombre. Usa otro nombre o revisa Categorías eliminadas para restaurarla.";
}


async function saveCategory(changes, categoryId = null) {
    if (categoryMutationPending || !currentUserId) return false;
    if ("name" in changes) {
        changes.name = changes.name.trim();
        if (!changes.name) {
            categorySettingsMessage.textContent = "Escribe un nombre para la categoría.";
            return false;
        }
    }

    const userId = currentUserId;
    setCategoryControlsBusy(true);
    categorySettingsMessage.textContent = "Guardando categoría…";
    let saved = false;

    try {
        const query = categoryId === null
            ? supabaseClient.from("categories").insert({ ...changes, user_id: userId })
            : supabaseClient.from("categories").update(changes)
                .eq("id", categoryId).eq("user_id", userId);
        const { data, error } = await query.select("id, name, is_active").single();
        if (currentUserId !== userId) return false;
        if (error) {
            const message = await categorySaveError(error, changes, categoryId, userId);
            if (currentUserId === userId) categorySettingsMessage.textContent = message;
            return false;
        }
        saved = true;
        if (categoryId === null) categoryForm.reset();

        // Aplicar la fila confirmada sin perder selecciones ni otros formularios.
        const index = allCategories.findIndex(category => String(category.id) === String(data.id));
        if (index < 0) allCategories.push(data);
        else allCategories[index] = data;
        allCategories.sort((a, b) => a.name.localeCompare(b.name, "es"));
        renderCategoryOptions();
        renderCategorySettings();

        // Ocultar inmediatamente el campo eliminado, incluso si falla
        // la posterior recarga de presupuestos. El registro sigue guardado.
        for (const input of categoryBudgetInputs.querySelectorAll("input")) {
            if (input.dataset.categoryId !== String(data.id)) continue;
            if (!data.is_active) input.closest(".budget-input-row").remove();
            else input.closest(".budget-input-row").querySelector("label").textContent = data.name;
        }

        for (const expense of allExpenses) {
            if (String(expense.category_id) === String(data.id)) {
                expense.categories = { name: data.name, is_active: data.is_active };
            }
        }
        renderRecentExpenses();
        applyExpenseFilters();

        const refreshed = await loadBudgetSettings({ preserveDraft: true });
        if (currentUserId !== userId) return false;
        const budgetsRefreshed = await loadCategoryBudgets();
        if (currentUserId !== userId) return false;
        categorySettingsMessage.textContent = refreshed && budgetsRefreshed
            ? (categoryId === null ? "Categoría añadida."
                : "name" in changes ? "Categoría renombrada."
                : changes.is_active ? "Categoría restaurada." : "Categoría eliminada. Puedes restaurarla después.")
            : "Categoría guardada. No se pudieron actualizar los presupuestos; recarga la página para consultarlos.";
        return true;
    } catch {
        if (currentUserId === userId) {
            categorySettingsMessage.textContent = saved
                ? "Categoría guardada. Recarga la página para actualizar los datos."
                : "No se pudo guardar la categoría. Inténtalo de nuevo.";
        }
        return saved;
    } finally {
        if (currentUserId === userId) setCategoryControlsBusy(false);
    }
}


function clearCategoryState() {
    currentUserId = null;
    allCategories = [];
    allExpenses = [];
    currentFilteredExpenses = [];
    renderPaymentSpending();
    paymentSpendingContent.hidden = true;
    paymentSpendingToggle.setAttribute("aria-expanded", "false");
    paymentSpendingArrow.textContent = "▼";
    categoryForm.reset();
    categorySettingsMessage.textContent = "";
    showInactiveCategoriesButton.setAttribute("aria-expanded", "false");
    setCategoryControlsBusy(false);
    resetExpenseForm();
    renderCategoryOptions();
    renderCategorySettings();
    categoryBudgetInputs.replaceChildren();
    categoryBudgetList.replaceChildren();
    recentExpensesBody.replaceChildren();
    expenseTableBody.replaceChildren();
    monthlyBudgetInput.value = "";
    monthlyBudgetInput.dataset.budgetId = "";
}


categoryForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (await saveCategory({ name: newCategoryInput.value.trim() })) {
        newCategoryInput.focus();
    }
});


showInactiveCategoriesButton.addEventListener("click", () => {
    const isOpen = showInactiveCategoriesButton.getAttribute("aria-expanded") !== "true";
    showInactiveCategoriesButton.setAttribute("aria-expanded", String(isOpen));
    inactiveCategorySettingsList.hidden = !isOpen;
    const count = allCategories.filter(category => !category.is_active).length;
    showInactiveCategoriesButton.textContent =
        `Categorías eliminadas (${count}) ${isOpen ? "▲" : "▼"}`;
});


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
    const userId = currentUserId;
    if (!userId) return;

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
                    name,
                    is_active
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


    if (currentUserId !== userId) return;

    if (error) {

        expenseMessage.textContent =
            "Error cargando gastos: "
            + error.message;

        return;
    }


    allExpenses = data;

    renderPaymentSpending();

    renderRecentExpenses();

    applyExpenseFilters();
}


function getPaymentMethodName(expense) {
    return expense.payment_methods?.name || "Sin método de pago";
}


function renderPaymentSpending(month = getCurrentMonthRange()) {
    const spendingByMethod = new Map();
    let total = 0;

    // Usar los gastos completos, no el historial filtrado ni los métodos activos.
    for (const expense of allExpenses) {
        if (expense.expense_date < month.startDate
            || expense.expense_date >= month.nextMonthDate) continue;

        const amount = Number(expense.amount);
        if (!Number.isFinite(amount)) continue;

        const methodId = expense.payment_method_id == null || !expense.payment_methods
            ? null : String(expense.payment_method_id);
        const group = spendingByMethod.get(methodId) || {
            name: methodId === null ? "Sin método de pago" : getPaymentMethodName(expense),
            amount: 0
        };
        group.amount += amount;
        total += amount;
        spendingByMethod.set(methodId, group);
    }

    paymentSpendingTotal.textContent = formatCurrency(total);
    paymentSpendingList.replaceChildren();

    if (spendingByMethod.size === 0) {
        paymentSpendingList.textContent = "Todavía no hay gastos este mes.";
        return;
    }

    const groups = [...spendingByMethod.values()].sort((a, b) =>
        b.amount - a.amount || a.name.localeCompare(b.name, "es")
    );

    for (const group of groups) {
        const percentage = total > 0 ? group.amount / total * 100 : 0;
        const row = document.createElement("article");
        row.className = "payment-spending-row";
        const summary = document.createElement("div");
        summary.className = "payment-spending-summary";

        const name = document.createElement("span");
        name.className = "payment-spending-name";
        name.textContent = group.name;
        const values = document.createElement("div");
        values.className = "payment-spending-values";
        const amount = document.createElement("strong");
        amount.textContent = formatCurrency(group.amount);
        const share = document.createElement("span");
        share.textContent = `${percentage.toLocaleString("es-ES", {
            maximumFractionDigits: 1
        })} %`;

        const bar = document.createElement("progress");
        bar.max = 100;
        bar.value = Math.max(0, Math.min(percentage, 100));
        bar.setAttribute("aria-label", `Porcentaje del gasto mensual: ${group.name}`);

        values.append(amount, share);
        summary.append(name, values);
        row.append(summary, bar);
        paymentSpendingList.append(row);
    }
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
            getPaymentMethodName(expense);


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
            getPaymentMethodName(expense)
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
                        getPaymentMethodName(expense)
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

                    getPaymentMethodName(expense),

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

    renderPaymentSpending(month);


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
    const userId = currentUserId;
    if (!userId) return false;

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
                    name,
                    is_active
                )
            `)
            .eq(
                "month_start",
                month.startDate
            );


    if (currentUserId !== userId) return false;

    if (budgetsError) {

        console.error(
            "Error cargando presupuestos por categoría:",
            budgetsError
        );

        return false;
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


    if (currentUserId !== userId) return false;

    if (expensesError) {

        console.error(
            "Error cargando gastos por categoría:",
            expensesError
        );

        return false;
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

        return true;
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
            budget.categories.name
            + (budget.categories.is_active ? "" : " — eliminada");


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
    return true;
}


async function loadBudgetSettings({ preserveDraft = false } = {}) {
    const userId = currentUserId;
    if (!userId) return false;

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


    if (currentUserId !== userId) return false;

    if (monthlyBudgetError) {

        console.error(
            "Error cargando presupuesto mensual:",
            monthlyBudgetError
        );

        return false;
    }


    // 2. Cargar las categorías personales activas

    const {
        data: categories,
        error: categoriesError
    } =
        await supabaseClient
            .from("categories")
            .select("id, name")
            .eq("is_active", true)
            .eq("user_id", userId)
            .order("name");


    if (currentUserId !== userId) return false;

    if (categoriesError) {

        console.error(
            "Error cargando categorías:",
            categoriesError
        );

        return false;
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


    if (currentUserId !== userId) return false;

    if (budgetsError) {

        console.error(
            "Error cargando presupuestos:",
            budgetsError
        );

        return false;
    }


    // 4. Crear un mapa:
    // category_id → presupuesto existente

    const budgetByCategory =
        new Map();


    for (const budget of budgets) {

        budgetByCategory.set(
            String(budget.category_id),
            budget
        );
    }


    // 5. Construir los inputs

    // Conservar los importes que se estén editando al administrar categorías.
    const drafts = new Map();
    if (preserveDraft) {
        for (const input of categoryBudgetInputs.querySelectorAll("input")) {
            drafts.set(input.dataset.categoryId, input.value);
        }
    } else {
        monthlyBudgetInput.value = monthlyBudgetData?.amount ?? "";
    }
    monthlyBudgetInput.dataset.budgetId = monthlyBudgetData?.id ?? "";
    categoryBudgetInputs.innerHTML = "";
    if (categories.length === 0) {
        categoryBudgetInputs.textContent =
            "Añade o restaura una categoría para configurar su presupuesto.";
    }


    for (const category of categories) {

        const existingBudget =
            budgetByCategory.get(
                String(category.id)
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

        input.id = `category-budget-${category.id}`;
        label.htmlFor = input.id;
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


        if (drafts.has(String(category.id))) {
            input.value = drafts.get(String(category.id));
        }

        container.appendChild(label);
        container.appendChild(input);

        categoryBudgetInputs.appendChild(
            container
        );
    }
    return true;
}


async function copyPreviousMonthBudgets() {
    const userId = currentUserId;
    if (!userId) return;

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
        data: previousBudgets,
        error: categoriesError
    } =
        await supabaseClient
            .from("category_budgets")
            .select(`
                category_id,
                amount,
                categories (is_active)
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


    if (currentUserId !== userId) return;
    const previousCategoryBudgets = previousBudgets.filter(
        budget => budget.categories?.is_active
    );

    // 3. Comprobar que realmente haya algo para copiar

    if (
        !previousMonthlyBudget
        && previousCategoryBudgets.length === 0
    ) {

        budgetMessage.textContent =
            "No hay presupuesto total ni presupuestos de categorías activas en el mes anterior para copiar.";

        return;
    }


    // 4. Pedir confirmación

    const confirmed =
        window.confirm(
            "Se copiarán el presupuesto total y los de categorías activas del mes anterior. "
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

        const budgetsToInsert =
            previousCategoryBudgets.map(
                (budget) => ({
                    user_id: userId,
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
                .upsert(budgetsToInsert, {
                    onConflict: "user_id,month_start,category_id"
                });


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

    editingExpenseCategoryId = String(expense.category_id);
    renderExpenseCategoryOptions(editingExpenseCategoryId);

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

    editingExpenseCategoryId = null;
    expenseForm.reset();
    renderExpenseCategoryOptions("");

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

            const categoryId = input.dataset.categoryId;

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


        const selectedCategory = allCategories.find(
            category => String(category.id) === categorySelect.value
        );
        const keepingOriginal = editingExpenseId !== null
            && categorySelect.value === editingExpenseCategoryId;
        if (!selectedCategory || (!selectedCategory.is_active && !keepingOriginal)) {
            expenseMessage.textContent =
                "Selecciona una categoría activa o conserva la categoría original del gasto.";
            return;
        }

        const expense = {

            expense_date:
                expenseDate.value,

            amount:
                Number(amountInput.value),

            category_id:
                categorySelect.value,

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

    clearCategoryState();

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
