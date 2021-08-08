const rotators = Array.from(document.querySelectorAll(".rotator__case"));

setInterval (function rotation() {
  let activeRotator = rotators.findIndex((rotatorCase) => 
    rotatorCase.classList.contains("rotator__case_active"));

  rotators[activeRotator].classList.remove("rotator__case_active");
  activeRotator += 1;

  if (activeRotator === rotators.length) {
    activeRotator = 0;
    rotators[activeRotator].classList.add("rotator__case_active");
  } else {
      rotators[activeRotator].classList.add("rotator__case_active");
  }
}, 1000);