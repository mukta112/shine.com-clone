function otpvar(){
        
    var Otp=document.getElementById("otp").value;
    if(Otp==1234){
        alert("Login Succesfull")
        window.location.href="./index.html";
      
    }
    else{
        alert("Wrong OTP!")
    }
}

function resend(){
    alert("OTP Sent!")
}