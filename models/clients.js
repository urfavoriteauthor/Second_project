module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    need: DataTypes.TEXT,
    budget: DataTypes.INTEGER
  });
  return Clients;
};