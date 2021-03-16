/*JavaScript added on this page */
var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

function clean() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("name").focus();
}
