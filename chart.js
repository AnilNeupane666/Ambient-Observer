var datasound = {
    labels: ["0"],
    datasets: [{
        label: 'aantal ',
        data: [0],
        
        borderWidth: 1
    }]
}
var datalight = {
    labels: ["0"],
    datasets: [{
        label: 'aantal lux',
        data: [0],
        
        borderWidth: 1
    }]
} 

var datatemperature = {
        labels: ["0"],
        datasets: [{
            label: ' °C',
            data: [0],
            
            borderWidth: 1
        }]
    }
document.addEventListener('DOMContentLoaded', () => {
    var temperature = document.getElementById("charttemperature").getContext('2d');
    
    chart = new Chart(temperature, {
        type: 'line',
        data: datatemperature,
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
    
    mychart = new Chart(myChart, {
        type: 'line',
        data: datasound,
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
    
    chart = new Chart(light, {
        type: 'line',
        data: datalight,
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
