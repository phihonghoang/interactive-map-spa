
let userIsLoggedIn = false;

const admin = {
    username: "admin",
    password: "password",
    role: "admin"
};


const initScreensAddEventHandlers = function () {
    if (userIsLoggedIn === false) {
        showLogin();
    } else {
        hideLogin();
    }

    document.getElementById("loginForm").onsubmit = checkLogin;
}


function checkLogin(e) {

    e.preventDefault();

    const loginEntered = document.getElementById("login-username-id").value;
    const passwordEntered = document.getElementById("login-password-id").value;

    if (admin.username === loginEntered && admin.password == passwordEntered) {
        userIsLoggedIn = true
        hideLogin();
    } else {
        alert("Incorrect username or password!")
        userIsLoggedIn = false;
    }
}

function showLogin() {
    document.getElementById("login-container-id").style.display = "";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}

function hideLogin() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}

window.onload = initScreensAddEventHandlers; 



