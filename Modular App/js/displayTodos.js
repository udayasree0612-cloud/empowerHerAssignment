export function displayTodos(data) {
  let container = document.getElementById("todo-container");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.margin = "8px";
    div.style.padding = "10px";

    div.innerHTML = `
      <p><b>ID:</b> ${todo.id}</p>
      <p><b>Title:</b> ${todo.title}</p>
      <p><b>Status:</b> ${todo.completed ? "Completed" : "Pending"}</p>
    `;

    container.append(div);
  });
}
