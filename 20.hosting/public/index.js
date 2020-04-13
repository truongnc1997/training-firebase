var str = "todo-list";
var dataStr = localStorage.getItem(str);
var todoList;
if (dataStr) {
  todoList = JSON.parse(dataStr);
} else {
  todoList = [];
}
var addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addItem);
function addItem() {
  var input = document.getElementById("new-item");
  var newItem = input.value;
  todoList.push(newItem);
  render();
  input.value = "";
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}
function render() {
  var htmlList = document.getElementById("todo-list");
  var content = todoList.map(function(item) {
    return "<li>" + item + "</li>";
  });
  htmlList.innerHTML = content.join("");
}
render();
