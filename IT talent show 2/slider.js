const slides = document.querySelectorAll("#slider div.slide-container");
const sliderImageBackground = document.querySelector("header #slider");
let sliderIndex = 0;
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  if (index === 0) {
    sliderImageBackground.style.backgroundImage = "url(images/dronka.jpg)";
  } else if (index === 1) {
    sliderImageBackground.style.backgroundImage = "url(images/MojeLiceum1.jpg)";
  } else if (index === 2) {
    sliderImageBackground.style.backgroundImage =
      "url(images/drzwiOtwarte.jpg)";
  }
  if (index === 3) {
    sliderImageBackground.style.backgroundImage = "url(images/dronka.jpg)";
  } else if (index === -1) {
    sliderImageBackground.style.backgroundImage =
      "url(images/drzwiOtwarte.jpg)";
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
