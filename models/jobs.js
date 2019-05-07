module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    full_name: DataTypes.STRING,
    job_name: DataTypes.STRING,
    job_description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 400]
      }
    },
    emailAddress: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  });
  return Jobs;
};