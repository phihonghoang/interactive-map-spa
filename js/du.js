
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

    selectedAddress.setAttribute('data-name', name);
    selectedAddress.setAttribute('data-description', description);
    selectedAddress.setAttribute('data-street', street);
    selectedAddress.setAttribute('data-zip', zip);
    selectedAddress.setAttribute('data-city', city);
    selectedAddress.setAttribute('data-state', state);
    selectedAddress.setAttribute('data-lat', lat);
    selectedAddress.setAttribute('data-lon', lon);

    selectedAddress.innerHTML = name + " " + description + " " + 
                        street + " " + zip + " " + city + " " + 
                        state + " " + lat + " " + lon + "<br><br>";
      
            
    duToMain();
}

/*
function hcaUpdate(name,description,street,zip,city,state,lat,lon) {
    
}
*/

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

function emptyDuAddress() {
    // Empty the input fields.
    document.getElementById("du-name-id").value = "";
    document.getElementById("du-description-id").value = "";
    document.getElementById("du-street-id").value = "";
    document.getElementById("du-zip-id").value = "";
    document.getElementById("du-city-id").value = "";
    document.getElementById("du-state-id").value = "";
    document.getElementById("du-lat-id").value = "";
    document.getElementById("du-lon-id").value = "";
}