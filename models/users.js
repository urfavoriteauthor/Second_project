module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    html: DataTypes.BOOLEAN,
    css: DataTypes.BOOLEAN,
    javascript: DataTypes.BOOLEAN,
    hourly_rate: DataTypes.INTEGER
  });
  return Users;
};