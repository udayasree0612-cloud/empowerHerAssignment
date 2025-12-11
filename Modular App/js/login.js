document.getElementById("loginBtn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Signup first!");
    return;
  }

  if (email === savedUser.email && pass === savedUser.pass) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful!");

    window.location.href = "todos.html";
  } else {
    alert("Wrong email or password!");
  }
});
