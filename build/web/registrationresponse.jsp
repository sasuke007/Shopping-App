<%-- 
    Document   : registrationresponse
    Created on : 5 Jan, 2019, 5:03:52 PM
    Author     : sasuke uchiha
--%>
<% 
    boolean result=(Boolean)request.getAttribute("result");
    boolean userFound=(Boolean)request.getAttribute("userFound");
    if(userFound==true){
        out.println("uap");
    }
    else if(result==false){
        out.println("failure");
    }
    else{
        out.println("success");
    }
%>
