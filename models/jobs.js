module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    job_description: DataTypes.TEXT,
    html: DataTypes.BOOLEAN,
    css: DataTypes.BOOLEAN,
    javascript: DataTypes.BOOLEAN
  });
  return Jobs;
};