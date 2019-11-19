module.exports = function(sequelize, Sequelize) {
   const User = sequelize.define('user', {
      userName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      password: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      userType: {
         type: Sequelize.STRING,
         defaultValue: 'parent'
      },
      firstName: {
         type: Sequelize.STRING
      },
      firstName2: {
         type: Sequelize.STRING
      },
      lastName: {
         type: Sequelize.STRING
      },
      email: {
         type: Sequelize.STRING
      },
      profileImage: {
         type: Sequelize.TEXT
      },
      phone: {
         type: Sequelize.STRING
      },
      address: {
         type: Sequelize.STRING
      },
      emergencyName: {
         type: Sequelize.STRING
      },
      emergencyPhone: {
         type: Sequelize.STRING
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