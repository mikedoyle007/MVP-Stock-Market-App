const app = require('../server/server.js');
const mongoose = require('mongoose');

const mongoDatabase = 'mongodb://test-user:hrla16@ds127983.mlab.com:27983/stock-quotes';
mongoose.connect(mongoDatabase);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
const PORT = 1337;
db.once('open', () => {
  console.log('database is up and running');
  app.listen(PORT, () => {
  console.log('server listening on port ', PORT);
  });
});

module.exports = db;