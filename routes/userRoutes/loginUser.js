const db = require('../../models');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = app => {
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.status(404).send(info.message);
      } else {
        req.logIn(user, err => {
          db.user.findOne({
            where: {
              userName: user.userName
            }
          }).then(user => {
            const token = jwt.sign(
              { id: user.userName },
              process.env.JWT_SECRET
            );
            res.status(200).send({
              auth: true,
              token: 'JWT ' + token,
              message: 'user found & logged in'
            });
          });
        });
      }
    })(req, res, next);
  });
};
