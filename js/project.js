'use strict';

var projects = [];

function ProjectGen (rawDataObj) {
  this.title = rawDataObj.title;
  this.date = rawDataObj.date;
  this.description = rawDataObj.description;
  this.url = rawDataObj.url;
}

ProjectGen.prototype.toHtml = function () {
  var $newProject = $('.project-template').clone();

  $newProject.removeClass('project-template');

  $newProject.find('h3').html(this.title);
  $newProject.find('time').attr('datetime', this.date);
  $newProject.find('time').html(this.date);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('p').html(this.description);

  return $newProject;
};

rawData.sort(function(a, b) {
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(projectObject) {
  projects.push(new ProjectGen(projectObject));
});

projects.forEach(function(project) {
  $('#projects-section').append(project.toHtml());
});
