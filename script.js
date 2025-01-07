const transactionList = document.getElementById("transactionList");
const expenditureThisMonthContainer = document.getElementById(
  "expenditureThisMonth"
);
const totalUsageContainer = document.getElementById("expenditureTotal");
const expenditurePercentageThisMonthContainer = document.getElementById(
  "expenditurePercentageThisMonth"
);
const addExpenseButon = document.getElementById("addExpense");
const container = document.getElementById("container");
const closeBtn = document.getElementsByClassName("close");
const addBtn = document.getElementById("add");
const editBtn = document.getElementById("edit");
const input = document.getElementsByTagName("input");
const select = document.getElementsByTagName("select");
const editPopup = document.getElementById("editPopup");
const addPopup = document.getElementById("addPopup");
const showMe = document.getElementById("showMe");

// ---------------------MODAL---------------------
let count = 504;

let transactions = JSON.parse(localStorage.getItem("transactions"));

if (!transactions) {
  transactions = [
    {
      id: 14,
      date: "2023-06-18T00:00:00.000Z",
      amount: 750,
      category: "Travel",
      description: "Bus tickets",
    },
    {
      id: 15,
      date: "2024-02-01T00:00:00.000Z",
      amount: 1500,
      category: "Medical",
      description: "Car loan payment",
    },
    {
      id: 17,
      date: "2023-07-14T00:00:00.000Z",
      amount: 100,
      category: "Others",
      description: "Charity donation",
    },
    {
      id: 18,
      date: "2023-02-28T00:00:00.000Z",
      amount: 300,
      category: "Bills",
      description: "Water bill payment",
    },
    {
      id: 19,
      date: "2024-01-10T00:00:00.000Z",
      amount: 1200,
      category: "Travel",
      description: "Hotel stay booking",
    },
    {
      id: 20,
      date: "2022-06-22T00:00:00.000Z",
      amount: 850,
      category: "Debt",
      description: "Student loan payment",
    },
    {
      id: 21,
      date: "2025-01-04T18:30:00.000Z",
      amount: 500,
      category: "Others",
      description: "Flight tickets to Paris",
    },
    {
      id: 22,
      date: "2025-01-03T00:00:00.000Z",
      amount: 300,
      category: "Food",
      description: "Lunch at a local café",
    },
    {
      id: 23,
      date: "2025-01-01T00:00:00.000Z",
      amount: 600,
      category: "Bills",
      description: "Internet bill payment",
    },
    {
      id: 24,
      date: "2025-01-02T00:00:00.000Z",
      amount: 1200,
      category: "Debt",
      description: "Credit card payment",
    },
    {
      id: 25,
      date: "2024-01-01T00:00:00.000Z",
      amount: 150,
      category: "Others",
      description: "Charity donation",
    },
    {
      id: 26,
      date: "2024-12-15T00:00:00.000Z",
      amount: 500,
      category: "Travel",
      description: "Hotel booking for business trip",
    },
    {
      id: 27,
      date: new Date("2024-07-01"),
      amount: 700,
      category: "Food",
      description: "Weekly grocery shopping",
    },
    {
      id: 35,
      date: new Date("2025-01-01"),
      amount: 500,
      category: "Food",
      description: "New Year's Day dinner",
    },
    {
      id: 45,
      date: new Date("2025-01-01"),
      amount: 2000,
      category: "Medical",
      description: "New Year's Day dinner",
    },
    {
      id: 36,
      date: new Date("2025-01-02"),
      amount: 800,
      category: "Travel",
      description: "Train tickets to a nearby city",
    },
    {
      id: 38,
      date: new Date("2025-01-06"),
      amount: 1200,
      category: "Debt",
      description: "Student loan payment",
    },
    {
      id: 39,
      date: new Date("2025-01-09"),
      amount: 150,
      category: "Others",
      description: "Donation to a charity",
    },
    {
      id: 40,
      date: new Date("2025-01-11"),
      amount: 700,
      category: "Food",
      description: "Groceries for the week",
    },
    {
      id: 41,
      date: new Date("2025-01-15"),
      amount: 2200,
      category: "Travel",
      description: "Booking for international trip",
    },
  ];
}
transactions.sort((a, b) => b.date - a.date);
addBtn.addEventListener("click", function () {
  let date = new Date(input[1].value).toISOString();
  let amount = input[2].value;
  let description = input[0].value;
  let category = select[0].value;
  console.log(date, amount, description, category);

  if (
    date === "" ||
    amount === "" ||
    category === "" ||
    description === "" ||
    date == "Invalid Date"
  ) {
    showToast("Please fill all the fields", "danger", 5000);
  } else {
    transactions.push({
      id: count++,
      date: date,
      amount: parseInt(amount),
      category: category,
      description: description,
    });
    addTransactionDOM({
      id: count,
      date: new Date(date),
      amount: amount,
      category: category,
      description: description,
    });
    if (
      new Date(date).getMonth() === new Date().getMonth() &&
      new Date(date).getFullYear() === new Date().getFullYear()
    ) {
      helper[category.toLowerCase()] += parseInt(amount);
    }

    transactions.sort((a, b) => b.date - a.date);
    reRun();
    container.classList.add("hide");
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    showToast("Transaction Successfully Completed", "success", 5000);
  }
});
container.addEventListener("click", function (e) {
  if (e.target === container) {
    container.classList.add("hide");
  }
});
// closeBtn.forEach((e) => {
closeBtn[0].addEventListener("click", function (e) {
  container.classList.add("hide");
  addPopup.classList.add("hide");
  editPopup.classList.add("hide");
});

