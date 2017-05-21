function activateOverlay() {
  // show overlay
  mui.overlay('on');
}

$(document).on("click", "img", function() {
  location="./detailview.html";
});

$(document).on("click", "#upload", function() {
});

function growUpload() {
  height = 80;
  setInterval(function() {
    var width = $("#upload-btn").css("width");
    var height = $("#upload-btn").css("height");
    var other_width = $("#photo-btn").css("width");
  
    width = width.replace('px', '');
    height = height.replace('px', '');
    other_width = other_width.replace('px', '');
    heigth_num = Number(height) + 10;
    width_num = Number(width) + 4;
    num = Number(other_width) - 2;
    if (heigth_num < 120) {
      height = heigth_num.toString();
      width = width_num.toString();
      other_width = num.toString();
    $("#upload-btn").css("width", width+"px");
    $("#upload-btn").css("height", height+"px");
    $("#photo-btn").css("width", other_width+"px");
    $("#message-btn").css("width", other_width+"px");
    }
  }, 100);
}
setTimeout(growUpload, 5000);