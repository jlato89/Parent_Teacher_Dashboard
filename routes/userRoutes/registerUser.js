const db = require('../../models');
const passport = require('passport');

module.exports = app => {
  app.post('/api/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = req.body;
          delete data.password;

          db.user
            .findOne({
              where: {
                userName: data.userName
              }
            })
            .then(user => {
              user.update(data).then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
            });
        });
      }
    })(req, res, next);
  });
};
