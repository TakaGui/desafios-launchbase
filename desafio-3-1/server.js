const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
});

server.get('/', function(request, response) {
  return response.render('about');
});

server.get('/courses', function(request, response) {
  return response.render('courses');
})

server.use(function(request, response) {
  response.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('🍙 server is running.');
});