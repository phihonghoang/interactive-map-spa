// empty object
let marker = {};

// lat and lon of the last added address.
let lastAddedLat;
let lastAddedLon;


let mapOptions = {
    center: [52.5187, 13.3855],
    zoom: 10
}


let map = new L.map('main-map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


function initMapMarker(lat, lon) {
    let key = lat + '_' + lon;

    marker[key] = new L.Marker([lat, lon]);
    marker[key].addTo(map);


    lastAddedLat = lat;
    lastAddedLon = lon;
}


function deleteMapMarker(lat, lon) {
    let key = lat + '_' + lon;
    map.removeLayer(marker[key]);
    delete marker[key];
}


function reqGeoCor(street, zip, city, state) {

    let address = street + ", " + zip + " " + city + ", " + state;
    let nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(nominatimUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let lat = data[0].lat;
                let lon = data[0].lon;

                reqAddress = true;
                initMapMarker(lat, lon);
            } else {
                reqAddress = false;
                alert("No results found.")
                console.error("No results found.");
            }
        })
        .catch(error => {
            console.error("Error in geocoding:", error);
        });
}
