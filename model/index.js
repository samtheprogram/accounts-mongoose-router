const mongoose = require('mongoose');
const Account = require('./account');

const conn = mongoose.connect('mongodb://localhost/accounts-node-1', { useMongoClient: true });
const close = () => conn.close();

module.exports = exports = {
  Account,
  close
};
