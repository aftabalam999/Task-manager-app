window.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const signUpForm = document.getElementById("signupForm");

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("user", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    username.value = "";
    email.value = "";
    password.value = "";
    window.location.href = "./pages/dashboard.html";
  });

});
