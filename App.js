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
        message3: null
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
            console.log(data)
           this.$data.ambient.temperature = data.temperature
           datatemperature.datasets[0].data.push(data.temperature)
           if (data.temperature >22 ){
            this.$data.ambient.message1 ='Its getting hot';
           }
          else {
            this.$data.ambient.message1 =null;
          }

     
           datatemperature.labels.push('')
           charttemprature.update()
          
          }
          if(data.sound !== undefined){
          
           this.$data.ambient.sound = data.sound


           if (data.sound  >100 ){
            this.$data.ambient.message2 ='The room is not empty';
           }
          else {
            this.$data.ambient.message2 =null;
          }
           datasound.datasets[0].data.push(data.sound)
           datasound.labels.push('')
           chartsound.update()
           
          }
          if(data.light !== undefined){
         
           this.$data.ambient.light = data.light
           datalight.datasets[0].data.push(data.light)
           datalight.labels.push('')
           chartlight.update()
           console.log(data.light)
          }
          if (data.sound < 100 && data.light >100 ){
            this.$data.ambient.message3 ='The room is empty but the lights are on.Please turn off the lights';
           }
          else {
            this.$data.ambient.message3 =null;
          }
      }
    }
  });
});

