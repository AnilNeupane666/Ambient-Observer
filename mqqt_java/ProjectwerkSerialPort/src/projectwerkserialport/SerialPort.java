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
public class SerialPort {

    private final static int BAUD_RATE = 9600;
    private final static int COM_PORT_INDEX = 0;

    public static void main(String[] args) {

        SerialLineReceiver receiver = new SerialLineReceiver(COM_PORT_INDEX, BAUD_RATE, false);
        DataParser parser = new DataParser();
        BiometricDataPusher pusher = new BiometricDataPusher();

        receiver.setLineListener(new SerialPortLineListener() {
            @Override
            public void serialLineEvent(SerialData data) {
                String dataString = data.getDataAsString();
                System.out.println("Datastring = " + dataString);
                SensorData dataFromArduino = parser.parse(dataString);
               
                if (dataFromArduino != null) {
                    System.out.println("Received data from the serial port: " + dataFromArduino);

                    pusher.sendsound(dataFromArduino.getsound() + "");
                    System.out.println("Sound data has been sent to mqttt.");
                    pusher.sendTemperature(dataFromArduino.getTemperature() + "");
                    System.out.println("Temperature data has been sent to mqttt.");
                    pusher.sendlight(dataFromArduino.getlight() + "");
                    System.out.println("lightintensity  data has been sent to mqttt.");
                 
                }

            }
        });
    }
}
