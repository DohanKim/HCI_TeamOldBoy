// $(function() {
//     var output = $('#output');

//     function handleOrientation(event) {
//         var x = event.beta;  // In degree in the range [-180,180]
//         var y = event.gamma; // In degree in the range [-90,90]
//         var z = event.alpha;

//         var text = "";
//         text += "alpha: " + z + "\n";
//         text += "beta: " + x + "\n";
//         text += "gamma: " + y + "\n";
//         output.text(text);
//     }

//     window.addEventListener('deviceorientation', handleOrientation);
// });

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
    var height = $("#upload-btn").css("height")
    height = height.replace('px', '')
    num = Number(height) + 3;
    if (num < 93) {
      height = num.toString()
    $("#upload-btn").css("height", height+"px")
    }
  }, 200);
}
setTimeout(growUpload, 5000);