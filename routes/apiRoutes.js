var db = require('../models');

module.exports = function(app) {
  app.get('/api/jobs', function(req,res) {
    db.Jobs.findAll({}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.post('/api/jobs', function(req, res) {
    db.Jobs.create(req.body).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.delete('/api/jobs', function(req, res) {
    db.Jobs.destroy({where: {id: req.params.id}}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });  
}