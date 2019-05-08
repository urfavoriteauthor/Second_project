module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 400]
      },
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    }
  });
  return Jobs;
};