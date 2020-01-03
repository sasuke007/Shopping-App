/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package shoppingcatalog.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import regapp.dbutil.DBConnection;
import shoppingcatalog.dto.userDTO;

/**
 *
 * @author sasuke uchiha
 */
public class LoginDAO {
    private static PreparedStatement ps;
    static{
        try{
            ps=DBConnection.getConnection().prepareStatement("select username from members where username=? and password=? and membertype=?");
        }
        catch(SQLException ex){
            System.out.println("Error in DB communication :"+ex);
        }
    }
    public static boolean validateUser(userDTO userDetails)throws SQLException{
        System.out.println(userDetails.getUsertype());
       ps.setString(1,userDetails.getUsername());
       ps.setString(2,userDetails.getPassword());
       ps.setString(3,userDetails.getUsertype());
       ResultSet rs=ps.executeQuery();
       return rs.next();
    }
}
