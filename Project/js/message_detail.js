var flag_bigger = false;
var flag_smaller = false;

// Send Data to firebase by click

$('#send').on('click', function (e){
    var input = $("#inputbox").val()
    messageRef.push({
        input: input,
        hour : (new Date()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
		unread: true
	});
    $("#inputbox").val("");
});


// Send Data to firebase by press 'enter key'
function enterkey() {
	if (window.event.keyCode == 13) {
		var input = $("#inputbox").val();
		messageRef.push({
			input: input,
			hour : (new Date()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
			unread: true
		});
		$("#inputbox").val("");
	}
}




messageRef.on("value", function(newData) {
	var input = newData.val();
	var childHTMLs = Object.keys(input).map(function(key) {
		var data = input[key];
		var newMsgRef = firebase.database().ref("messages/" + key);
		// update the messge status to "read"
		newMsgRef.update({
			"unread": false
		});
		return `
			<div class="message">
				<div class = "message_contents"><b>${data.input}</b><div>
				<div class = "message_time"> <span>${data.hour}</span>
			</div>
			`
	});
	var childHTML = childHTMLs.join("");
	$("#content").empty();
	$("#content").append(childHTML);
});



//Make a setInterval to check the postion periodically

var myVar = setInterval(myTimer, 10000);



var lat1 = 0;
var lat2 = 0;
var lon1 = 0;
var lon2 = 0;


// Radian Definition




function myTimer() {
    
    
    
    //from w3school
    function getLocation() {
        navigator.geolocation.getCurrentPosition(getPosition);
}
    function toRadians(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}    
           
    function getPosition(position) {
    lat2 = position.coords.latitude;
    lon2 = position.coords.longitude;
    }
    
    
    getLocation();
    
    // for the first iteration
    if (lon1 == 0 ){
        lon1 = lon2
    }
    
    if (lat1 == 0 ){
        lat1 = lat2
    } 
    
    
    //Calculate the distance between two area
    //http://www.movable-type.co.uk/scripts/latlong.html
    var R = 6371; // metres
    var pi1 = toRadians(lat1);
    var pi2 = toRadians(lat2);
    var delpi = toRadians((lat2-lat1));
    var dellambda = toRadians((lon2-lon1));
    var a = Math.sin(delpi/2) * Math.sin(delpi/2) +
            Math.cos(pi1) * Math.cos(pi2) *
            Math.sin(dellambda/2) * Math.sin(dellambda/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    
    console.log('distance: ', d);
    // update the flag
    if (d <0.005 && flag_smaller == false){
        flag_smaller = true;
        flag_bigger = false;
    }
    
    
    if (d > 0.005 && flag_bigger == false){
        flag_bigger = true;
        flag_smaller = false;
        
    }
    
    
    // Change the size of the text
    // Use jqeury 
    
    if (flag_bigger == true){    
        $(".message_contents").animate({"font-size":"30px"});
        $(".message_time").animate({"font-size":"20px"});
        flag_bigger= false;
    }
    
    
    if (flag_smaller == true){
        $(".message_contents").animate({"font-size":"20px"});
        $(".message_time").animate({"font-size":"15px"});
        flag_smaller = false;
    }
    
        
    lat1= lat2;
    lon1= lon2;
        
        
    
}









