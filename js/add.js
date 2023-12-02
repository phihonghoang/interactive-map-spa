
let selectedAddress;

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

    addAddressToContainer(name,description,street,zip,city,state,lat,lon);
    emptyAddAddress();
}

// adds address to the "main-map-address-container-id" and an addEventListener
function addAddressToContainer(name,description,street,zip,city,state,lat,lon) {
    // parameter = name of the element to be created.
    let address = document.createElement("div");
    address.innerHTML = name + " " + description + " " + 
                        street + " " + zip + " " + city + " " +
                        state + " " + lat + " " + lon + "<br><br>";

    address.setAttribute('data-name', name);
    address.setAttribute('data-description', description);
    address.setAttribute('data-street', street);
    address.setAttribute('data-zip', zip);
    address.setAttribute('data-city', city);
    address.setAttribute('data-state', state);
    address.setAttribute('data-lat', lat);
    address.setAttribute('data-lon', lon);

    /*
    let name = address.getAttribute('data-name');
    let description = address.getAttribute('data-description');
    let street = address.getAttribute('data-street');
    let zip = address.getAttribute('data-zip');
    let city = address.getAttribute('data-city');
    let state = address.getAttribute('data-state');
    let lat = address.getAttribute('data-lat');
    let lon = address.getAttribute('data-lon');
    */

    // the anonymous function acts as a wrapper.
    // this enables the expected delay in the execution of the function until the event.
    address.addEventListener("click", function(){
        addToDuValues(address.getAttribute('data-name'),
        address.getAttribute('data-description'),
        address.getAttribute('data-street'),
        address.getAttribute('data-zip'),
        address.getAttribute('data-city'),
        address.getAttribute('data-state'),
        address.getAttribute('data-lat'),
        address.getAttribute('data-lon'));
        addToDu();

        // both variables are sharing the same object.
        // it's a reference, any changes made in selectedAddress applies to address too.
        selectedAddress = address;
    });
    

    document.getElementById("main-map-address-container-id").appendChild(address);
}

function addToDuValues(name,description,street,zip,city,state,lat,lon) {
    document.getElementById("du-name-id").value = name;
    document.getElementById("du-description-id").value = description;
    document.getElementById("du-street-id").value = street;
    document.getElementById("du-zip-id").value = zip;
    document.getElementById("du-city-id").value = city;
    document.getElementById("du-state-id").value = state;
    document.getElementById("du-lat-id").value = lat;
    document.getElementById("du-lon-id").value = lon;
}

function addToDu() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "";
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

function addToMain() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}
