module.exports = function(sequelize, Sequelize) {
   const User = sequelize.define('user', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
         defaultValue: Sequelize.UUIDV4
      },
      userName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      password: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      isTeacher: {
         type: Sequelize.BOOLEAN,
         defaultValue: 0
      },
      isDirector: {
         type: Sequelize.BOOLEAN,
         defaultValue: 0
      },
      fullName: {
         type: Sequelize.STRING
      },
      fullName2: {
         type: Sequelize.STRING
      },
      email: {
         type: Sequelize.STRING
      },
      profileImage: {
         type: Sequelize.TEXT
      },
      phone: {
         type: Sequelize.INTEGER
      },
      address: {
         type: Sequelize.STRING
      },
      emergencyName: {
         type: Sequelize.STRING
      },
      emergencyPhone: {
         type: Sequelize.INTEGER
      },
      emergencyRelation: {
         type: Sequelize.STRING
      },
      approvedNames: {
         type: Sequelize.STRING
      }
   });

   return User;
}