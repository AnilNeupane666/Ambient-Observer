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

public interface SerialPortLineListener {
    
    public abstract void serialLineEvent(SerialData data);
}
