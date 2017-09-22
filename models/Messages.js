module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Message.associate = function(models) {
    Message.belongsTo(models.Topic, {
      foreignKey: 'topic_id',
      as: 'Topic'
    });
    Message.belongsTo(models.User, {
      foreignKey: 'author_id',
      as: 'Author'
    });
  };

  return Message;
};