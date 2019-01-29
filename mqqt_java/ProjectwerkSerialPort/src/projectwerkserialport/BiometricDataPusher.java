/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projectwerkserialport;

import mqttbiometricdataservice.IMqttDataHandler;
import mqttbiometricdataservice.MqttBiometricDataService;

/**
 *
 * @author jensv
 */
public class BiometricDataPusher implements IMqttDataHandler {
    
    private MqttBiometricDataService   biometricDataServicetemperature;
    private MqttBiometricDataService biometricDataServicesound;
    private MqttBiometricDataService biometricDataServicelight;


    public BiometricDataPusher() {
        biometricDataServicetemperature = new MqttBiometricDataService("Anil", "Temperature");
        biometricDataServicetemperature.setDataHandler(this);
        biometricDataServicesound = new MqttBiometricDataService("Anil", "sound");
        biometricDataServicesound.setDataHandler(this);
        biometricDataServicelight = new MqttBiometricDataService("Anil", "light");
        biometricDataServicelight.setDataHandler(this);
     
    }
 
    public void sendsound(String data){
        biometricDataServicesound.sendData("{\"sound\": "+data + "}");
    }
    
    public void sendTemperature(String data){
        biometricDataServicetemperature.sendData("{\"temperature\": "+data + "}");
    }
    
    public void sendlight(String data){
        biometricDataServicelight.sendData("{\"light\": "+data + "}");
    }
   
   
    @Override
    public void dataArrived(String channel, String data) {
    }    
}