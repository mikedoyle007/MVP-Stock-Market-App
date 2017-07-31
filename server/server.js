const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join('../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 1337;

app.listen(PORT, () => {
  console.log('server listening on port ', PORT);
});

module.exports = app;