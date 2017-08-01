const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/search', (req, res) => {
  axios.get('http://finance.yahoo.com//d/quotes.csv?s=APPL&=nab')
    .then((response) => {
    console.log('response is: ', response);
    res.send(response);
  })
  .catch((err) => {
    console.log('error inside server app.get method is: ', err);
  });
});

// cors
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// routes

// get data from yahoo finance api as requested by user
// store in database

module.exports = app;