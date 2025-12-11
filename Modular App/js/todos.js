import { displayTodos } from "./displayTodos.js";

let loggedIn = localStorage.getItem("isLoggedIn");

if (loggedIn !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

async function getTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();

  displayTodos(data.slice(0, 20)); // show first 20 todos
}

getTodos();
