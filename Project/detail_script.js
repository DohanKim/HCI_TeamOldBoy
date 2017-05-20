var myTravel = {
	bakery: {
		center: {lat: 36.370320, lng: 127.363609},
		numPhoto: 1
	},
	library: {
		center: {lat: 36.369659, lng: 127.362558},
		numPhoto: 2
	},
  head: {
	center: {lat: 36.370554, lng: 127.361323},
	numPhoto: 1
  },
  subway: {
	center: {lat: 36.371468, lng: 127.361893},
	numPhoto: 1
  }
};

var hisTravel = {
  sportscomplex	: {
	center: {lat: 36.372375, lng: 127.361609},
	numPhoto: 1
  },
  library: {
	center: {lat: 36.369529, lng: 127.362612},
	numPhoto: 1
  },
  e6: {
	center: {lat: 36.369815, lng: 127.364389},
	numPhoto: 1
  },
  K1: {
	center: {lat: 36.368506, lng: 127.363905},
	numPhoto: 1
  }
};

function initMap() {
  // Create the map.
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: {lat: 36.370536, lng: 127.362590},
		mapTypeId: 'roadmap',
		draggable: false, 
		zoomControl: false, 
		scrollwheel: false, 
		disableDoubleClickZoom: true,
		streetViewControl: false,
		mapTypeControl: false
	});

	google.maps.event.addDomListener(window, "resize", function() {
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center); 
	});


  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var point in myTravel) {
	// Add the circle for this city to the map.
	var cityCircle = new google.maps.Circle({
	  strokeColor: '#0000FF',
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: '#0000FF',
	  fillOpacity: 0.35,
	  map: map,
	  center: myTravel[point].center,
	  radius: myTravel[point].numPhoto * 35
	});
	var marker = new google.maps.Marker({
		position: myTravel[point].center,
		map: map,
		label: 'I'
	});
  }
  for (var point in hisTravel) {
	// Add the circle for this city to the map.
	var cityCircle = new google.maps.Circle({
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.8,
	  strokeWeight: 2,
	  fillColor: '#FF0000',
	  fillOpacity: 0.35,
	  map: map,
	  center: hisTravel[point].center,
	  radius: hisTravel[point].numPhoto * 35
	});
	var marker = new google.maps.Marker({
		position: hisTravel[point].center,
		map: map,
		label: 'Y'
	});
  }
};

$(document).ready(function(){
	var flag = 1;
	var dynamic_topbutton = setInterval(function ( ) { 
		
		var widthBack = $("#back").width() / $("#back").parent().width() * 100;
		
		if(widthBack < 50 && flag == 1){
			var back_color = $("#back").css("background-color");
			$("#back").css("background-color", $("#send_msg").css("background-color"));
			$("#send_msg").css("background-color", back_color);
			flag += 1;
		}
		
		if(widthBack < 30){
			clearInterval(dynamic_topbutton);    
		}
		widthBack -= 2;
		$('#back').width(widthBack+'%');
	}, 500);

	$(".small_images").on("click", function(){
		console.log("clicked");
		var image_src = $(this).attr('src');
		var main_image_src = $("#main_photo").attr('src');
		$(this).attr('src', main_image_src);
		$("#main_photo").attr('src', image_src);
	});	



});