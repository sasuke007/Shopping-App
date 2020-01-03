/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package regapp.dbutil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author sasuke uchiha
 */
public class DBConnection {
    private static Connection conn;
    static{
        try{
            Class.forName("oracle.jdbc.OracleDriver");
            System.out.println("Driver Loaded");
            conn=DriverManager.getConnection("jdbc:oracle:thin:@//DESKTOP-OE7AC3H:1521/XE", "onlineshopping", "shopping");
    }
        catch(Exception ex){
            System.out.println("Exception in opening connection"+ex);
        }
    }
        public static Connection getConnection(){
            return conn;
        }
        
        public static void closeConnection(){
            try{
                conn.close();
            }
            catch(SQLException ex){
                ex.printStackTrace();
            }
        }
    
}

