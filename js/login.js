
let userIsLoggedIn = false;
let normaloLoggedIn = false;

// global variable
let hkw1, hkw2, hkw3;

const admin = {
    username: "admin",
    password: "password",
    role: "admin",
};

const normalo = {
    username: "normalo",
    password: "password",
    role: "guest",
};


const initScreensAddEventHandlers = function () {
    if (userIsLoggedIn === false) {
        showLogin();
    } else {
        hideLogin();
    }

    hardCodedAddresses();

    // checkLogin without () = function is only called when the event takes place.
    document.getElementById("loginForm").onsubmit = checkLogin;
}


function checkLogin(e) {

    // prevents the default form submission behavior.
    e.preventDefault();

    const loginEntered = document.getElementById("login-username-id").value;
    const passwordEntered = document.getElementById("login-password-id").value;

    if (admin.username === loginEntered && admin.password == passwordEntered) {

        userIsLoggedIn = true;
        normaloLoggedIn = false;
        hideLogin();
        document.getElementById("main-add-id").style.display = "";
    } else if ((normalo.username === loginEntered && normalo.password == passwordEntered)){

        userIsLoggedIn = true;
        normaloLoggedIn = true;
        hideLogin();
        document.getElementById("main-add-id").style.display = "none";
    } else {

        userIsLoggedIn = false;
        alert("Incorrect username or password!")
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

function hardCodedAddresses() {
    hkw1 = {
        name: "Heizkraftwerk",
        description: "",
        street: "Köpenicker Str. 60",
        zip: "10179",
        city: "Berlin",
        state: "Germany",
        lat: 52.51071,
        lon: 13.42083
    };

    hkw2 = {
        name: "Heizkraftwerk",
        description: "",
        street: "Allee der Kosmonauten 26b",
        zip: 12681,
        city: "Berlin",
        state: "Germany",
        lat: 52.52580,
        lon: 13.52354
    };

    hkw3 = {
        name: "Heizkraftwerk",
        description: "",
        street: "Forckenbeckstraße 3-5",
        zip: 14199,
        city: "Berlin",
        state: "Germany",
        lat: 52.48174,
        lon: 13.29249
    };

    let hkwList = [hkw1, hkw2, hkw3];
    
    hkwList.forEach((value) => {
        initMapMarker(value.lat, value.lon);
        addAddressToContainer(value.name,value.description,value.street,value.zip,value.city,value.state,value.lat,value.lon);
    });
}

window.onload = initScreensAddEventHandlers; 



