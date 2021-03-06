module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Topic, {
      foreignKey: 'created_by',
      as: 'Topic'
    });
    User.hasMany(models.Message, {
      foreignKey: 'author_id',
      as: 'Author'
    });
  };

  return User;
};