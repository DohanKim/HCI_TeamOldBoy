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

var recommend = {
	theater: {
		center: {lat:36.368938, lng:127.360841},
		numPhoto: 1
	}
}

// TODO: travel map 에 사진 정보 파베에서 받아서 moalEl 코드 작성하기!
function PutDataToMap(map, label, travel_map){
	// Construct the circle for each value in citymap.
	// Note: We scale the area of the circle based on the population.
	if(label == 'I'){
		var color = '#FF4081';
		var icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	}else if(label == 'star'){
		var icon = 'images/star.png';
		label = '';
	}else{
		var color = '#5C6BC0';
		var icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
	}
	
	for (var point in travel_map) {
	// Add the circle for this city to the map.
		new google.maps.Circle({
		  strokeColor: color,
		  strokeOpacity: 0.8,
		  strokeWeight: 2,
		  fillColor: color,
		  fillOpacity: 0.35,
		  map: map,
		  center: travel_map[point].center,
		  radius: travel_map[point].numPhoto * 35
		});

		var Marker = new google.maps.Marker({
			position: travel_map[point].center,
			map: map,
			icon: icon,
			label: label
		});

		google.maps.event.addListener(Marker, 'click', function() {
			var $modalEl = $(`
				<div id='map_pic_modal'>
					<img class="mark_main_image" style="width:100%;" src="images/IMG_8027.JPG">
					<div>
						<img class="mark_small_images" src="images/IMG_7791.JPG">
						<img class="mark_small_images" src="images/IMG_7618.JPG">
						<img class="mark_small_images" src="images/IMG_8963.JPG">
					</div>
				</div>
			`);
			mui.overlay('on', $modalEl.get(0));

			$(".mark_small_images").on("click", function(){
				var image_src = $(this).attr('src');
				var marker_main_image_src = $(".mark_main_image").attr('src');
				$(this).attr('src', marker_main_image_src);
				$(".mark_main_image").attr('src', image_src);
			});
		});
	}
};

var initMap = function() {
  // Create the map.
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: 36.370536, lng: 127.362590},
		mapTypeId: 'roadmap',  
		scrollwheel: false, 
		disableDoubleClickZoom: true,
		streetViewControl: false,
		mapTypeControl: false,
		fullscreenControl: false
	});
	
	google.maps.event.addDomListener(window, "resize", function() {
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center); 
	});

	PutDataToMap(map, 'I', myTravel);
	PutDataToMap(map, 'U', hisTravel);
	PutDataToMap(map, 'star', recommend);
};