const ctxBar = document.getElementById("barchart").getContext("2d");
const barChart = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6","Question 7","Question 8","Question 9","Question 10","Question 11","Question 12","Question 13"],
    datasets: [{
        label: "DISTRIBUTION OF FEEDBACK SCORES",
        data: [5, 4, 3, 2, 1,5, 4, 3, 2, 1,5,4,3],
        backgroundColor: ["green","lightgreen","yellow","pink","red"],
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth:1,
        barPercentage:0.8,
        categoryPercentage:0.9
      }]
      },
  options: {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true,
         ticks: {
          stepSize: 1,
          callback:function(value)
    {
            return Number.isInteger(value) ? value : '';
          }
        }
      }
    }
  }
});
