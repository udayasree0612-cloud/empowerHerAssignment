let btn = document.getElementById("addBtn");
let ul = document.querySelector("#taskList");

btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.textContent = "New Item";

    ul.appendChild(li);

    let allLi = ul.querySelectorAll("li");
    let index = allLi.length; // 1-based index

    if (index % 2 !== 0) {
        li.style.fontWeight = "bold";
        li.style.color = "blue";
    } else {
        li.style.fontStyle = "italic";
        li.style.color = "red";
    }
});