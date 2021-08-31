const signinForm = document.getElementById("signin__form");
const signin = document.getElementById("signin");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
let user = localStorage.user_id;

function welcomeUser() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = `${user}`;
}

if(user){
  welcomeUser();
} else {
  signin.classList.add('signin_active');
}

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(signinForm);
  const URL = signinForm.getAttribute("action");
  xhr.responseType = "json";
  xhr.open("POST", URL);

  xhr.addEventListener("load", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      if (!xhr.response.success) {
        alert("Неверный логин/пароль");
      } else {
        user = xhr.response.user_id;
        welcomeUser();
      }
      signinForm.reset();
    }
  });
  xhr.send(formData);
});