// empty object
let marker = {};

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
}

function deleteMapMarker(lat, lon) {
    let key = lat + '_' + lon;

    map.removeLayer(marker[key]);
}

function reqGeoCor(street, zip, city, state) {

    //var adresse = "Rupprechtstraße 10A, 10317 Berlin, Germany";
    let address = street + ", " + zip + " " + city + ", " + state;
    let nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    // Führe die Anfrage durch
    fetch(nominatimUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Extrahiere Längen- und Breitengrade aus der Antwort
                let lat = data[0].lat;
                let lon = data[0].lon;

                // Verwende die Koordinaten, wie gewünscht
                console.log('Latitude:', lat);
                console.log('Longitude:', lon);

                initMapMarker(lat, lon);
            } else {
                console.error('Keine Ergebnisse für die Adresse gefunden.');
            }
        })
        .catch(error => {
            console.error('Fehler bei der Geokodierung:', error);
        });
}
