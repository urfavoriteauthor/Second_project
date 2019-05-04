module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    job_description: DataTypes.TEXT,
    html: DataTypes.BOOLEAN,
    css: DataTypes.BOOLEAN,
    javascript: DataTypes.BOOLEAN,
    job_accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Jobs;
};