const transactionList = document.getElementById("transactionList");
const expenditureThisMonthContainer = document.getElementById(
  "expenditureThisMonth"
);
const totalUsageContainer = document.getElementById("expenditureTotal");
const expenditurePercentageThisMonthContainer = document.getElementById(
  "expenditurePercentageThisMonth"
);

let count = 504;
const transactions = [
  {
    id: 13,
    date: new Date("2023-12-01"),
    amount: 900,
    category: "Bills",
    description: "Electricity bill",
  },
  {
    id: 14,
    date: new Date("2023-06-18"),
    amount: 750,
    category: "Travel",
    description: "Bus tickets to a neighboring city",
  },
  {
    id: 15,
    date: new Date("2024-02-01"),
    amount: 1500,
    category: "Medical",
    description: "Car loan payment",
  },
  {
    id: 16,
    date: new Date("2023-04-22"),
    amount: 450,
    category: "Medical",
    description: "Supermarket shopping",
  },
  {
    id: 17,
    date: new Date("2023-07-14"),
    amount: 100,
    category: "Others",
    description: "Charity donation",
  },
  {
    id: 18,
    date: new Date("2023-02-28"),
    amount: 300,
    category: "Bills",
    description: "Water bill payment",
  },
  {
    id: 19,
    date: new Date("2024-01-10"),
    amount: 1200,
    category: "Travel",
    description: "Hotel stay booking",
  },
  {
    id: 20,
    date: new Date("2022-06-22"),
    amount: 850,
    category: "Debt",
    description: "Student loan payment",
  },
  {
    id: 21,
    date: new Date("2025-01-5"),
    amount: 500,
    category: "Others",
    description: "Flight tickets to Paris",
  },
  {
    id: 22,
    date: new Date("2025-01-03"),
    amount: 300,
    category: "Food",
    description: "Lunch at a local café",
  },
  {
    id: 23,
    date: new Date("2025-01-01"),
    amount: 600,
    category: "Bills",
    description: "Internet bill payment",
  },
  {
    id: 24,
    date: new Date("2025-01-02"),
    amount: 1200,
    category: "Debt",
    description: "Credit card payment",
  },
  {
    id: 25,
    date: new Date("2024-01-01"),
    amount: 150,
    category: "Others",
    description: "Charity donation",
  },
  {
    id: 26,
    date: new Date("2024-12-15"),
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
    id: 36,
    date: new Date("2025-01-02"),
    amount: 800,
    category: "Travel",
    description: "Train tickets to a nearby city",
  },
  {
    id: 37,
    date: new Date("2025-01-04"),
    amount: 350,
    category: "Bills",
    description: "Water bill payment",
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
transactions.sort((a, b) => b.date - a.date);
function addTransactionDOM(transaction) {
  const item = document.createElement("div");
  item.innerHTML = `
  <div class="transaction-tile">
        <div class="leading-icon">
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
              </div>
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
                      .slice(0, 3)} ${transaction.date
    .toString()
    .slice(8, 10)}  ${transaction.date.toString().slice(10, 15)}
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
    transaction.date.getMonth() === new Date().getMonth() &&
    transaction.date.getFullYear() === new Date().getFullYear()
  ) {
    helper[transaction.category.toLowerCase()] += transaction.amount;
  }
  addTransactionDOM(transaction);
});

const deleteTransaction = function (id) {
  transactions.forEach(function (transaction, index) {
    if (transaction.id === id) {
      console.log(transactions);
      transactions.splice(index, 1);
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
  });
};
const currentMonthUsage = function () {
  let total = 0;
  transactions.forEach(function (transaction) {
    if (
      transaction.date.getMonth() === new Date().getMonth() &&
      transaction.date.getFullYear() === new Date().getFullYear()
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
