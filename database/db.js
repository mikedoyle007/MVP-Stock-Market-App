const app = require('../server/server.js');
const mongoose = require('mongoose');

const mongoDatabase = 'mongodb://test-user:hrla16@ds127983.mlab.com:27983/stock-quotes';
mongoose.connect(mongoDatabase);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('database is up and running');
  const stockSchema = mongoose.Schema({
  name: String,
  price: Number
});
const StockEntry = mongoose.model('StockEntry', stockSchema);

const PORT = 1337;
  app.listen(PORT, () => {
  console.log('server listening on port ', PORT);
  });
});

module.exports = db;