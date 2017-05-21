var config = {
  apiKey: "AIzaSyAD6jEZFv56owk4zrJ34JjI7sjHIKTmcfk",
  databaseURL: "https://dokidokitraveler-1495041989137.firebaseio.com/",
}
firebase.initializeApp(config);
var database = firebase.database();
var postsRef = database.ref("Messages");
