const express = require('express'); // servidor usando express.js

const routes = express.Router(); // usar as rotas por meio do express

routes.get('/', function (req, res) {
  return res.redirect('/teachers'); // redireciona para teachers
});

routes.get('/teachers', function (req, res) {
  return res.render('teachers/index'); // rendereziar o arquivo index dentro da pasta teachers
});
routes.get('/students', function (req, res) {
  return res.render('students/index'); // rendereziar o arquivo index dentro da pasta students
});

// routes.get('/students', function (req, res) {
//   return res.send('students');
// });

module.exports = routes;
