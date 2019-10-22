module.exports = function(sequelize, Sequelize) {
   const Student = sequelize.define('student', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
         defaultValue: Sequelize.UUIDV4
      },
      fullName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      parentId: {
         type: Sequelize.UUID,
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