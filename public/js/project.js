'use strict';

var app = app || {};

(function(module) {

  function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.date = rawDataObj.date;
    this.description = rawDataObj.description;
    this.url = rawDataObj.url;
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    // var $newProject = $('.project-template').clone();
    //
    // $newProject.removeClass('project-template');
    //
    // $newProject.find('h3').html(this.title);
    // $newProject.find('time').attr('datetime', this.date);
    // $newProject.find('time').html(this.date);
    // $newProject.find('a').attr('href', this.url);
    // $newProject.find('p').html(this.description);
    //
    // return $newProject;

    var template = $('#my-template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a, b) {
      return (new Date(b.date)) - (new Date(a.date));
    });

    rawData.forEach(function(projectObject) {
      Project.all.push(new Project(projectObject));
    });
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      initIndexPage();
    } else {
      $.getJSON('/data/projectsData.json')
      .then(function(data) {
        localStorage.rawData = JSON.stringify(data);
        Project.loadAll(JSON.parse(localStorage.rawData));
        initIndexPage();
      }, function(err) {
        console.error('Error: ' + err);
      });
    }
  };

  Project.avgWords = () => {
    return Project.all.map(proj => {
      return proj.description.split(' ').length;
    }).reduce((acc, cur) => {
      acc += cur;
      return Math.round(acc/Project.all.length);
    })
  };

  function initIndexPage() {
    Project.all.forEach(function(project) {
      $('#projects-section').append(project.toHtml());
    });
    $('#projects-avgwords').append(Project.avgWords());
  }

module.Project = Project;
})(app);
