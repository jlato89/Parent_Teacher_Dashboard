module.exports = function(sequelize, Sequelize) {
  const Incident = sequelize.define('incident', {
    studentName1: {
      type: Sequelize.STRING,
      allowNull: false
    },
    studentName2: {
      type: Sequelize.STRING,
      allowNull: false
    },
    student1Id: {
      type: Sequelize.UUID
    },
    student2Id: {
      type: Sequelize.UUID
    },
    incidentDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    comments: {
      type: Sequelize.TEXT
    }
  });

  return Incident;
};
