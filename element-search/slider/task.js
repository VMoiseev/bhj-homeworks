const sliders = Array.from(document.getElementsByClassName("slider__item"));
const dots = Array.from(document.getElementsByClassName("slider__dot"));

const arrowPrev = document.querySelector(".slider__arrow_prev");
const arrowNext = document.querySelector(".slider__arrow_next");

let activeSlider = 0;
const allSliders = sliders.length;

function removableSlide() {
  sliders[activeSlider].className = "slider__item";
  dots[activeSlider].className = "slider__dot";
}

function installableSlide() {
  sliders[activeSlider].className = "slider__item slider__item_active";
  dots[activeSlider].className = "slider__dot slider__dot_active";
}

arrowPrev.onclick = function() {
  removableSlide();
  activeSlider--;

  if (activeSlider < 0) { 
    activeSlider = allSliders - 1;
  }
  installableSlide();
}

arrowNext.onclick = function() {
  removableSlide();
  activeSlider++;

  if (activeSlider >= allSliders) {
    activeSlider = 0;
  }
  installableSlide();
}

dots.forEach(function(dot, i) {
  dot.onclick = () => {
    removableSlide();
    activeSlider = i;
    installableSlide();
  }
});