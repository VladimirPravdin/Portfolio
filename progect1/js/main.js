$(document).ready(function(){
  $('.main-slider .slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    arrows: true
  });
  $('.right-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,      
    appendDots: $(".dots-box")
  });
});
