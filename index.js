const bodyParser = require('body-parser');
const express = require('express');
const router = require('mongoose-express-router');
const { Account, close } = require('./model');

const app = express();
app.closeDatabase = () => close();
app.use(bodyParser.json());

app.use('/', router(Account));

module.exports = exports = app;

if (require.main === module) {
  app.listen(8080);
  console.log('Server listening on port 8080');
}
