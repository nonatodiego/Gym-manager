const express = require('express'); // servidor usando express.js

const routes = express.Router(); // usar as rotas por meio do express

routes.get('/', function (req, res) {
  return res.redirect('/instructors'); // redireciona para instructors
});

routes.get('/instructors', function (req, res) {
  return res.render('instructors/index'); // rendereziar o arquivo index dentro da pasta instructors
});

routes.get('/members', function (req, res) {
  return res.send('members');
});

module.exports = routes;
