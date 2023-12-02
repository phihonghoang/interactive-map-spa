
document.getElementById("duForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (e.submitter.id === "du-update-id") {
        duUpdate();
    }
    
    if(e.submitter.id === "du-delete-id") {
        duDelete();
        console.log("Perfekt!")
    }
});

document.getElementById("du-cancel-id").onclick = duToMain;


function duUpdate() {
    let name = document.getElementById("du-name-id").value;
    let description = document.getElementById("du-description-id").value;
    let street = document.getElementById("du-street-id").value;
    let zip = document.getElementById("du-zip-id").value;
    let city = document.getElementById("du-city-id").value;
    let state = document.getElementById("du-state-id").value;
    let lat = document.getElementById("du-lat-id").value;
    let lon = document.getElementById("du-lon-id").value;
    

    selectedAddress.innerHTML = name + " " + description + " " + 
                                street + " " + zip + " " + city + " " + 
                                state + " " + lat + " " + lon + "<br><br>";
    
    duToMain();
}

function duDelete() {
    selectedAddress.parentNode.removeChild(selectedAddress);

    duToMain();
}

function duToMain() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}