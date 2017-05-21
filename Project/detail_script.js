$(document).ready(function(){
	$('#send_msg').animate({width:'80%'}, 20000, 'linear');

	$(".small_images").on("click", function(){
		var image_src = $(this).attr('src');
		var main_image_src = $("#main_photo").attr('src');
		$(this).attr('src', main_image_src);
		$("#main_photo").attr('src', image_src);
	});	
});