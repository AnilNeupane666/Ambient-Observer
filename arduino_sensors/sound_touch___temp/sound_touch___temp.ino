

#include <math.h>
const int TouchPin=2;
const int B = 4275;               // B value of the thermistor
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0
const int pinAdc = A1;
volatile int buttonState = 0;
const int ledPin =  13;
int ButtonState = LOW;
 
void setup() {
    pinMode(TouchPin, INPUT);
    Serial.begin(9600);
    // Attach an interrupt to the ISR vector
    attachInterrupt(0, pin_ISR,RISING);
}

void loop() {
   if (ButtonState == 1) {
   
  double value = analogRead(A2);
        int a = analogRead(pinTempSensor);
       int b = analogRead(pinAdc);

    float R = 1023.0/a-1.0;
    R = R0*R;
    
    float temperature = 10 + 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet
    long sound = 0;
    for(int i=0; i<32; i++)
    {
        sound += analogRead(pinAdc);
    }

    sound >>= 5;

    
    int light = (value/50)*32;
//    Serial.print("light intensity = ");
//    Serial.println(light);  
//    Serial.print("SOUND = ");
//    Serial.println(sound);
//    Serial.print("temperature = ");
//    Serial.println(temperature);
    Serial.println(String("[") + light + String("|") + ((temperature)) + String("#") +((sound))+ String ("]"));  
    if (temperature >23 || sound > 450 || light <50 ){
      digitalWrite(6, HIGH);
      delay(analogRead(0));
      digitalWrite(6, LOW);
      delay(analogRead(0));
    }
    delay(1000);
} else {
  Serial.println("The sensor is switched off.");
     delay(1000);
}
}

void pin_ISR() {
  int sensorValue = digitalRead(TouchPin);
  if (ButtonState == 0){
    ButtonState =1;
  } else{
    ButtonState = 0;
  }
}
