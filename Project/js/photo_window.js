const GeoInformationUpdateDuration = 1000;
const UnitAngle = 30;
const AngleIndexLimit = 360 / UnitAngle;
const LinesPerColumn = 3;

var photos = [];
var gotCurrentPosition = false;
var prevAngleIndex = -1;
var currentPosition;
var flag_bigger = false;
var pre_position;

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
		controlUploadSize(position);
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
        maximumAge        : 0, 
        timeout           : 1000,
    });
}

function handleOrientation(event) {
    if (gotCurrentPosition == false) return;

    var alpha = (360 - event.alpha) % 360;
    var angleIndex = Math.floor(alpha / UnitAngle);

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
            if (leftCol[i]) $('#column1').append($('<a href="./photo_detail.html"> <div class="image"  />').css('background-image', 'url(' + leftCol[i].url + ')'));
            if (midCol[i]) $('#column2').append($('<a href="./photo_detail.html"> <div class="image" />').css('background-image', 'url(' + midCol[i].url + ')'));
            if (rightCol[i]) $('#column3').append($('<a href="./photo_detail.html"> <div class="image" />').css('background-image', 'url(' + rightCol[i].url + ')'));
        }
    }

    prevAngleIndex = angleIndex;
}

function getDistance(position1, position2) {
  function toRadians(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
  }
  var lat1 = position1.coords.latitude
  var lon1 = position1.coords.longitude
  var lat2 = position2.coords.latitude
  var lon2 = position2.coords.longitude
  
  //Calculate the distance between two area
  //http://www.movable-type.co.uk/scripts/latlong.html
  var R = 6371; // metres
  var phi1 = toRadians(lat1);
  var phi2 = toRadians(lat2);
  var delta_phi = toRadians((lat2-lat1));
  var delta_lambda = toRadians((lon2-lon1));
  var a = Math.sin(delta_phi/2) * Math.sin(delta_phi/2) +
          Math.cos(phi1) * Math.cos(phi2) *
          Math.sin(delta_lambda/2) * Math.sin(delta_lambda/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  console.log(d);
  return d;
}

function controlUploadSize(position) {
	var current_position = position;

	// for the first iteration
	if (typeof pre_position === "undefined") {
	  pre_position = current_position;  
	}

	var current_lat = current_position.coords.latitude;
	var current_lng = current_position.coords.longitude;
	var pre_lat = pre_position.coords.latitude;
	var pre_lng = pre_position.coords.longitude;

	console.log(pre_lat, pre_lng);
	console.log(current_lat, current_lng);

	var d = getDistance(current_position, pre_position);
	if (d != 0) {
	  // update the flag
	  if (d > 0.005 && flag_bigger == true){
		  flag_bigger = false;
	  }

	  if (d < 0.005 && flag_bigger == false){
		  flag_bigger = true;
	  }

	  // Change the size of the text
	  if (flag_bigger == true){    
		  $("#upload-btn").animate({
			height: "90px"
		  });
		  flag_bigger= false;
	  } else {
		  $("#upload-btn").animate({
			height: "45px"
		  });
		  flag_bigger = true;
	  }
	}
	pre_position = current_position; 
}
