"use strict";
const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const closeBTN = document.getSelection(".close");
const todoList = document.getElementById("todo-list");
let userName = "";
const todo = "todo";
console.log(userName);
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
let todoArr = [];
btnAdd.addEventListener("click", function (e) {
  let todoArr = localStorage.getItem("Task")
    ? JSON.parse(localStorage.getItem("Task"))
    : [];
  todoArr.push({ name: inputTask.value });
  inputTask.value = "";
  localStorage.setItem("Task", JSON.stringify(todoArr));
  rendertodoArr();
  console.log(1);
});
function rendertodoArr() {
  let todoArr = localStorage.getItem("Task")
    ? JSON.parse(localStorage.getItem("Task"))
    : [];
  var htmls = todoArr.map(function (task, id) {
    return `
    <ul id="todo-list">
    <li>
      ${task.name}
      <span class="close" onclick="deleteTask(${id})">×</span>
    </li>
    </ul>
    `;
  });
  todoList.innerHTML = htmls.join("");
}
function deleteTask(id) {
  console.log(id);
  let todoArr = localStorage.getItem("Task")
    ? JSON.parse(localStorage.getItem("Task"))
    : [];
  todoArr.splice(id, 1);
  localStorage.setItem("Task", JSON.stringify(todoArr));
  rendertodoArr();
}
