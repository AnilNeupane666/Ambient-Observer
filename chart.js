let datalight = {
    labels: ["0"],
    datasets: [{
        label: 'aantal lux',
        data: [0],
        
        borderWidth: 1
    }]
}
let datasound = {
    labels: ["0"],
    datasets: [{
        label: 'aantal lux',
        data: [0],
        
        borderWidth: 1
    }]
}
let datatemperature = {
    labels: ["0"],
    datasets: [{
        label: 'aantal lux',
        data: [0],
        
        borderWidth: 1
    }]
}
document.addEventListener('DOMContentLoaded', () => {
    var myChart = document.getElementById("chartsound").getContext('2d');
    
    var myChart = new Chart(myChart, {
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
