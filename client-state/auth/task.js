const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
let user = localStorage.user_id;

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(signinForm);
  const URL = signinForm.getAttribute("action");
  xhr.responseType = "json";
  xhr.open("POST", URL);

  xhr.addEventListener("load", () => {
    if (!xhr.response.success) {
      alert("Неверный логин/пароль");
    } else {
      welcomeUser();
      userId.innerText = id;
      localStorage.setItem("user", id);
    }
    signinForm.reset();
  });
  xhr.send(formData);
});

function welcomeUser() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
}

window.addEventListener("load", () => {
  const storageId = localStorage.getItem("user");
  if (storageId) {
    welcomeUser ();
    userId.innerText = storageId;
  }
})