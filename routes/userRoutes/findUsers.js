const passport = require('passport');

module.exports = app => {
  app.get('/findUser', (req, res, next) => {
    passport.authenticate('jwt', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        delete user.dataValues.password;

        res.status(200).send({
          user,
          message: 'user found in db'
        });
      }
    })(req, res, next);
  });
};
