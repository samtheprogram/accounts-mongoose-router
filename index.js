const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send("Hello, world!").status(200).end();
});

module.exports = exports = app;

if (require.main === module) {
  app.listen(8080);
  console.log('Server listening on port 8080');
}
