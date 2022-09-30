
var data = JSON.parse(localStorage.getItem("data"))
function loginFunction(){
    var loginData = {
        mail:document.querySelector("#email").value,
        pass:document.querySelector("#password").value
    }
    
   if(data.mail == loginData.mail  &&  data.pass == loginData.pass){
    alert("login successful")
    window.location.href="./index.html"
   }
   else{
    alert("enter correct details")
   }
}


function otpFunction(){
    window.location.href = "./otp.html"
}