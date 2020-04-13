const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var db = firebase.firestore();
var todoList = [];
db.collection("products")
  .get()
  .then(snap => {
    todoList = snap.docs;
    render();
  });
function render() {
  var htmlList = document.getElementById("todo-list");
  var content = todoList.map(function(item) {
    var data = item.data();
    return "<li>" + data.content + "</li>";
  });
  htmlList.innerHTML = content.join("");
}
