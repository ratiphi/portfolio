// 'use strict';
//
// // var myInterval = setInterval(function() {
// //   console.log(new Date());
// // }, 1000);
//
// // $(selector).animate(obj, time, callback);
//
//
// $(function() {
//   // configuration variables
//   var width = 720;
//   var animationSpeed = 2000;
//   var pause = 4000;
//   var currentSlide = 1;
//   var interval;
//
//   // cache the DOM
//   var $slider = $('#slider');
//   var $slideContainer = $slider.find('.slides');
//   var $slides = $slideContainer.find('.slide');
//
//   function startSlider() {
//     // set interval (does something every 3 seconds)
//     interval = setInterval(function() {
//       // animate margin-left
//       $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
//         currentSlide++;
//         // if it's last slide, go to position 1 (0px)
//         if (currentSlide === $slides.length) {
//           currentSlide = 1;
//           $slideContainer.css('margin-left', 0);
//         }
//       });
//     }, pause);
//   }
//
//   function stopSlider() {
//     clearInterval(interval);
//   }
//
//   $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
//
//   startSlider();
// });
