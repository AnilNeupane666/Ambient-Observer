// Wait for the document to be fully loaded so that all 
// context is available before running any code

document.addEventListener("DOMContentLoaded",function(){

  const topic = 'pw/amb/observer/#'

  Vue.use(VueMqtt.default, 'ws://mqtt.labict.be:1884')


  // Create a new Vue application. 
  new Vue({
    el: '#app',         // the element on which the Vue app must be build on
    data: {             // the application contains some data
      ambient: {
        temperature: null,
        sound: null,
        light: null,
        message1: null,
        message2: null,
        message3: null,
        message4: null,
        message5:null
      }, 
          // some weather information, but we do not have any values yet
    },
    mounted () {
      this.$mqtt.subscribe(topic)       // subscribe to the information topic on MQTT
    },
    mqtt: {
      [topic]: function(message) {        // when a message arrives on our topic
        let json = (new TextDecoder("utf-8").decode(message))    // we need to convert (decode) the byte information to a text string
        let data = JSON.parse(json)       // parse the JSON format to an object
        this.$data.Ambient = data         // 
          if(data.temperature !== undefined){
            if(datatemperature.datasets[0].data.length > 10){
              datatemperature.datasets[0].data.shift(data.temperature)
            }
           this.$data.ambient.temperature = data.temperature
           datatemperature.datasets[0].data.push(data.temperature)



           let total =0;
           datatemperature.datasets[0].data.forEach(value =>
             {
             total+=value;
          

           });
           
           this.$data.ambient.message5 = 'Average Temperature : '+(total/datatemperature.datasets[0].data.length).toPrecision(4); 
        
           
           if (data.temperature >25 ){
            this.$data.ambient.message1 ='It\'s getting warmer.';
           }
          else {
            this.$data.ambient.message1 =null;
          }

     
           
           charttemprature.update()
           
           if (datatemperature.datasets[0].data.slice(-1)[0] > 25){
            document.getElementById("colortemperature").style.background= "red"
          }
            if (datatemperature.datasets[0].data.slice(-1)[0] < 25){
              document.getElementById("colortemperature").style.background= 'green';
          }
          }
          if(data.sound !== undefined){
            if(datasound.datasets[0].data.length > 10){
              datasound.datasets[0].data.shift(data.temperature)
            }
           this.$data.ambient.sound = data.sound


           if (data.sound  >100 ){
            this.$data.ambient.message2 ='The room is not empty.';
           }
          else {
            this.$data.ambient.message2 =null;
          }
           datasound.datasets[0].data.push(data.sound)
           chartsound.update()
     
           if (datasound.datasets[0].data.slice(-1)[0] > 450){
            document.getElementById("colorsound").style.background= "red"
          }
            if (datasound.datasets[0].data.slice(-1)[0] < 450){
              document.getElementById("colorsound").style.background= 'green';
          }
          }
          if(data.light !== undefined){
            if(datalight.datasets[0].data.length > 10){
              datalight.datasets[0].data.shift(data.temperature)
            }
           this.$data.ambient.light = data.light
           datalight.datasets[0].data.push(data.light)
           chartlight.update()
      
           if (datasound.datasets[0].data.slice(-1)[0] < 50){
            document.getElementById("colorlight").style.background= "red"
          }
            if (datasound.datasets[0].data.slice(-1)[0] > 50){
              document.getElementById("colorlight").style.background= 'green';
          }
          }
          
          if (this.$data.ambient.sound < 100 && this.$data.ambient.light >100 ){
            this.$data.ambient.message3 ='The room is empty but the lights are on.Please turn off the lights.';
           
           }
           
          else {
            this.$data.ambient.message3 =null;
          }
          console.log( this.$data.ambient.temperature);
          if (this.$data.ambient.sound < 400 && this.$data.ambient.light >100 &&  this.$data.ambient.temperature <22){
          if(this.$data.ambient.temperature > 18)
          {
            this.$data.ambient.message4 ='The room is in perfect condition with the right amount of humidity, CO2 level and temperature. ';
           }}
          else {
            this.$data.ambient.message4 ='The room is not in perfect condition.';
          }
        
      }
    }
  });
});

