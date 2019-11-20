module.exports = function(sequelize, Sequelize) {
   const Student = sequelize.define('student', {
      firstName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      lastName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      parentId: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      profileImage: {
         type: Sequelize.TEXT
      },
      birthdate: {
         type: Sequelize.DATEONLY
      },
      gender: {
         type: Sequelize.STRING
      },
      allergies: {
         type: Sequelize.STRING
      },
      medical: {
         type: Sequelize.STRING
      }
   });

   return Student;
}