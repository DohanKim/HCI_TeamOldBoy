const GeoInformationUpdateDuration = 1000;
const UnitAngle = 30;
const AngleIndexLimit = 360 / UnitAngle;
const LinesPerColumn = 3;

var photos = [];
var output = $('#output');
var gotCurrentPosition = false;
var prevAngleIndex = -1;

var photosRef;
var storageRef;

$(function() {
    initializeFirebase();
    updatePhotos();

    window.addEventListener('deviceorientationabsolute', handleOrientation);

    $('#upload-btn').click(function() {
        $('#input_upload').click();
    });

    $('#input_upload').change(uploadPhoto);
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
    storageRef = firebase.storage().ref();
}

function updatePhotos() {
    return photosRef.once('value').then(function(data) {
        photos = data.val();
        console.log(photos);
        calculateGeoInformation();
    });
}

function calculateGeoInformation() {
    navigator.geolocation.watchPosition(function(position) {
        var currentCoords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 

        photos.forEach(function(photo, i) {
            var photoCoords = new google.maps.LatLng(photo.position);
            photo.angle = google.maps.geometry.spherical.computeHeading(currentCoords, photoCoords); // degree
            photo.angleIndex = Math.floor(photo.angle / UnitAngle);
            photo.distance = google.maps.geometry.spherical.computeDistanceBetween(currentCoords, photoCoords); // meter
        })

        gotCurrentPosition = true;
    }, function(err) {
        console.log(err);
    });
}

function handleOrientation(event) {
    if (gotCurrentPosition == false) return;

    var alpha = (360 - event.alpha) % 360;
    var angleIndex = Math.floor(alpha / UnitAngle);

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
        // add additional column
        // move whole photos
        // remove invisible column
        //
        $('#column1').empty();
        $('#column2').empty();
        $('#column3').empty();
        for(var i = 0; i < LinesPerColumn; i++) {
            if (leftCol[i]) $('#column1').append(`<img src="${leftCol[i].url}">`);
            if (midCol[i]) $('#column2').append(`<img src="${midCol[i].url}">`);
            if (rightCol[i]) $('#column3').append(`<img src="${rightCol[i].url}">`);
        }
    }

    prevAngleIndex = angleIndex;
}

function uploadPhoto(e) {
    var file = e.target.files[0];
    var imageRef = storageRef.child('images/' + (new Date()).getTime() + '_' + file.name);
    imageRef.put(file).then(function(snapshot) {
        var url = snapshot.downloadURL;
        navigator.geolocation.getCurrentPosition(function(pos) {
            photosRef.push({url: url, position: {lat: pos.coords.latitude, lng: pos.coords.longitude}});
        }, function(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }); 
        updatePhotos();
    });
};

// function growUpload() {
    //   height = 80;
    //   setInterval(function() {
        //     var width = $("#upload-btn").css("width");
        //     var height = $("#upload-btn").css("height");
        //     var other_width = $("#photo-btn").css("width");
        //   
        //     width = width.replace('px', '');
        //     height = height.replace('px', '');
        //     other_width = other_width.replace('px', '');
        //     heigth_num = Number(height) + 10;
        //     width_num = Number(width) + 4;
        //     num = Number(other_width) - 2;
        //     if (heigth_num < 120) {
            //       height = heigth_num.toString();
            //       width = width_num.toString();
            //       other_width = num.toString();
            //     $("#upload-btn").css("width", width+"px");
            //     $("#upload-btn").css("height", height+"px");
            //     $("#photo-btn").css("width", other_width+"px");
            //     $("#message-btn").css("width", other_width+"px");
            //     }
        //   }, 100);
    // }
// setTimeout(growUpload, 5000);
