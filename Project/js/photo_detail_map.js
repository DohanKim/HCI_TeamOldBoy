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
	
	
	var point;
	var marker;
	var $modalEl;
	for (var i =0; i<travel_map.length;i++) {
	// Add the circle for this city to the map.
		point = travel_map[i];
		if (label != ''){
			// Recommend area don't need a circle.
			new google.maps.Circle({
			  strokeColor: color,
			  strokeOpacity: 0.8,
			  strokeWeight: 2,
			  fillColor: color,
			  fillOpacity: 0.35,
			  map: map,
			  center: {lat: point["lat"], lng: point["lng"]},
			  radius: point["url"].length * 20
			});
		}
		
		marker = new google.maps.Marker({
			position: {lat: point["lat"], lng: point["lng"]},
			map: map,
			icon: icon
			//label: label
		});
		listenMarker (marker, point["url"])		
	}
};

function listenMarker (marker, url)
{
   // so marker is associated with the closure created for the listenMarker function call	
	google.maps.event.addListener(marker, 'click', function() {
		$modalEl = $(`
			<div id='map_pic_modal'>
				<img class="mark_main_image" style="width:100%;" src=`+url[0]+`>
			</div>
			<div>
				<img class="mark_small_images" src/>
				<img class="mark_small_images" src/>
				<img class="mark_small_images" src/>
			</div>
		`);
		mui.overlay('on', $modalEl.get(0));
		/*
		for(var i =1;i<url.length;i++){
			$(".mark_small_images:nth-child("+i+")").attr("src", url[i]);
		}
		
		$(".mark_small_images").on("click", function(){
			var image_src = $(this).attr('src');
			var marker_main_image_src = $(".mark_main_image").attr('src');
			$(this).attr('src', marker_main_image_src);
			$(".mark_main_image").attr('src', image_src);
		});
		*/
	});
}

function store(travel_map, photo){
	var counter = 0;
	if(travel_map.length > 0){
		for(var i=0; i<travel_map.length ; i++){
			if(travel_map[i]["lat"]==photo.position.lat && travel_map[i]["lng"] == photo.position.lng){
				travel_map[i]["url"].push(photo.url);
				counter ++;
				break;
			}
		}
		if (counter ==0){
			travel_map[i] = {};
			travel_map[i]["lat"] = photo.position.lat;
			travel_map[i]["lng"] = photo.position.lng;
			travel_map[i]["url"] = [photo.url];
		}
	}else{
		travel_map[0] = {};
		travel_map[0]["lat"] = photo.position.lat;
		travel_map[0]["lng"] = photo.position.lng;
		travel_map[0]["url"] = [photo.url];
	}
}

var myTravel = [];
var hisTravel = [];
var recommend = [];

$(function(){
	photosRef.once("value").then(function(photos){
		// Sync firebase photo data to each list.
		photos.forEach(function(photo_with_key){
			var photo = photo_with_key.val();
			var counter;
			if(photo.user == 'I'){
				store(myTravel, photo);
			}else if(photo.user == 'U'){
				store(hisTravel, photo)
			}else if(photo.user == 'R'){
				store(recommend, photo)
			}
		});
		
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
		
		PutDataToMap(map, 'U', hisTravel);
		PutDataToMap(map, 'I', myTravel);
		PutDataToMap(map, 'star', recommend);
	});
});

