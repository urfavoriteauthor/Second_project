var db = require('../models');

module.exports = function(app) {
  app.get('/api/jobs', function(req,res) {
    db.Jobs.findAll({}).then(function(dbJobs) {
      res.json(dbJobs);
    });
  });

  
}