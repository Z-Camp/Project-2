function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Time (min)',
                    data: data[0],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    yAxisID: "Time"
                },
                {
                    label: 'Distance (mi)',
                    data: data[1],
                    borderColor: 'rgba(203, 58, 106, 1)',
                    backgroundColor: 'rgba(133, 35, 68, 1)',
                    yAxisID: "Distance"
                }
            ]
        },
        options: {
            responsive: true,
            title: {
            display: true,
            text: 'Your Logged Workouts'
          },
          scales: {
            yAxes: [{
              display: true,
              position: 'left',
              id: 'Time',
              ticks: {
                max: 180,
                min: 0,
                fontColor: 'rgba(75, 192, 192, 1)',
                stepSize: 5
            }
            }, {
              display: true,
              position: 'right',
              id: 'Distance',
              ticks: {
                    max: 30,
                    min: 0,
                    fontColor:'rgba(133, 35, 68, 1)',
                    stepSize: 1
                },
              // grid line settings
              gridLines: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            }],
          }
            },
        }
    );
}
let labelsArray = [];
let dataSet1 = [];
let dataSet2 = [];
function getChartData() {
    $.get("/api/user_data").then(function (data) {
        let userId = data.id;
        $.get("/api/activities/" + userId).then(function (data) {
            for (let i = 0; i < data.length; i++) {
                labelsArray.push(JSON.stringify((data[i].dateTime).split("T")[0]));
                dataSet1.push(data[i].time);
                dataSet2.push(data[i].distance);
              }
            var data = [];
            data.push(dataSet1);
            data.push(dataSet2);
            var labels = labelsArray;
            renderChart(data, labels);
    });
})}
getChartData()