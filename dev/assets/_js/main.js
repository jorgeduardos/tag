
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;
import Foundation from 'foundation-sites';

// import JS files here using ES6 import statement
import slick from 'slick-carousel';
import countUp from 'countup.js'; 

$(document).foundation()

// nav

var nav = $('.main-nav');
$('.menu').click (function(){
  $(this).toggleClass('open')
  nav.hasClass('open') ? (nav.addClass('close'),nav.removeClass('open')) : (nav.addClass('open'),nav.removeClass('close'));

});

//sliders

$('#sliderSearch').slick({
  centerMode: true,
  arrows: true,
  centerPadding: '60px',
  slidesToShow: 3,
  focusOnSelect: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('#sliderClient').slick({
  dots: true,
  infinite: true,
  arrows: false,
  fade: true,
  autoplay: false,
  autoplaySpeed: 2000
});

var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.', 
};

var options2 = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.',
  suffix: '%'  
};

// countup numbers

var number1 = document.getElementById("aboutItem1");
var number2 = document.getElementById("aboutItem2");
var number3 = document.getElementById("aboutItem3");

var first = new countUp(number1, 0, 35, 0, 3, options);
var second = new countUp(number2, 0, 4000, 0, 4, options);
var third = new countUp(number3, 0, 85, 0, 4, options2);

if (!first.error) {
  first.start(function(){
    if (!second.error) {
      second.start(function(){
        if (!third.error) {
            third.start();
          } else {
            console.error(third.error);
          }
        });
    } else {
      console.error(second.error);
    }
  });
} else {
  console.error(first.error);
}



