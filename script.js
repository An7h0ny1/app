
// Obtener elementos de las pestañas y contenido
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Manejar clic en las pestañas
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Quitar la clase "active" de todas las pestañas
        tabs.forEach(t => t.classList.remove("active"));
        // Agregar la clase "active" a la pestaña actual
        tab.classList.add("active");

        // Ocultar todo el contenido de pestañas
        tabContents.forEach(content => content.classList.remove("active"));
        // Mostrar el contenido de pestaña correspondiente
        const target = tab.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
    });
});

const addIncomeBtn = document.getElementById("addIncomeBtn");
const incomeForm = document.getElementById("incomeForm");

addIncomeBtn.addEventListener("click", () => {
    incomeForm.classList.toggle("hidden");
});

// Guardar ingreso

const totalIncomeHome = document.getElementById("totalIncomeHome"); // Elemento donde mostrarás el total de gastos en la página Home
const saveIncomeBtn = document.getElementById("saveIncomeBtn");
const incomeList = document.getElementById("incomeList");
const totalIncome = document.getElementById("totalIncome");
let totalIncomeAmount = 0;

function updateHomeSummary1() {
    totalIncomeHome.textContent = `Total Ingresos en el Home: $${totalIncomeAmount.toFixed(2)}`;
}

saveIncomeBtn.addEventListener("click", () => {
    const incomeType = document.getElementById("incomeType").value;
    const incomeAmount = parseFloat(document.getElementById("incomeAmount").value);
    const incomeDate = document.getElementById("incomeDate").value;

    if (!isNaN(incomeAmount)) {
        const newIncomeItem = document.createElement("li");
        newIncomeItem.innerHTML = `
            <span>${incomeType}</span>
            <span>${incomeDate}</span>
            <span>$${incomeAmount.toFixed(2)}</span>
            <i class="fas fa-edit edit-income"></i>
            <i class="fas fa-trash delete-income"></i>
        `;
        incomeList.appendChild(newIncomeItem);
        totalIncomeAmount += incomeAmount;
        totalIncome.textContent = `Total de Ingresos: $${totalIncomeAmount.toFixed(2)}`;
        updateHomeSummary1();
    }
    // Limpiar campos del formulario
    document.getElementById("incomeType").value = "Salario";
    document.getElementById("incomeAmount").value = "";
    document.getElementById("incomeDate").value = "";
    incomeForm.classList.add("hidden");
});

// Editar o eliminar ingreso
incomeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-income")) {
        const listItem = event.target.closest("li");
        const incomeType = listItem.querySelector("span:nth-child(1)").textContent;
        const incomeAmount = parseFloat(listItem.querySelector("span:nth-child(3)").textContent.slice(1));
        const incomeDate = listItem.querySelector("span:nth-child(2)").textContent;

        document.getElementById("incomeType").value = incomeType;
        document.getElementById("incomeAmount").value = incomeAmount;
        document.getElementById("incomeDate").value = incomeDate;

        incomeForm.classList.remove("hidden");
        listItem.remove();
    } else if (event.target.classList.contains("delete-income")) {
        const listItem = event.target.closest("li");
        const incomeAmount = parseFloat(listItem.querySelector("span:nth-child(3)").textContent.slice(1));

        listItem.remove();
    }

    // Recalcular el total de ingresos
    totalIncomeAmount = 0;
    const incomeItems = incomeList.querySelectorAll("li");
    incomeItems.forEach(item => {
        totalIncomeAmount += parseFloat(item.querySelector("span:nth-child(3)").textContent.slice(1));
    });
    totalIncome.textContent = `Total de Ingresos: $${totalIncomeAmount.toFixed(2)}`;
});


// Mostrar/ocultar formulario de gastos
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseForm = document.getElementById("expenseForm");

addExpenseBtn.addEventListener("click", () => {
    expenseForm.classList.toggle("hidden");
});

// Guardar gasto
const totalExpenseHome = document.getElementById("totalExpenseHome"); // Elemento donde mostrarás el total de gastos en la página Home
const saveExpenseBtn = document.getElementById("saveExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");
let totalExpenseAmount = 0;

