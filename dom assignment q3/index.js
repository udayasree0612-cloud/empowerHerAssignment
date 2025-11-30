let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let box = document.getElementById("box");

document.getElementById("bgBtn").addEventListener("click", function () {
    let color = colorInput.value.trim();

    // Validate color
    let tester = document.createElement("div");
    tester.style.color = color;

    if (!tester.style.color) {
        alert("Invalid color name!");
        return;
    }

    box.style.backgroundColor = color;
});


document.getElementById("txtBtn").addEventListener("click", function () {
    let text = textInput.value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    box.textContent = text;
});