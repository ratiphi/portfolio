'use strict';

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('Node server is running on port ', PORT);
  console.log('Type CTRL + C to stop server.');
});
