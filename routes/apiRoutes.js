var db = require('../models');

module.exports = function(app) {
  app.get('/api/jobs', function(req,res) {
    db.Jobs.findAll({}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.post('/api/jobs', function(req, res) {
    console.log(req.body);
    db.Jobs.create({
      full_name: req.body.full_name,
      job_name: req.body.job_name,
      job_description: req.body.job_description,
      emailAddress: req.body.emailAddress
    }).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  app.delete('/api/jobs/:id', function(req, res) {
    db.Jobs.destroy({where: {id: req.params.id}}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });  
}