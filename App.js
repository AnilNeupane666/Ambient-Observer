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
        light: null
      }       // some weather information, but we do not have any values yet
    },
    mounted () {
      this.$mqtt.subscribe(topic)       // subscribe to the information topic on MQTT
    },
    mqtt: {
      [topic]: function(message) {        // when a message arrives on our topic
        let json = (new TextDecoder("utf-8").decode(message))    // we need to convert (decode) the byte information to a text string
        let data = JSON.parse(json)       // parse the JSON format to an object
          if(data.temperature !== undefined){
            console.log(data)
           this.$data.ambient.temperature = data.temperature
          }
          if(data.sound !== undefined){
            console.log(data)
           this.$data.ambient.sound = data.sound
          }
          if(data.light !== undefined){
            console.log(data)
           this.$data.ambient.light = data.light
          }

      }
    }
  });
});