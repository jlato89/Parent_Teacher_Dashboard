const db = require('../../models');
const passport = require('passport');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = {
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            isTeacher: req.body.isTeacher,
            isDirector: req.body.isDirector,
            fullName2: req.body.fullName2,
            profileImage: req.body.profileImage,
            phone: req.body.phone,
            address: req.body.address,
            emergencyName: req.body.emergencyName,
            emergencyPhone: req.body.emergencyPhone,
            emergencyRelation: req.body.emergencyRelation,
            approvedNames: req.body.approvedNames
          };
          db.user.findOne({
            where: {
              userName: data.userName
            }
          }).then(user => {
            user
              .update({
                fullName: data.fullName
                //! add more fields
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });
};
