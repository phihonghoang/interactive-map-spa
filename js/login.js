
let userIsLoggedIn = false;

// global variable
let hkw1, hkw2, hkw3;

const admin = {
    username: "admin",
    password: "password",
    role: "admin"
};
const normalo = {
    username: "normalo",
    password: "password",
    role: "non-admin"
};


const initScreensAddEventHandlers = function () {
    if (userIsLoggedIn === false) {
        showLogin();
    } else {
        hideLogin();
    }

    hardCodedAddresses();
    // load map markers after values for hkw1,hkw2 and hkw3 are set.
    initMapMarkers();

    // checkLogin without () = function is only called when the event takes place.
    document.getElementById("loginForm").onsubmit = checkLogin;
}


function checkLogin(e) {

    // prevents the default form submission behavior.
    e.preventDefault();

    const loginEntered = document.getElementById("login-username-id").value;
    const passwordEntered = document.getElementById("login-password-id").value;

    if (admin.username === loginEntered && admin.password == passwordEntered) {
        userIsLoggedIn = true
        hideLoginAdmin();
    } else {

    if (normalo.username === loginEntered && normalo.password == passwordEntered) {
	userIsLoggedIn=true
	hideLoginNormalo();
     } else {
          alert("Incorrect username or password!")
          userIsLoggedIn = false;
    }
  }
}

function showLogin() {
    
    document.getElementById("login-container-id").style.display = "";
    document.getElementById("main-container-id").style.display = "none";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
    
}

function hideLoginAdmin() {
    document.getElementById("login-container-id").style.display = "none";
    document.getElementById("main-container-id").style.display = "";
    document.getElementById("add-container-id").style.display = "none";
    document.getElementById("delete-update-container-id").style.display = "none";
}
function hideLoginNormalo() {
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
        state: "Berlin",
        lat: "52.51071",
        lon: "13.42083",
    };

    hkw2 = {
        name: "Heizkraftwerk",
        description: "",
        street: "Allee der Kosmonauten 26b",
        zip: "12681",
        city: "Berlin",
        state: "Berlin",
        lat: "52.52580",
        lon: "13.52354",
    };

    hkw3 = {
        name: "Heizkraftwerk",
        description: "",
        street: "Forckenbeckstraße 3-5",
        zip: "14199",
        city: "Berlin",
        state: "Berlin",
        lat: "52.48174",
        lon: "13.29249",
    };

    let hkwList = [hkw1, hkw2, hkw3];
    
    hkwList.forEach((value) => {
        /*
        let hca = document.createElement("div");
        hca.innerHTML = value.name + " " + value.description + " " + value.street + " " + value.zip + " " + value.city + " " + value.state + "<br><br>";

        hca.addEventListener("click", function(){
            addToDu(value.name,value.description,value.street,value.zip,value.city,value.state,value.lat,value.lon);
        });

        document.getElementById("main-map-address-container-id").appendChild(hca);
        */

        addAddressToContainer(value.name,value.description,value.street,value.zip,value.city,value.state,value.lat,value.lon);
    });
}



window.onload = initScreensAddEventHandlers; 



