if (document.URL == "file:///Users/zprime/HCI_DP/Project/photo_window.html") {
	$("#photo-btn").css("background-color", "#0176C3");
} else if (document.URL == "file:///Users/zprime/HCI_DP/Project/message_list.html") {
	$("#message-btn").css("background-color", "#0176C3");
}

$(function() {
    $('#upload-btn').click(function() {
    	$("#photo-btn").css("background-color", "#2196F3");
    	$("#upload-btn").css("background-color", "#0176C3");
    	$("#message-btn").css("background-color", "#2196F3");
        $('#input_upload').click();
    });

    $('#input_upload').change(uploadPhoto);
});

messageRef.on("value", function(newdata) {
	var messages_raw = newdata.val();
	var unread_count = 0;
	// count unread message
	Object.keys(messages_raw).map(function (key) {
		var message = messages_raw[key];
		if (message.unread == true) {
			unread_count += 1;
		}
		return 0;
	});
	console.log("Unread Messages: ", unread_count);
	// display badge on message button
    if (unread_count != 0) {
        $("#badge").remove();
        $("#message-btn").append(`<div id="badge"> ${unread_count} </div>`);
    }
});