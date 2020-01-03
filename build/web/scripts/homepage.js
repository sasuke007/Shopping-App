/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#nextbtn').click(function(){
        doTask();
    })
});

function doTask(){
    var ans=doValidate();
    //alert(doValidate());
    if(ans==false){
        return;
    }
    if(isRegChecked==true){
        window.location="registration.html";
    }
    else{
        window.location="login.html";
    }
}


function doValidate(){
    //$('#result').css("display","inline");
    isRegChecked=$('#rbtnReg').is(':checked');
    isLogChecked=$('#rbtnLog').is(':checked');
    var status=true;
    if(isRegChecked==false && isLogChecked==false){
        $('#result').text("Please select an option first");
        $('#result').css({"font-weight":"bold","color":"red"});
        $('#result').fadeOut(4000);
        status=false;
    }
    return status;       
}


