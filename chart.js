let datasound = {
    labels: ["0","","","","","","","","",""],
    datasets: [{
        label: ' ',
        data: [0],
        
        borderWidth: 1
    }]
}
let datalight = {
    labels: ["0","","","","","","","","",""],
    datasets: [{
        data: [0],
        label: ' ',
        
        borderWidth: 1
    }]
} 

let datatemperature = {
        labels: ["0","","","","","","","","",""],
        datasets: [{
            label: ' °C',
            data: [0],
            label: ' ',
            borderWidth: 1
        }]
    }
    let datahuminity = {
        labels:["0","","","","","","","","",""],
        datasets: [{
            label: ' ',
            data: [2,6,5,4,8,6,11,5,8,9],
            
            borderWidth: 1
        }]
    }
    let dataco2 = {
        labels: ["0","","","","","","","","",""],
        datasets: [{
            label: ' ',
            data: [11,5,8,9,4,6,2,6,5,4],
            
            borderWidth: 1
        }]
    }
var charttemprature;
var chartsound;
var chartlight;
var charthuminity
var chartco2

document.addEventListener('DOMContentLoaded', () => {
    var temprature = document.getElementById("charttemprature").getContext('2d');
    
    charttemprature = new Chart(temprature, {
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
    
    chartsound = new Chart(myChart, {
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
    
    chartlight= new Chart(light, {
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
document.addEventListener('DOMContentLoaded', () => {
    var co2 = document.getElementById("chartco2").getContext('2d');
    
    chartco2 = new Chart(co2, {
        type: 'line',
        data: dataco2,
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
    var huminity = document.getElementById("charthuminity").getContext('2d');
    
    charthuminity = new Chart(huminity, {
        type: 'line',
        data: datahuminity,
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
