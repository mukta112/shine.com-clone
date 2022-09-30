
var dataObj = JSON.parse(localStorage.getItem("data")) || []
function signupFunction(){
    var dataObj = {
        fname:document.querySelector("#fname").value,
        mail:document.querySelector("#email").value,
        pass:document.querySelector("#password").value
    }
    
    localStorage.setItem("data",JSON.stringify(dataObj))
    if(dataObj.fname!="" && dataObj.mail!="" && dataObj.pass!=""){
        alert("Sign up successful")
        window.location.href="./login.html"
    }
    else{
        alert("Please fill all the details")
    }
    
   
}