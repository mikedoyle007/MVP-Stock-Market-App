const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: should handle GET and POST requests
// 
// POST: should GET stock name and price from API and load into db
//
// GET: should query the db and return all the results

module.exports = app;