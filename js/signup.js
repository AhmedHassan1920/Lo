// all inputs
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signUpBtn = document.getElementById('signUpBtn');

var message = document.getElementById('message');


var signUpArray;
if (localStorage.getItem('users') == null){
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}


function isEmpty() {
    if (signupEmail.value.trim() === "" || signupName.value.trim() === "" || signupPassword.value.trim() === "") {
        return false;
    } else {
        return true;
    }
}

// to check if email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

signUpBtn.addEventListener("click" , function (e){
    if (isEmpty() == false) {
        message.innerHTML = `<span class="text-center text-danger ">All Inputs Required..</span>`
        return false
    }
    
    var signupData ={
        name : signupName.value,
        email : signupEmail.value,
        password : signupPassword.value
    }

    if(signUpArray.length == 0){
        signUpArray.push(signupData);
        localStorage.setItem("users" , JSON.stringify(signUpArray));
        message.innerHTML = `<span class="text-center text-success ">Sign Up Done..</span>`
        window.location.href = "login.html"
        return true
    }
    else if(isEmailExist() == false){
        message.innerHTML = `<span class="text-center text-danger ">Email is already exist..</span>`

    }else {
        signUpArray.push(signupData)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        message.innerHTML = `<span class="text-center text-success ">Sign Up Done..</span>`
        window.location.href = "login.html"
    }
    
});
