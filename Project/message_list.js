'use strict';


var config = {
  apiKey: "AIzaSyAuqcDhQe17C-Uw0xEK9b74Wr50ZfYANDk",
  databaseURL: "https://message-test-38e7e.firebaseio.com/"
}
firebase.initializeApp(config);
var database = firebase.database()
var postsRef = database.ref("Messages")

/*
postsRef.on("value", function(newData) {
  var comments = newData.val()
  var childHTMLs = Object.keys(comments).map(function(key) {
    var contents = data.like
    return `
      <div class="post">
        <span><b>${data.date}</b><span>
        <span>${data.contents}</span>
      </div>
    `
  })
  var childHTML = childHTMLs.join("")
  $("#posts").empty()
  $("#posts").append(childHTML)
})
*/


/*

var BuildHTML = function () {
  function BuildHTML() {
    _classCallCheck(this, BuildHTML);

    this.messageWrapper = 'message-wrapper';
    this.circleWrapper = 'circle-wrapper';
    this.textWrapper = 'text-wrapper';

    this.meClass = 'me';
    this.themClass = 'them';
  }

  BuildHTML.prototype._build = function _build(text, who) {
    return '<div class="' + this.messageWrapper + ' ' + this[who + 'Class'] + '">\n              <div class="' + this.circleWrapper + ' animated bounceIn"></div>\n              <div class="' + this.textWrapper + '">...</div>\n            </div>';
  };

  BuildHTML.prototype.me = function me(text) {
    return this._build(text, 'me');
  };

  BuildHTML.prototype.them = function them(text) {
    return this._build(text, 'them');
  };

  return BuildHTML;
}();

*/

  ;
});