'use strict';

var app = app || {};

page('/about', app.indexController.initAbout);

page('/', app.indexController.initProjects);

page();
