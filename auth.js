function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple admin credentials (for project demo)
  if (username === "admin" && password === "12345") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
