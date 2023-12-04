
document.getElementById("main-add-id").onclick = mainToAdd;
document.getElementById("normalo-main-logout-id").onclick = mainToLogin;
document.getElementById("main-logout-id").onclick = mainToLogin;

function mainToAdd() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("normalo-main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "";
    document.getElementById("delete-update-container-id").style.display = "none";
    document.getElementById("details-container-id").style.display = "none";
}

function mainToLogin() {
    document.getElementById("login-container-id").style.display = "";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("normalo-main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
    document.getElementById("details-container-id").style.display = "none";
}
