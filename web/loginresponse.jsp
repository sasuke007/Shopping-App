<%-- 
    Document   : login
    Created on : 4 Jan, 2019, 1:28:34 PM
    Author     : sasuke uchiha
--%>
<% 
boolean result=(Boolean)request.getAttribute("result");
String username=(String)request.getAttribute("username");
String usertype=(String)request.getAttribute("usertype");
if(result==true&& usertype.equalsIgnoreCase("CUSTOMER")){
    HttpSession sess=request.getSession();
    sess.setAttribute("username",username);
    String url="StoreControllerServlet;jsessionid="+sess.getId();
    out.println(url);  
}
else if(result==true&& usertype.equalsIgnoreCase("ADMIN")){
     HttpSession sess=request.getSession();
    sess.setAttribute("username",username);
    String url="AdminControllerServlet;jsessionid="+sess.getId();
    out.println(url); 
}
else{
    out.println("error");
}
%>