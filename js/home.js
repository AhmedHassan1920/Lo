/*Welcome Animation*/ 

let welcomedivP = document.querySelector(".welcomedivP");
const animateElements = () => {
    welcomedivP.classList.add('animate');
};

window.addEventListener('load', animateElements);
  
/*Log out process*/
var logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click" , function(e) {
    localStorage.removeItem('sessionUsername');
    window.location.href="login.html"
});

var username = localStorage.getItem('sessionUsername');

if (username) {
    document.getElementById('userName').innerHTML = username
}

