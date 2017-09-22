module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  Topic.associate = function(models) {
    Topic.hasMany(models.Message, {
      foreignKey: 'topic_id',
      as: 'Topic'
    });
  };

  return Topic;
};