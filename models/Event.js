module.exports = function(sequelize, Sequelize) {
  const Event = sequelize.define('event', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eventDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    isAnnouncement: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0
    },
    createdBy: {
      type: Sequelize.UUID,
      allowNull: false
    }
  });

  return Event;
};
