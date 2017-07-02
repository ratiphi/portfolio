'use strict';
var app = app || {}

(function(module) {
  const indexController = {};

  indexController.initAbout = function() {
    $('.projects-content').hide();
    $('.about-content').show();
  };

  indexController.initProjects = function() {
    $('.about-content').hide();
    $('.projects-content').show();
  };

  module.indexController = indexController;
})(app);
