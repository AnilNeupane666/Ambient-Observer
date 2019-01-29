/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projectwerkserialport;

/**
 *
 * @author ANil
 */
public class DataParser {

    private final static String OPENING_FLAG = "[";
    private final static String SEPARATOR_1 = "|";
    private final static String SEPARATOR_2 = "#";
    private final static String CLOSING_FLAG = "]";

    public SensorData parse(String dataString) {
        if (!isValidString(dataString)) {
            return null;
        }
        
        try {
            int light = Integer.parseInt(dataString.substring(dataString.indexOf(OPENING_FLAG) + 1, dataString.indexOf(SEPARATOR_1)));
            double temperature =Double.parseDouble(dataString.substring(dataString.indexOf(SEPARATOR_1) + 1, dataString.indexOf(SEPARATOR_2)));
            int sound = Integer.parseInt(dataString.substring(dataString.indexOf(SEPARATOR_2)+1, dataString.indexOf(CLOSING_FLAG)));
            
   

            return new SensorData( light, temperature, sound);
        } catch (NumberFormatException e) {
            System.out.println("Parsing error:  "+ e.getMessage());
        
        }
        return null;

    }
    

    private boolean isValidString(String dataString) {

        return (dataString.contains(OPENING_FLAG) && dataString.contains(SEPARATOR_1) && dataString.contains(SEPARATOR_2)&& dataString.contains(CLOSING_FLAG));
       
    }
}
