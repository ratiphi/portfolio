'use strict';

const pg = require('pg');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://localhost:5432/portfolio';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('Node server is running on port ', PORT);
  console.log('Type CTRL + C to stop server.');
});