function updateHomeSummary() {
    totalExpenseHome.textContent = `Total Gastos en el Home: $${totalExpenseAmount.toFixed(2)}`;
}

saveExpenseBtn.addEventListener("click", () => {
    const expenseCategory = document.getElementById("expenseCategory").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
    const expenseDate = document.getElementById("expenseDate").value;


    if (!isNaN(expenseAmount)) {
        const newExpenseItem = document.createElement("li");
        newExpenseItem.innerHTML = `
            <span>${expenseCategory}</span>
            <span>${expenseDate}</span>
            <span>$${expenseAmount.toFixed(2)}</span>
            <i class="fas fa-edit edit-expense"></i>
            <i class="fas fa-trash delete-expense"></i>
        `;

        expenseList.appendChild(newExpenseItem);
        totalExpenseAmount += expenseAmount;
        totalExpense.textContent = `Total de Gastos: $${totalExpenseAmount.toFixed(2)}`;
        updateHomeSummary();
    
    }

    
    // Limpiar campos del formulario
    document.getElementById("expenseCategory").value = "Comida";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseDate").value = "";
    expenseForm.classList.add("hidden");
    
});

// Editar o eliminar gasto
expenseList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-expense")) {
        const listItem = event.target.closest("li");
        const expenseCategory = listItem.querySelector("span:nth-child(1)").textContent;
        const expenseAmount = parseFloat(listItem.querySelector("span:nth-child(3)").textContent.slice(1));
        const expenseDate = listItem.querySelector("span:nth-child(2)").textContent;

        document.getElementById("expenseCategory").value = expenseCategory;
        document.getElementById("expenseAmount").value = expenseAmount;
        document.getElementById("expenseDate").value = expenseDate;

        expenseForm.classList.remove("hidden");
        listItem.remove();
    } else if (event.target.classList.contains("delete-expense")) {
        const listItem = event.target.closest("li");
        const expenseAmount = parseFloat(listItem.querySelector("span:nth-child(3)").textContent.slice(1));

        listItem.remove();
    }
    // Recalcular el total de gastos
    totalExpenseAmount = 0;
    const expenseItems = expenseList.querySelectorAll("li");
    expenseItems.forEach(item => {
        totalExpenseAmount += parseFloat(item.querySelector("span:nth-child(3)").textContent.slice(1));
    });
    totalExpense.textContent = `Total Gastos: $${totalExpenseAmount.toFixed(2)}`;
});

// BUDGETS SECTION
const budgetHome = document.getElementById("budgetHome"); // Elemento donde mostrarás el total de gastos en la página Home
const addBudgetBtn = document.getElementById("addBudgetBtn");
const budgetForm = document.getElementById("budgetForm");
const budgetList = document.getElementById("budgetList");
const totalBudgetAmountElement = document.getElementById("totalBudget");
let totalBudgetAmount = 0;

function updateHomeSummary2() {
    budgetHome.textContent = `Total Presupuesto: $${totalBudgetAmount.toFixed(2)}`;
}

addBudgetBtn.addEventListener("click", () => {
    budgetForm.classList.remove("hidden");
});

saveBudgetBtn.addEventListener("click", () => {
    const budgetCategory = document.getElementById("budgetCategory").value;
    const budgetAmount = parseFloat(document.getElementById("budgetAmount").value);

    if (!isNaN(budgetAmount)) {
        const newBudgetItem = document.createElement("li");
        newBudgetItem.innerHTML = `
            <span>${budgetCategory}</span>
            <span>$${budgetAmount.toFixed(2)}</span>
            <i class="fas fa-edit edit-budget"></i>
            <i class="fas fa-trash delete-budget"></i>
        `;
        budgetList.appendChild(newBudgetItem);
        totalBudgetAmount += budgetAmount;
        totalBudgetAmountElement.textContent = `$${totalBudgetAmount.toFixed(2)}`;
    }
    // Limpiar campos del formulario
    document.getElementById("budgetCategory").value = "Alimentos";
    document.getElementById("budgetAmount").value = "";
    budgetForm.classList.add("hidden");
    updateHomeSummary2();
});

