document.getElementById("signupBtn").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  if (!name || !email || !pass) {
    alert("Fill all fields");
    return;
  }

  let user = { name, email, pass };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup Successful!");
  window.location.href = "login.html";
});
