// empty object
let marker = {};

let mapOptions = {
    center:[52.5187,13.3855],
    zoom:10
}

let map = new L.map('main-map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


function initMapMarker(lat, lon) {
    let key = lat + '_' + lon;
    marker[key] = new L.Marker([lat, lon]);
    marker[key].addTo(map);
}

function deleteMapMarker(lat, lon) {
    /*
    if (marker[key]) {
        map.removeLayer(marker[key]);
        console.log("GELÖSCHT!");
    }
    */

    let key = lat + '_' + lon;

    map.removeLayer(marker[key]);
}
