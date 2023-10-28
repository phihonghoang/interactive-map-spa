let mapOptions = {
    center:[52.5187,13.3855],
    zoom:10
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker1 = new L.Marker([52.51071,13.42083]);
let marker2 = new L.Marker([52.52580, 13.52354]);
let marker3 = new L.Marker([52.48174, 13.29249]);
marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);