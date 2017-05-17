$(function() {
    var output = $('#output');

    function handleOrientation(event) {
        var x = event.beta;  // In degree in the range [-180,180]
        var y = event.gamma; // In degree in the range [-90,90]
        var z = event.alpha;

        var text = "";
        text += "alpha: " + z + "\n";
        text += "beta: " + x + "\n";
        text += "gamma: " + y + "\n";
        output.text(text);
    }

    window.addEventListener('deviceorientation', handleOrientation);
});
