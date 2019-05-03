var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/jobs', function(req, res) {
    res.render('jobs');
  });

  app.get('/user/:id', function(req, res) {
    db.Users.findOne({where: {id: req.params.id}}).then(function(dbUsers) {
      res.render('user', {user: dbUsers});
    });
  });

  app.get('/client/:id', function(req, res) {
    db.Clients.findOne({where: {id: req.params.id}}).then(function(dbClients) {
      res.render('client', {client:dbClients});
    });
  });

  app.get('*', function(req, res) {
    res.render('404');
  });
}