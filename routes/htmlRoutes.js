var db = require('../models');
var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
  });

  app.get('/jobs', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/jobspage.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/error.html'));
  });
}