var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');

var message = document.getElementById('message');

var loginBtn = document.getElementById('loginBtn');

var signUpArray;
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}



function isLoginEmpty(){
    if (signinEmail.value.trim() === "" || signinPassword.value.trim() === "") {
        return false 
    }else{
        return true
    }
}

loginBtn.addEventListener("click" , function(e){
    if (isLoginEmpty() == false) {
        message.innerHTML = `<span class="text-center text-danger ">All Inputs Required..</span>`
        return false  
    }

    var email = signinEmail.value;
    var password = signinPassword.value;

    for(var i = 0; i < signUpArray.length; i++){
        if(signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()){
            localStorage.setItem('sessionUsername', signUpArray[i].name);
            window.location.href = "home.html"
        }else{
            message.innerHTML = `<span class="text-center text-danger ">Invalid Email or Password.. </span>`
        }
    }
})

function login(){
    if (isLoginEmpty() == false) {
        message.innerHTML = `<span class="text-center text-danger ">All Inputs Required..</span>`
        return false  
    }

    var email = signinEmail.value;
    var password = signinPassword.value;

    for(var i = 0; i < signUpArray.length; i++){
        if(signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()){
            localStorage.setItem('sessionUsername', signUpArray[i].name);
            window.location.href = "home.html"
        }else{
            message.innerHTML = `<span class="text-center text-danger ">Invalid Email or Password.. </span>`
        }
    }
}