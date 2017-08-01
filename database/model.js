const app = require('../server/server.js');
const mongoose = require('mongoose');
const db = require('./db.js');

const stockSchema = mongoose.Schema({
  name: String,
  price: Number
});

const stock = mongoose.model('stock', stockSchema);

module.model = stockSchema;