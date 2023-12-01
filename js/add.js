
document.getElementById("addForm").onsubmit = addAddress;

document.getElementById("add-cancel-id").onclick = addToMain;


function addAddress(e) {

    e.preventDefault();

    let name = document.getElementById("add-name-id").value;
    let description = document.getElementById("add-description-id").value;
    let street = document.getElementById("add-street-id").value;
    let zip = document.getElementById("add-zip-id").value;
    let city = document.getElementById("add-city-id").value;
    let state = document.getElementById("add-state-id").value;
    let lat = document.getElementById("add-lat-id").value;
    let lon = document.getElementById("add-lon-id").value;

    /*
    // parameter = name of the element to be created.
    let address = document.createElement("div");
    address.innerHTML = name + " " + description + " " + street + " " + zip + " " + city + " " + state + "<br><br>";

    // the anonymous function acts as a wrapper.
    // this enables the expected delay in the execution of the function until the event.
    address.addEventListener("click", function(){
        addToDu(name,description,street,zip,city,state,lat,lon);
    });

    document.getElementById("main-map-address-container-id").appendChild(address);
    */

    addAddressToContainer(name,description,street,zip,city,state,lat,lon);

    emptyAddAddress();
}

// adds address to the "main-map-address-container-id" and an addEventListener
function addAddressToContainer(name,description,street,zip,city,state,lat,lon) {
    // parameter = name of the element to be created.
    let address = document.createElement("div");
    address.innerHTML = name + " " + description + " " + street + " " + zip + " " + city + " " + state + "<br><br>";

    // the anonymous function acts as a wrapper.
    // this enables the expected delay in the execution of the function until the event.
    address.addEventListener("click", function(){
        addToDu(name,description,street,zip,city,state,lat,lon);
    });

    document.getElementById("main-map-address-container-id").appendChild(address);
}

function emptyAddAddress() {
    // Empty the input fields.
    document.getElementById("add-name-id").value = "";
    document.getElementById("add-description-id").value = "";
    document.getElementById("add-street-id").value = "";
    document.getElementById("add-zip-id").value = "";
    document.getElementById("add-city-id").value = "";
    document.getElementById("add-state-id").value = "";
    document.getElementById("add-lat-id").value = "";
    document.getElementById("add-lon-id").value = "";
}

function addToDu(name,description,street,zip,city,state,lat,lon) {
    document.getElementById("du-name-id").value = name;
    document.getElementById("du-description-id").value = description;
    document.getElementById("du-street-id").value = street;
    document.getElementById("du-zip-id").value = zip;
    document.getElementById("du-city-id").value = city;
    document.getElementById("du-state-id").value = state;
    document.getElementById("du-lat-id").value = lat;
    document.getElementById("du-lon-id").value = lon;

    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "";
}

function addToMain() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}
