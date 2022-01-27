// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var imc = document.getElementById("imc")
var gord = document.getElementById("gord")
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Horas/Mês",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [30, 35, 30, 40, 20, 25, 35, 40, 25, 45, 30, 10, 25],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 80,
                    maxTicksLimit: 4
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: false
        }
    }
});

var gord = new Chart(gord, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "%",
            lineTension: 0.3,
            backgroundColor: "rgba(2,117,216,0.2)",
            borderColor: "rgba(2,117,216,1)",
            pointRadius: 5,
            pointBackgroundColor: "rgba(2,117,216,1)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(2,117,216,1)",
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [31, 30, 29, 28, 26, 24, 22, 20, 19, 18, 18, 17, 17],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 40,
                    maxTicksLimit: 4
                },
                gridLines: {
                    color: "rgba(0, 0, 0, .125)",
                }
            }],
        },
        legend: {
            display: false
        }
    }
});



var imc = new Chart(imc, {
    type: 'bar',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "kg/m².",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: [17.3, 18.3, 19.4, 20.4, 20.1, 20.1, 21.1, 21.8, 22.5, 22.5, 23.2, 23.5],
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'month'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 6
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 40,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});




