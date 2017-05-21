

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