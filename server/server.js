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

// POST Request
app.post('/search', (req, res) => {
  // console.log(req.body.name);
  const stock = req.body.name;
  const api_key = 'uz2s6s5WS86ZeASb5qnE';
  const url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}/data.csv?api_key=${api_key}`;

  axios.get(url)
    .then(({ data }) => {
      const price = data.split(',')[20];
      console.log('response that was requested : ', price);
      console.log('getting ready to send response back to client');
      // res.send({
      //   stockName: stock,
      //   stockPrice: price
      // })
      res.send([stock, price]);
      console.log('sent response back successfully');
    })
    .catch((err) => {
      console.log('error retrieving stock information ', err);
    });
});

module.exports = app;