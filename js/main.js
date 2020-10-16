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

const mobileMenuButtonArray = document.querySelectorAll("button[data-mobile='menu-button']"),
      mobileMenu = document.getElementById('menu-mobile');

mobileMenuButtonArray.forEach(function (element) {
  element.addEventListener('click', function () {
    mobileMenu.classList.toggle('menu-mobile--visible');
  });
});

// tabs
const trendsItemArray = document.querySelectorAll(".trends__category"),
      trendsSortArray = document.querySelectorAll(".trends__sort");
trendsItemArray.forEach(function (element) {
  element.addEventListener('click', function() {
    let activeContent = document.getElementById(this.dataset.target);
    trendsItemArray.forEach(function (e) {
      e.classList.remove("trends__category-active")
    })
    trendsSortArray.forEach(function (e) {
      e.classList.remove("trends__sort-active")
    })
    this.classList.toggle("trends__category-active");
    activeContent.classList.add("trends__sort-active");
  })
});