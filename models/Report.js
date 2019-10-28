module.exports = function(sequelize, Sequelize) {
   const Report = sequelize.define('report', {
     studentName: {
       type: Sequelize.STRING,
       allowNull: false
     },
     studentId: {
       type: Sequelize.UUID
     },
     date: {
       type: Sequelize.DATE,
       allowNull: false
     },
     attitude: {
       type: Sequelize.STRING,
       allowNull: false
     },
     enjoyed: {
       type: Sequelize.STRING,
       allowNull: false
     },
     brBreaks: {
       type: Sequelize.STRING,
       allowNull: false
     },
     napTime: {
       type: Sequelize.STRING,
       allowNull: false
     },
     ate: {
       type: Sequelize.STRING,
       allowNull: false
     },
     suppliesNeeded: {
       type: Sequelize.STRING
     },
     comments: {
       type: Sequelize.TEXT
     }
   });

   return Report;
}