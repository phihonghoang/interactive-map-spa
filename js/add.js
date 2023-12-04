
let selectedAddress;

document.getElementById("addForm").onsubmit = addUpdate;

document.getElementById("add-cancel-id").onclick = addToMain;

// adds location from input to the container.
function addUpdate(e) {

    e.preventDefault();

    let addName = document.getElementById("add-name-id").value;
    let addDescription = document.getElementById("add-description-id").value;
    let addStreet = document.getElementById("add-street-id").value;
    let addZip = document.getElementById("add-zip-id").value;
    let addCity = document.getElementById("add-city-id").value;
    let addState = document.getElementById("add-state-id").value;
    let addLat = document.getElementById("add-lat-id").value;
    let addLon = document.getElementById("add-lon-id").value;

    addAddressToContainer(addName, addDescription, addStreet, addZip, addCity, addState, addLat, addLon);
    emptyAddInputAddress();
    addToMain();
}

// creates dynamically a div-element for user-input.
// hardCodedAddresses and inputAddress are using this method.
function addAddressToContainer(name, description, street, zip, city, state, lat, lon) {

    let requestedAddress = false;

    // doesn't request for geo coordination, if lat and lon are given.
    if (lat != "" && lon != "") {
        initMapMarker(lat, lon);
        console.log("GO initMapMarker");
    } else {
        reqGeoCor(street, zip, city, state);
        console.log("GO reqGeoCor");
        requestedAddress = true;
    }


    let address = document.createElement("div");

    if (requestedAddress === true) {
        setTimeout(() => {
            address.innerHTML = name + " " + description + " " +
                street + " " + zip + " " + city + " " +
                state + " " + lastAddedLat + " " + lastAddedLon + "<br><br>";

            address.setAttribute('data-name', name);
            address.setAttribute('data-description', description);
            address.setAttribute('data-street', street);
            address.setAttribute('data-zip', zip);
            address.setAttribute('data-city', city);
            address.setAttribute('data-state', state);
            // requested geo coordinates from map.js
            address.setAttribute('data-lat', lastAddedLat);
            address.setAttribute('data-lon', lastAddedLon);
            address.setAttribute('data-lat', lastAddedLat);
            address.setAttribute('data-lon', lastAddedLon);
        }, 5000);
    } else {
        address.innerHTML = name + " " + description + " " +
            street + " " + zip + " " + city + " " +
            state + " " + lastAddedLat + " " + lastAddedLon + "<br><br>";


        address.setAttribute('data-name', name);
        address.setAttribute('data-description', description);
        address.setAttribute('data-street', street);
        address.setAttribute('data-zip', zip);
        address.setAttribute('data-city', city);
        address.setAttribute('data-state', state);
        // requested geo coordinates from map.js
        address.setAttribute('data-lat', lastAddedLat);
        address.setAttribute('data-lon', lastAddedLon);
        address.setAttribute('data-lat', lastAddedLat);
        address.setAttribute('data-lon', lastAddedLon);
    }


    // the anonymous function acts as a wrapper.
    // this enables the expected delay in the execution of the function until the event.
    address.addEventListener("click", function () {
        // Any changes
        let addressName = address.getAttribute('data-name');
        let addressDescription = address.getAttribute('data-description');
        let addressStreet = address.getAttribute('data-street');
        let addressZip = address.getAttribute('data-zip');
        let addressCity = address.getAttribute('data-city');
        let addressState = address.getAttribute('data-state');
        let addressLat = address.getAttribute('data-lat');
        let addressLon = address.getAttribute('data-lon');

        addToDuValues(addressName, addressDescription, addressStreet, addressZip, addressCity, addressState, addressLat, addressLon);
        addToDu();

        currentLat = addressLat;
        currentLon = addressLon;

        // both variables are sharing the same object.
        // it's a reference, any changes made in selectedAddress applies to address too.
        selectedAddress = address;
    });


    document.getElementById("main-map-address-container-id").appendChild(address);

}

function createAddress() {
    // parameter = name of the element to be created.
    let address = document.createElement("div");
    address.innerHTML = name + " " + description + " " +
        street + " " + zip + " " + city + " " +
        state + " " + lastAddedLat + " " + lastAddedLon + "<br><br>";

    address.setAttribute('data-name', name);
    address.setAttribute('data-description', description);
    address.setAttribute('data-street', street);
    address.setAttribute('data-zip', zip);
    address.setAttribute('data-city', city);
    address.setAttribute('data-state', state);
    // requested geo coordinates from map.js
    address.setAttribute('data-lat', lastAddedLat);
    address.setAttribute('data-lon', lastAddedLon);
}

function addToDuValues(name, description, street, zip, city, state, lat, lon) {
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

function emptyAddInputAddress() {
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
