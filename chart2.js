const ctxDoughnut = document.getElementById("doughnutchart").getContext("2d");
const doughnutChart = new Chart(ctxDoughnut, {
  type: "doughnut",
  data: {
    labels: ["Rating 5", "Rating 4", "Rating 3", "Rating 2", "Rating 1"],
    datasets: [
      {
        data: [20, 20, 20, 20, 20],
        backgroundColor: ["red", "blue", "yellow", "green", "orange"],
        hoverOffset: 20,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
