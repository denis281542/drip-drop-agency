var slideIndex = 0;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  //var dots = document.getElementsByClassName("nav-panel__item");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.add('hide');  
  }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace("active", "");
//   }
  slides[slideIndex].classList.remove('hide');  
  //dots[slideIndex-1].className += "active";
}

