
// mainToAdd ohne Klammer = Die Funktion wird nicht sofort aufgerufen,
// sondern wird als Referenz an das "onclick"-Handler übergeben.
document.getElementById("main-add-id").onclick = mainToAdd;

document.getElementById("main-logout-id").onclick = mainToLogin;

function mainToAdd() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "";
    document.getElementById("delete-update-container-id").style.display = "none";
}

function mainToLogin() {
    document.getElementById("login-container-id").style.display = "";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}