budgetList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-budget")) {
        const listItem = event.target.closest("li");
        const budgetCategory = listItem.querySelector("span:nth-child(1)").textContent;
        const budgetAmount = parseFloat(listItem.querySelector("span:nth-child(2)").textContent.slice(1));

        document.getElementById("budgetCategory").value = budgetCategory;
        document.getElementById("budgetAmount").value = budgetAmount;

        budgetForm.classList.remove("hidden");
        listItem.remove();
    } else if (event.target.classList.contains("delete-budget")) {
        const listItem = event.target.closest("li");
        const budgetAmount = parseFloat(listItem.querySelector("span:nth-child(2)").textContent.slice(1));

        listItem.remove();
        totalBudgetAmount -= budgetAmount;
        totalBudgetAmountElement.textContent = `$${totalBudgetAmount.toFixed(2)}`;
    }
});

//Ahorro
const totalSavingsHome = document.getElementById("totalSavingsHome"); 
const addGoalBtn = document.getElementById("addGoalBtn");
const goalNameInput = document.getElementById("goalName");
const goalAmountInput = document.getElementById("goalAmount");
const progressAmount = document.getElementById("progressAmount");
const progressBar = document.getElementById("progressBar");
const savingsTransactions = document.getElementById("savingsTransactions");
const monthlySavingsInput = document.getElementById("monthlySavings");
const notificationBtn = document.getElementById("notificationBtn");

function updateHomeSavingsSummary() {
    totalSavingsHome.textContent = `Total de Ahorros en el Home: $${totalSavings.toFixed(2)}`;
}

let totalSavings = 0;
let savingsGoals = [];

addGoalBtn.addEventListener("click", () => {
    const goalName = goalNameInput.value;
    const goalAmount = parseFloat(goalAmountInput.value);

    if (goalName && !isNaN(goalAmount)) {
        savingsGoals.push({ name: goalName, amount: goalAmount });
        goalNameInput.value = "";
        goalAmountInput.value = "";
        updateProgress();
    }
});

function addSavingsTransaction(date, amount) {
    const transactionList = document.getElementById("savingsTransactions");
    const transactionItem = document.createElement("li");
    transactionItem.innerHTML = `
        <span>${date}</span>
        <span>$${amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(transactionItem);
}

monthlySavingsInput.addEventListener("change", () => {
    const monthlySavings = parseFloat(monthlySavingsInput.value);
    if (!isNaN(monthlySavings)) {
        totalSavings += monthlySavings;
        updateProgress();

        // Agregar la transacción a la lista
        const currentDate = new Date().toLocaleDateString();
        addSavingsTransaction(currentDate, monthlySavings);

        // Limpiar campo de entrada de ahorro mensual
        monthlySavingsInput.value = "";
    }
});

function updateProgress() {
    totalSavings = savingsGoals.reduce((total, goal) => total + goal.amount, 0);
    updateHomeSavingsSummary();
    progressAmount.textContent = `$${totalSavings.toFixed(2)}`;
    progressBar.value = (totalSavings / 1000) * 100; // Assuming the goal amount is 1000 for visualization purposes
}

monthlySavingsInput.addEventListener("change", () => {
    const monthlySavings = parseFloat(monthlySavingsInput.value);
    if (!isNaN(monthlySavings)) {
        totalSavings += monthlySavings;
        updateProgress();
    }
});

notificationBtn.addEventListener("click", () => {
    // Add code to enable notifications
});



// Agregar un nuevo gasto
/*const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");

addExpenseBtn.addEventListener("click", () => {
    const expenseName = prompt("Ingrese el nombre del gasto:");
    const expenseAmount = parseFloat(prompt("Ingrese el monto del gasto:"));

    if (expenseName && !isNaN(expenseAmount)) {
        const newExpenseItem = document.createElement("li");
        newExpenseItem.innerHTML = `
            <span>${expenseName}</span>
            <span>$${expenseAmount.toFixed(2)}</span>
        `;
        expenseList.appendChild(newExpenseItem);
    }
});*/

