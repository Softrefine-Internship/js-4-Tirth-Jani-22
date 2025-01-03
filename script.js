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
          { y: 2500, name: "Travel", exploded: true },
          { y: 700, name: "Medical" },
          { y: 1200, name: "Debt" },
          { y: 300, name: "Bills" },
          { y: 700, name: "Food" },
          { y: 2200, name: "Others" },
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
