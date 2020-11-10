const express = require('express'); // add express
const nunjucks = require('nunjucks'); // add nunjucks
const routes = require('./routes'); // add arquivo de rotas

const server = express(); // servidor usando express.js

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(5000, function () {
  console.log('===== server está funcionando ===== ');
});
