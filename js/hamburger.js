'use strict';

// $(document).ready(function() {
//   $('.menu-btn').on('click', function() {
//     $('.responsive-menu').addClass('expand');
//     $('.menu-btn').addClass('btn-none');
//   });
//   $('.close-btn').on('click', function() {
//     $('.responsive-menu').removeClass('expand');
//     $('.menu-btn').removeClass('btn-none');
//   });
// });

$(document).ready(function() {
  $('.menu-btn').on('click', function() {
    $('.mobile-link').toggleClass('expand');
  });
});
