const express = require('express'); // servidor usando express.js

const routes = express.Router(); // usar as rotas por meio do express

routes.get('/', function (req, res) {
  return res.send('ok');
});

module.exports = routes;
