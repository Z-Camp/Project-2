module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    activityType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  //not totally sure if this is the correct way to "attach" Activity data to the user
  //when entering it into the database
  Activity.associate = function(models) {
    Activity.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
    return Activity;
  };
};
