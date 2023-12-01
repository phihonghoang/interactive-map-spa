let mapOptions = {
    center:[52.5187,13.3855],
    zoom:10
}

let map = new L.map('main-map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


function initMapMarkers() {
    let marker1 = new L.Marker([hkw1.lat, hkw1.lon]);
    let marker2 = new L.Marker([hkw2.lat, hkw2.lon]);
    let marker3 = new L.Marker([hkw3.lat, hkw3.lon]);

    marker1.addTo(map);
    marker2.addTo(map);
    marker3.addTo(map);
}