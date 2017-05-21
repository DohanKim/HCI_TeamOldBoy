var storageRef;
var photosRef;

initializeFirebase();

$(function() {
    $('#footer').load('footer.html');

    $('#upload-btn').click(function() {
        $('#input_upload').click();
    });

    $('#input_upload').change(uploadPhoto);
});

function initializeFirebase() {
    firebase.initializeApp({
        apiKey: "AIzaSyAD6jEZFv56owk4zrJ34JjI7sjHIKTmcfk",
        authDomain: "dokidokitraveler-1495041989137.firebaseapp.com",
        databaseURL: "https://dokidokitraveler-1495041989137.firebaseio.com",
        projectId: "dokidokitraveler-1495041989137",
        storageBucket: "dokidokitraveler-1495041989137.appspot.com",
        messagingSenderId: "586932970026"
    });

    photosRef = firebase.database().ref("photos");
    storageRef = firebase.storage().ref();
}

function uploadPhoto(e) {
    var file = e.target.files[0];
    var imageRef = storageRef.child('images/' + (new Date()).getTime() + '_' + file.name);
    imageRef.put(file).then(function(snapshot) {
        var url = snapshot.downloadURL;
        photosRef.push({url: url, position: {lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude}}).then(() => alert("uploaded"));
        updatePhotos();
    });
};
