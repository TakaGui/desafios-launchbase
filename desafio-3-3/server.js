const express = require('express');
const nunjucks = require('nunjucks');

const courses = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express:server,
});

server.get('/', function(request, response) {
  const links = [
    { name: 'Github', url: 'https://github.com/Rocketseat/' },
    { name: 'Instagram', url: 'https://www.instagram.com/rocketseat_oficial/' },
    { name: 'Facebook', url: 'https://www.facebook.com/rocketseat/' },
  ];

  return response.render('about', { links });
});

server.get('/courses', function(request, response) {
  return response.render('courses', { courses });
})

server.get('/courses/:id', function(request, response) {
  const id = request.params.id;

  course = courses.find(function(course) {
    return course.id === id;
  })

  if (!course) {
    return response.status(404).render('not-found');
  }

  return response.render('course', { course });
});

server.use(function(request, response) {
  return response.status(404).render('not-found');
});

server.listen(5000, function() {
  console.log('🍙 server is running.');
});