closeBtn[1].addEventListener("click", function (e) {
  container.classList.add("hide");
  addPopup.classList.add("hide");
  editPopup.classList.add("hide");
});

// });
// console.log(closeBtn[0]);

addExpenseButon.addEventListener("click", function () {
  container.classList.remove("hide");
  addPopup.classList.remove("hide");
});
function addTransactionDOM(transaction) {
  const item = document.createElement("div");
  item.innerHTML = `
  <div class="transaction-tile">
        <button class="leading-icon" onclick="editTransaction(${
          transaction.id
        })" >
                <svg
                  class="leading-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
                  />
                </svg>
              </button>
              <div class="transaction-tile-content">
                <div class="transaction-tile-content-title">
                  <div class="transaction-tile-content-title-date">
                    <svg
                      class="calender-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                    >
                      <path
                        d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    ${transaction.date
                      .toLocaleString("default", {
                        month: "long",
                      })
                      .slice(8, 10)} ${transaction.date
    .toString()
    .slice(5, 7)}  ${transaction.date.toString().slice(0, 4)}
                  </div>
                  <div class="transaction-tile-content-title-type">${
                    transaction.category
                  }</div>
                </div>
                <div class="transaction-tile-content-name">${
                  transaction.description
                }</div>
              </div>
              <div class="transaction-tile-amount">
                <div class="transaction-tile-amount-title">Your Share</div>
                <div class="transaction-tile-amount-price">₹ ${
                  transaction.amount
                }</div>
              </div>
              <div class="transaction-tile-delete" >
                <svg
                onclick="deleteTransaction(${transaction.id})"
                  onClick="this.parentElement.parentElement.parentElement.remove()"
                  class="delete-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              </div>
    `;
  transactionList.appendChild(item);
}
const helper = {
  travel: 0,
  medical: 0,
  debt: 0,
  bills: 0,
  food: 0,
  others: 0,
};

transactions.forEach(function (transaction) {
  if (
    new Date(transaction.date).getMonth() === new Date().getMonth() &&
    new Date(transaction.date).getFullYear() === new Date().getFullYear()
  ) {
    helper[transaction.category.toLowerCase()] += transaction.amount;
  }
  addTransactionDOM(transaction);
});
let idToBeChanged = 0;
const editTransaction = function (a) {
  container.classList.remove("hide");
  editPopup.classList.remove("hide");
  const t = transactions.map((e) => {
    if (e.id === a) {
      input[3].value = e.description;
      input[5].value = e.amount;
      input[4].value = new Date(e.date).toISOString().slice(0, 10);
      select[1].value = e.category;
      idToBeChanged = e.id;
      if (
        e.date.getMonth() === new Date().getMonth() &&
        e.date.getFullYear() === new Date().getFullYear()
      ) {
        helper[e.category.toLowerCase()] -= e.amount;
      }
    }
  });
};
editBtn.addEventListener("click", function () {
  let date = new Date(input[4].value).toISOString();
  let amount = input[5].value;
  let description = input[3].value;
  let category = select[1].value;

  if (
    date === "" ||
    amount === "" ||
    category === "" ||
    description === "" ||
    date == "Invalid Date"
  ) {
    showToast("Please fill valid inputs!", "danger", 5000);
  } else {
    for (let index = 0; index < transactions.length; index++) {
      console.log(idToBeChanged);
      if (transactions[index].id === idToBeChanged) {
        transactions[index].amount = parseInt(amount);
        transactions[index].category = category;
        transactions[index].date = date;
        transactions[index].description = description;
        container.classList.add("hide");
        editPopup.classList.add("hide");
        input[4].value = "";
        input[5].value = "";
        input[3].value = "";
        select[1].value = "";
        showToast("Transaction Successfully Completed", "error", 5000);
        reRun();
        if (
          transactions[index].date.getMonth() === new Date().getMonth() &&
          transactions[index].date.getFullYear() === new Date().getFullYear()
        ) {
          helper[transactions[index].category.toLowerCase()] +=
            transactions[index].amount;
          reRun();
        }
        localStorage.setItem("transactions", JSON.stringify(transactions));
        return;
      }
    }
    reRun();
  }
});
const addCategory = function () {};
const deleteTransaction = function (id) {
  showToast("Deleted Successfully", "danger", 5000);
  transactions.forEach(function (transaction, index) {
    if (transaction.id === id) {
      console.log(transactions);
      transactions.splice(index, 1);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      transactionList.innerHTML = "";
      transactions.forEach(function (transaction) {
        addTransactionDOM(transaction);
      });
      if (
        transaction.date.getMonth() === new Date().getMonth() &&
        transaction.date.getFullYear() === new Date().getFullYear()
      ) {
        helper[transaction.category.toLowerCase()] -= transaction.amount;
        reRun();
      }
    }
    reRun();
  });
};
const currentMonthUsage = function () {
  let total = 0;
  transactions.forEach(function (transaction) {
    if (
      new Date(transaction.date).getMonth() === new Date().getMonth() &&
      new Date(transaction.date).getFullYear() === new Date().getFullYear()
    ) {
      total += transaction.amount;
    }
  });
  return total;
};
const totalUsage = function () {
  let total = 0;
  transactions.forEach(function (transaction) {
    total += transaction.amount;
  });
  return total;
};

