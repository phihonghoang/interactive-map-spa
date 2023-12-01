
document.getElementById("duForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (e.submitter.id === "du-update-id") {

    } else if(e.submitter.id === "du-delete-id") {

    }
});

document.getElementById("du-cancel-id").onclick = duToMain;


function duUpdate() {

}

function duDelete() {
    
}

function duToMain() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}