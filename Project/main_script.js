const GeoInformationUpdateDuration = 1000;
const UnitAngle = 30;

var photos = [];
var output = $('#output');
var gotCurrentPosition = false;
var prevAlpha = -1;

$(function() {
    //fake data
    //photos: {url, position: {lat, lng}, angle}
    for (var i = 0; i < 10; i++) {
        photos[i] = {
            url: 'https://nationalzoo.si.edu/sites/default/files/styles/slide_small_scale/public/newsroom/0038_nz_panda_0823_c_2014_david_galen.jpg?itok=vejfEI2s', 
            position: {lat: 36.3700567 + Math.random(), lng: 127.35980400000001 + Math.random()}, 
        };
    }
    console.log(photos);

    calculateGeoInformation();

    window.addEventListener('deviceorientation', handleOrientation);
});

function calculateGeoInformation() {
    navigator.geolocation.watchPosition(function(position) {
        var currentCoords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 

        photos.forEach(function(photo, i) {
            var photoCoords = new google.maps.LatLng(photo.position);
            photo.angle = google.maps.geometry.spherical.computeHeading(currentCoords, photoCoords); // degree
            photo.distance = google.maps.geometry.spherical.computeDistanceBetween(currentCoords, photoCoords); // meter
        })

        gotCurrentPosition = true;
    }, function(err) {
        print(err.message);
        console.log(err);
    });
}

function print(a) {
    output.text(output.text() + '\n' + a);
}

function handleOrientation(event) {
    if (gotCurrentPosition == false) return;

    print("prev: " + prevAlpha);
    var alpha = event.alpha;
    
    print(alpha);
    if (alpha < 0) alpha += 360; // assure alpha > 0

    var leftCol = [];
    var midCol = [];
    var rightCol = [];

    photos.forEach(function(photo, i) {
        var angleDifference = photo.angle - alpha;
        if (Math.abs(angleDifference) <= UnitAngle * 1.5) {
            if (angleDifference < UnitAngle * -0.5) {
                leftCol.push(photo);
            }
            else if (angleDifference < UnitAngle * 0.5) {
                midCol.push(photo);
            }
            else {
                rightCol.push(photo);
            }
        }
    });

    function compareByDistance(x, y) {
        return x.distance - y.distance;
    }
    leftCol.sort(compareByDistance);
    midCol.sort(compareByDistance);
    rightCol.sort(compareByDistance);

    console.log(leftCol);
    console.log(midCol);
    console.log(rightCol);
    console.log("----------------------");

    prevAlpha = alpha;    
}
