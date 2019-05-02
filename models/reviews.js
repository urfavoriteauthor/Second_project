module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating_number: DataTypes.INTEGER,
    review: DataTypes.TEXT
  });
  return Review;
};