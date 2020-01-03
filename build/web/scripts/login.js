/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
    $("#loginbtn").click(function()
    {
        doTask();
    });
    
});

function dovalidate(){
    
    $("#loginresult").css("display","inline");
    $("#loginresult").text("");            
    
    var status = true;
    
    if($("#username").val()==="")
        {
         $("#loginresult").text("Username Required!!");
         $("#loginresult").css("color","red");
         $("#loginresult").css("font-weight","bold");
         $("#loginresult").fadeOut(4000);
         status = false;
        }
    if($("#password").val()==="")
        {
         $("#loginresult").text("Password Required!!");
         $("#loginresult").css("color","red");
         $("#loginresult").css("font-weight","bold");
         $("#loginresult").fadeOut(4000);
         status = false;
        }    
    if($("#username").val()==="" && $("#password").val()==="")
        {
         $("#loginresult").text("Username and Password Required!!");
         $("#loginresult").css("color","red");
         $("#loginresult").css("font-weight","bold");
         $("#loginresult").fadeOut(4000);
         status = false;
        }
        
        return status;
}

function doTask(){
     var ans =  dovalidate();
     if(ans==false){
         return;
     }
     else{
       //alert("rohit"); 
      var data = {username:$("#username").val(),password:$("#password").val(),usertype:$("#usertype").val()}
      var xhr = $.post("LoginControllerServlet",data,processResponse)
     }
}

function processResponse(responseText,textStatus)
{
    if(responseText.trim()==='error')
        {   
            $("#loginresult").css("display","inline");
            $("#loginresult").text("");           
            $("#loginresult").text("Login Rejected!!");
            $("#loginresult").css("color","red");
            $("#loginresult").css("font-weight","bold");
            $("#loginresult").fadeOut(4000);
            $("#username").val("");
            $("#password").val("");
        }
     else if(responseText.trim()==='exception')
        {   
            $("#loginresult").css("display","inline");
            $("#loginresult").text("");           
            $("#loginresult").text("Server is experiencing some problem!!");
            $("#loginresult").css("color","red");
            $("#loginresult").css("font-weight","bold");
            $("#loginresult").fadeOut(4000);
            $("#username").val("");
            $("#password").val("");
        }
      else{
         // alert(responseText);
            $("#loginresult").css("display","inline");
            $("#loginresult").text("");           
            $("#loginresult").html("Login accepted! <br>Redirecting");
            $("#loginresult").css("color","green");
            $("#loginresult").css("font-weight","bold");
            $("#loginresult").fadeOut(3000);
            setTimeout(function()
                {window.location=responseText;},300    
                );
          
      }
        
}























