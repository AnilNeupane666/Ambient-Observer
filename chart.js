
document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.getElementById("charttemperature").getContext('2d');
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [ "0min","30min", "1u", "1u30min", "2u", "2u30min", ],
            datasets: [{
                label: 'graden celsius',
                data: [12, 19, 3, 5, 2, 3],
                
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            responsive: false
        }
    });
})
document.addEventListener('DOMContentLoaded', () => {
    var myChart = document.getElementById("chartsound").getContext('2d');
    
    var myChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'aantal ',
                data: [12, 19, 3, 5, 2, 3],
                
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            responsive: false
        }
    });
})
document.addEventListener('DOMContentLoaded', () => {
    var light = document.getElementById("chartlight").getContext('2d');
    
    var myChart = new Chart(light, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'aantal lux',
                data: [12, 19, 3, 5, 2, 3],
                
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            responsive: false
        }
    });
})