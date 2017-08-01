const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const api_key = 'uz2s6s5WS86ZeASb5qnE';
const stock = 'GOOG';
const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}/data.csv?api_key=${api_key}`;

// TODO: should handle GET and POST requests
// 
// POST: should GET stock name and price from API and load into db
//
// GET: should query the db and return all the results

// POST Request
app.post('/search', (req, res) => {
  axios.get(url)
    .then(({ data }) => {
      const price = data.split(',')[20];
      console.log('response is : ', price);
      // this.setState({stocks: ['Facebook', price]});
    })
    .catch((err) => {
      console.log('error retrieving stock information ', err);
    });
});

module.exports = app;