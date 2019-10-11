module.exports = function(sequelize, Sequelize) {
   const Teacher = sequelize.define('teacher', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
         defaultValue: Sequelize.UUIDV4
      },
      fullName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      email: {
         type: Sequelize.STRING
      },
      username: {
         type: Sequelize.STRING,
         allowNull: false
      },
      password: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      profileImage: {
         type: Sequelize.TEXT
      },
      isDirector: {
         type: Sequelize.BOOLEAN,
         defaultValue: 0
      }
   });

   return Teacher;
};
