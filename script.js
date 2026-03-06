// Simple Image Slider
let i = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}, 3000);
