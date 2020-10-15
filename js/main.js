const testimonialSliderDelay = 7000;
var testimonialSlider = new Swiper('.testimonial-slider', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.testimonial-slider__pagination',
  },
  initialSlide: 1,
  autoplay: {
    delay: testimonialSliderDelay,
  },
});

const testimonialSliderArea = document.getElementById('testimonial-slider');

testimonialSliderArea.addEventListener('mouseover', function () {
  // console.log("testimonialSlider stop: ", testimonialSlider.autoplay.running);
  testimonialSlider.autoplay.stop();
});

testimonialSliderArea.addEventListener('mouseout', function () {
  // console.log("testimonialSlider stop: ", testimonialSlider.autoplay.running);
  testimonialSlider.autoplay.start();
});

const mobileMenuButtonArray = document.querySelectorAll("button[data-mobile='menu-button']")
// const mobileMenuButtonClose = document.getElementById("menu-button-close")
const mobileMenu = document.getElementById('menu-mobile');

mobileMenuButtonArray.forEach(function (element) {
  element.addEventListener('click', function () {
    mobileMenu.classList.toggle('menu-mobile--visible');
  });
});

// mobileMenuButtonClose.addEventListener('click', function(){
//   mobileMenu.classList.toggle('menu-mobile--visible');
// });
