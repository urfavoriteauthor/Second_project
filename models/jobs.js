module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    job_name: DataTypes.STRING,
    job_description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 400]
      }
    },
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