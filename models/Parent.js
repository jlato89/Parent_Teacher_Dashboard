module.exports = function(sequelize, Sequelize) {
   const Parent = sequelize.define('parent', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
         defaultValue: Sequelize.UUIDV4
      },
      fullName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      fullName2: {
         type: Sequelize.STRING
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

   return Parent;
}