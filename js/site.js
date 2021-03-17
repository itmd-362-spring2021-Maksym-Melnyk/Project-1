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

function validation() {
document.getElementById("name").value = name;

if (name = isNaN) {

  window.alert("All good");
  clean();

} else {
  window.alert("change to letters");
}
// if (tax >= 20 || tax <= 0 || isNaN) {
//   window.alert("Tax amount needs to be a number greater then 0 and less then 20");
//   clean();
// }
}