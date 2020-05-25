const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String
});

module.exports = exports = mongoose.model('Account', schema);
