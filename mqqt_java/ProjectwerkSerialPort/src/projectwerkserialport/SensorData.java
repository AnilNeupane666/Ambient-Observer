/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projectwerkserialport;

/**
 *
 * @author jensv
 */
public class SensorData {

    private int sound = 0;
    private double temperature = 0;
    private int  light = 0;
   

    public SensorData(int light, double temperature, int sound) {
        this.light = light;
        this.temperature = temperature;
        this.sound = sound;
   
    }

    public int getsound() {
        return sound;
    }

    public double getTemperature() {
        return temperature;
    }

    public int getlight() {
        return light;
    }



    @Override
    public String toString() {
        return "[light: " + light + " | Temperature: " + temperature + " |Sound: " + sound  +  " ]";
    }
}
