const Sequelize = require('sequelize');
//do we need to require a db?


module.exports = function (sequelize, DataTypes) {

    //
    const Activity = sequelize.define("Activity", {
      activityType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distance: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      time: {
          type: DataTypes.BIGINT,
          allowNull: false,
      },
      dateTime: {
          type: DataTypes.DATE,
          allowNull: false,
      }
    });

    Activity.belongsTo(models.user,{
        foreignKey: 'email',
        as: 'User',

    });

    return Activity;
  };
  
  module.exports = Activity;