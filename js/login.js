window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  const loginFormInput = {
    logInEmail: document.getElementById("logInEmail"),
    logInPassword: document.getElementById("logInPassword"),
    emailIncorrect: document.getElementById("emailIncorrect"),
    passIncorrect: document.getElementById("passIncorrect"),
  };
  const localStorageItem = {
    emailValue: localStorage.getItem("email"),
    passwordValue: localStorage.getItem("password"),
  };

  const localEmail = localStorageItem.emailValue;
  const localPass = localStorageItem.passwordValue;
  window.addEventListener("load", () => {
    autoLogin(localEmail, localPass);
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(localStorageItem.emailValue);
    console.log(localStorageItem.passwordValue);

    let emailInputValue = loginFormInput.logInEmail.value;
    let passwordInputValue = loginFormInput.logInPassword.value;
    console.log(emailInputValue);
    console.log(passwordInputValue);
    if (emailInputValue == localStorageItem.emailValue) {
      if (passwordInputValue == localStorageItem.passwordValue) {
        window.location.href = "./dashboard.html";
      } else {
        loginFormInput.passIncorrect.classList.remove("hidden");
        emailInputValue = "";
        loginFormInput.logInEmail.value = "";
        setTimeout(() => {
          loginFormInput.passIncorrect.classList.add("hidden");
        }, 1000);
      }
    } else {
      loginFormInput.emailIncorrect.classList.remove("hidden");
      loginFormInput.logInEmail.value = "";
      setTimeout(() => {
        loginFormInput.emailIncorrect.classList.add("hidden");
      }, 1000);
    }
  });

  function autoLogin(email, pass) {
    if (!email && !pass) {
      console.log("There is no key");
      return;
    } else {
      window.location.href = "./dashboard.html";
    }
  }
});
