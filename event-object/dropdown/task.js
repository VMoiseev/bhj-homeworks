const btns = Array.from(document.getElementsByClassName("dropdown__value"));
const links = Array.from(document.getElementsByClassName("dropdown__link"));

function onClick() {
  const dropdownList = document.querySelector("ul");
  if (dropdownList.className === "dropdown__list") {
    dropdownList.className = "dropdown__list dropdown__list_active";
  } else {
    dropdownList.className = "dropdown__list";
  }
}

btns.forEach((btn) => btn.addEventListener("click", onClick));

links.forEach(function(link) {
  const dropdownLink = link.closest("div");
  const selectedLink = dropdownLink.querySelector(".dropdown__value");
  const dropdownList = link.closest("ul");
  
  link.onclick = function() {
    selectedLink.textContent = link.textContent;
    dropdownList.className = "dropdown__list";
    return false;
  }
});