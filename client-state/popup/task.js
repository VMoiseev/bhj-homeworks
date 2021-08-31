const popup = document.getElementById("subscribe-modal");
const closePopup = document.querySelector(".modal__close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "modal=close";
});

window.addEventListener("load", () => {
  if (!document.cookie.includes("status=active")) {
    popup.classList.add("modal_active");
  }
});