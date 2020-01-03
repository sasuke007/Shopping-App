/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package shoppingcatalog.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import regapp.dbutil.DBConnection;
import shoppingcatalog.dto.userDTO;

/**
 *
 * @author sasuke uchiha
 */
public class RegistrationDAO {
    private static PreparedStatement ps1,ps2;
    static{
        try{
            
        ps1=DBConnection.getConnection().prepareStatement("select username from members where username=? and membertype='CUSTOMER'");
        ps2=DBConnection.getConnection().prepareStatement("insert into members values(?,?,?)");
        }
        catch(SQLException ex){
            System.out.println("Exception is"+ex);
        }
        }
    public static boolean searchUser(String username)throws SQLException{
       ps1.setString(1,username);
       ResultSet rs=ps1.executeQuery();
       return rs.next();
    }
    
    public static boolean registerUser(userDTO user)throws SQLException{
        boolean done=false;
        ps2.setString(1,user.getUsername());
        ps2.setString(2,user.getPassword());
        ps2.setString(3,user.getUsertype());
        int ans=ps2.executeUpdate();
        if(ans!=0)
            done=true;
        return done;
    }
}
