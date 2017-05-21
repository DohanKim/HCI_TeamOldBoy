const GeoInformationUpdateDuration = 1000;
const UnitAngle = 30;
const AngleIndexLimit = 360 / UnitAngle;
const LinesPerColumn = 3;

var photos = [];
var gotCurrentPosition = false;
var prevAngleIndex = -1;
var currentPosition;

$(function() {
    updatePhotos();

    window.addEventListener('deviceorientationabsolute', handleOrientation);
});

function updatePhotos() {
    return photosRef.once('value').then(function(data) {
        photos = data.val();
        console.log(photos);
        calculateGeoInformation();
    });
}

function calculateGeoInformation() {
    navigator.geolocation.watchPosition(function(position) {
        currentPosition = position;

        var currentCoords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 

        for (var key in photos) {
            if (photos.hasOwnProperty(key)) {
                var photo = photos[key];
                var photoCoords = new google.maps.LatLng(photo.position);
                photo.angle = (google.maps.geometry.spherical.computeHeading(currentCoords, photoCoords) + 360) % 360; // degree
                photo.angleIndex = Math.floor(photo.angle / UnitAngle);
                photo.distance = google.maps.geometry.spherical.computeDistanceBetween(currentCoords, photoCoords); // meter
            }
        }

        gotCurrentPosition = true;
    }, function(err) {
        console.log(err);
    }, {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 10000,
    });
}

function handleOrientation(event) {
    if (gotCurrentPosition == false) return;

    var alpha = (360 - event.alpha) % 360;
    var angleIndex = Math.floor(alpha / UnitAngle);

    angleIndex = 6;

    var leftCol = [];
    var midCol = [];
    var rightCol = [];

    for (var key in photos) {
        if (photos.hasOwnProperty(key)) {
            var photo = photos[key];
            if (photo.angleIndex == (angleIndex-1 + AngleIndexLimit) % AngleIndexLimit) {
                leftCol.push(photo);
            }
            else if (photo.angleIndex == angleIndex) {
                midCol.push(photo);
            }
            else if (photo.angleIndex == (angleIndex+1) % AngleIndexLimit) {
                rightCol.push(photo);
            }
        }
    }

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
            if (leftCol[i]) $('#column1').append($('<div class="image" />').css('background-image', 'url(' + leftCol[i].url + ')'));
            if (midCol[i]) $('#column2').append($('<div class="image" />').css('background-image', 'url(' + midCol[i].url + ')'));
            if (rightCol[i]) $('#column3').append($('<div class="image" />').css('background-image', 'url(' + rightCol[i].url + ')'));
        }
    }

    prevAngleIndex = angleIndex;
}

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
