let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task + " ";

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    let compBtn = document.createElement("button");
    compBtn.textContent = "Complete";

    li.appendChild(compBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    compBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
});