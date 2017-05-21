const GeoInformationUpdateDuration = 1000;
const UnitAngle = 30;
const AngleIndexLimit = 360 / UnitAngle;

var photos = [];
var output = $('#output');
var gotCurrentPosition = false;
var prevAngleIndex = -1;

var photosRef;

$(function() {
    initializeFirebase().then(function() {
        calculateGeoInformation();
    });

    window.addEventListener('deviceorientation', handleOrientation);
});

function initializeFirebase() {
    firebase.initializeApp({
        apiKey: "AIzaSyAD6jEZFv56owk4zrJ34JjI7sjHIKTmcfk",
        authDomain: "dokidokitraveler-1495041989137.firebaseapp.com",
        databaseURL: "https://dokidokitraveler-1495041989137.firebaseio.com",
        projectId: "dokidokitraveler-1495041989137",
        storageBucket: "dokidokitraveler-1495041989137.appspot.com",
        messagingSenderId: "586932970026"
    });

    photosRef = firebase.database().ref("photos");
    return photosRef.once('value').then(function(data) {
        photos = data.val();
        console.log(photos);
    });
}

function calculateGeoInformation() {
    navigator.geolocation.watchPosition(function(position) {
        var currentCoords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 

        photos.forEach(function(photo, i) {
            var photoCoords = new google.maps.LatLng(photo.position);
            photo.angle = google.maps.geometry.spherical.computeHeading(currentCoords, photoCoords); // degree
            photo.angleIndex = photo.angle / UnitAngle;
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

    var alpha = event.alpha;
    if (alpha < 0) alpha += 360; // assure alpha > 0
    var angleIndex = Math.floor(alpha / UnitAngle);

    print("angleIndex :" + angleIndex);

    var leftCol = [];
    var midCol = [];
    var rightCol = [];

    photos.forEach(function(photo, i) {
        if (photo.angleIndex == (angleIndex-1 + AngleIndexLimit) % AngleIndexLimit) {
            leftCol.push(photo);
        }
        else if (photo.angleIndex == angleIndex) {
            midCol.push(photo);
        }
        else if (photo.angleIndex == (angleIndex+1) % AngleIndexLimit) {
            rightCol.push(photo);
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

    if (angleIndex != prevAngleIndex) { // time to move the photo window
        //print("30' rotated");
        //
        // add additional column
        // move whole photos
        // remove invisible column
    }

    prevAngleIndex = angleIndex;
}