expenditurePercentageThisMonthContainer.innerHTML = `${Math.round(
  (currentMonthUsage() / totalUsage() || 0) * 100
)}`;

expenditureThisMonthContainer.innerHTML = `${currentMonthUsage()}`;
totalUsageContainer.innerHTML = `${totalUsage()}`;

function reRun() {
  transactions.sort((a, b) => b.date - a.date);
  transactionList.innerHTML = "";
  transactions.forEach(function (transaction) {
    addTransactionDOM(transaction);
  });
  expenditurePercentageThisMonthContainer.innerHTML = `${Math.round(
    (currentMonthUsage() / totalUsage() || 0) * 100
  )}`;
  expenditureThisMonthContainer.innerHTML = `${currentMonthUsage()}`;
  totalUsageContainer.innerHTML = `${totalUsage()}`;
  window.onload();
}

showMe.addEventListener("change", function (e) {
  console.log(e.target.value);
  if (e.target.value != "All") {
    transactionList.innerHTML = "";
    transactions.forEach((a) => {
      if (a.category === e.target.value) {
        addTransactionDOM(a);
      }
    });
  } else {
    transactionList.innerHTML = "";
    transactions.forEach((a) => {
      addTransactionDOM(a);
    });
  }
});

// PIE-CHART
window.onload = function () {
  const month = new Date().toLocaleString("default", { month: "long" });
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "This month Expenses - " + month,
      fontColor: "#b4bcc3",
    },
    backgroundColor: "#1f2329",
    legend: {
      cursor: "pointer",
      itemclick: explodePie,
      fontColor: "#b4bcc3",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>₹ {y}</strong>",
        indexLabel: "{name} - ₹ {y}",
        indexLabelFontColor: "#b4bcc3",
        dataPoints: [
          { y: helper.travel, name: "Travel", exploded: true },
          { y: helper.medical, name: "Medical" },
          { y: helper.debt, name: "Debt" },
          { y: helper.bills, name: "Bills" },
          { y: helper.food, name: "Food" },
          { y: helper.others, name: "Others" },
        ],
      },
    ],
  });
  console.log(chart);

  chart.render();
};

function explodePie(e) {
  if (
    typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" ||
    !e.dataSeries.dataPoints[e.dataPointIndex].exploded
  ) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();
}

// ---------------------TOAST---------------------

let icon = {
  success: '<span class="material-symbols-outlined"></span>',
  danger: '<span class="material-symbols-outlined"></span>',
  warning: '<span class="material-symbols-outlined"></span>',
  info: '<span class="material-symbols-outlined"></span>',
};

const showToast = (
  message = "Sample Message",
  toastType = "info",
  duration = 5000
) => {
  if (!Object.keys(icon).includes(toastType)) toastType = "info";

  let box = document.createElement("div");
  box.classList.add("toast", `toast-${toastType}`);
  box.innerHTML = ` <div class="toast-content-wrapper">
                      <div class="toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="toast-message">${message}</div>
                      <div class="toast-progress"></div>
                      </div>`;
  duration = duration || 5000;
  box.querySelector(".toast-progress").style.animationDuration = `${
    duration / 1000
  }s`;

  let toastAlready = document.body.querySelector(".toast");
  if (toastAlready) {
    toastAlready.remove();
  }

  document.body.appendChild(box);
};

let submit = document.querySelector(".add");
let information = document.querySelector(".add1");
let failed = document.querySelector(".custom-toast.danger-toast");
let warn = document.querySelector(".custom-toast.warning-toast");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   showToast("Transaction Added Successfully", "success", 5000);
// });

// information.addEventListener("click", (e) => {
//   e.preventDefault();
//   showToast("Do POTD and Earn Coins", "info", 5000);
// });

// failed.addEventListener("click", (e) => {
//   e.preventDefault();
//   showToast("Failed unexpected error", "danger", 5000);
// });

// warn.addEventListener("click", (e) => {
//   e.preventDefault();
//   showToast("!warning! server error", "warning", 5000);
// });
