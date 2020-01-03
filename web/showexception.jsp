<%-- 
    Document   : showexception
    Created on : 4 Jan, 2019, 1:35:15 PM
    Author     : sasuke uchiha
--%>
<%
    Exception e=(Exception)request.getAttribute("exception");
    String msg=e.getMessage();
    System.out.println("Exception is "+e);
    out.println(msg);
%>

