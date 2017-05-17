$(function() {
    let output = $('#output');

    function handleOrientation(event) {
        let alpha = event.alpha

        let text = "alpha: " + z + "\n";
        output.text(text);
    }

    window.addEventListener('deviceorientation', handleOrientation);
});
