var image = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function(){
	$('#send_msg').animate({width:'80%'}, 20000, 'linear');

	$(".small_images").on("click", function(){
		var image_src = $(this).attr('src');
		var main_image_src = $("#main_photo").attr('src');
		$(this).attr('src', main_image_src);
		$("#main_photo").attr('src', image_src);
	});	

	var QueryString = function () {
	  // This function is anonymous, is executed immediately and 
	  // the return value is assigned to QueryString!
	  var query_string = {};
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	        // If first entry with this name
	    if (typeof query_string[pair[0]] === "undefined") {
	      query_string[pair[0]] = decodeURIComponent(pair[1]);
	        // If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
	      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
	      query_string[pair[0]] = arr;
	        // If third or later entry with this name
	    } else {
	      query_string[pair[0]].push(decodeURIComponent(pair[1]));
	    }
	  } 
	  return query_string;
	}();
	
	photosRef.child("/"+QueryString.key+"/url").once("value").then(function(photo){
		$("#main_photo").attr('src', photo.val());
	});

    photosRef.orderByChild("user").equalTo("B").once("value", function(backgrounds) {
        backgrounds.forEach(function(background){
            image.push(background.val().url);
        }); 
        image = shuffle(image);
        for(var i = 1; i < 4; i++){
            $(`#small_image_${i}`).attr('src', image[i-1]);
        };
    });	
});
