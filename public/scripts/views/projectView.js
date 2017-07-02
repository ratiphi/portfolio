'use strict';

var app = app || {};

(function(module) {
  const projectView = {};

  projectView.initIndexPage = () => {
    Project.all.forEach(function(project) {
      $('#projects-section').append(project.toHtml());
    });
    $('#projects-avgwords').append(Project.avgWords());
  }
  module.projectView = projectView;
})(app);
