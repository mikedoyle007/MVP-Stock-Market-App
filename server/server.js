const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET Request
app.get('/search', (req, res) => {
  // TODO: request data from server
  // send response back to client to store and render
});

// POST Request
// TODO: save stock and price to database
app.post('/search', (req, res) => {
  const stock = req.body.name;
  const api_key = 'uz2s6s5WS86ZeASb5qnE';
  const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}/data.csv?api_key=${api_key}`;

  axios.get(url)
    .then(({ data }) => {
      const price = data.split(',')[20];
      console.log('response that was requested : ', price);
      console.log('getting ready to send response back to client');
      res.send([stock, price]);
    })
    .catch((err) => {
      console.log('error retrieving stock information ', err);
    });
});

module.exports = app;