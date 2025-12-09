window.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const signUpBtn = document.getElementById("signupForm");

  signUpBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello");
    localStorage.setItem("user", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    username.value = "";
    email.value = "";
    password.value = "";
    window.location.href = "./pages/dashboard.html";
  });

  // const localStorageItem = {
  //   emailValue: localStorage.getItem("email"),
  //   passwordValue: localStorage.getItem("password"),
  // };

  // const localEmail = localStorageItem.emailValue;
  // const localPass = localStorageItem.passwordValue;
  // window.addEventListener("load", () => {
  //   autoLogin(localEmail, localPass);
  // });

//   function autoLogin(email, pass) {
//     if (!email && !pass) {
//       console.log("There is no key");
//       return;
//     } else {
//       window.location.href = "./pages/login.html";
//     }
//   }
});
