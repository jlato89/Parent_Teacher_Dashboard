const db = require('../../models');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = app => {
  //* Register User
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
              user.update(data)
                .then(user => {
                  console.log('user created in db');
                  res.status(200).send({
                    message: 'user created',
                    userId: user.id
                  });
                });
            });
        });
      }
    })(req, res, next);
  });

  //* Find Users
  app.get('/findUsers/:userType', (req, res) => {
    const userType = req.params.userType;

    db.user
      .findAll({
        where: {
          userType: userType
        }
      })
      .then(users => {
        // console.log(user);
        res.status(200).send(users);
      })
      .catch(err => {
        console.log(err.response);
        res.status(500).send(err.response);
      });
  });

  //* Find Current User
  app.get('/api/findUser', (req, res, next) => {
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

  //* Update User
  app.put('/api/updateUser', (req, res) => {
    db.user
      .update(req.body, {
        where: { id: req.body.id }
      })
      .then(rowUpdated => {
        if (rowUpdated === 1) {
          console.log('Updated successfully');
          res.status(200).json({ msg: 'Updated successfully' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ msg: 'There was an error' });
      });
  });

  //* Delete User
  app.delete('/api/deleteUser', (req, res) => {
    db.user
      .destroy({
        where: {
          id: req.body.userId
          //! maybe add a validation check to be sure request
          //! came from valid server.
        }
      })
      .then(rowDeleted => {
        if (rowDeleted === 1) {
          console.log('Deleted successfully');
          res.status(200).json({ msg: 'Deleted successfully' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ msg: 'There was an error' });
      });
  });

  //* Login User
  app.post('/api/loginUser', (req, res, next) => {
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
              {
                id: user.id,
                userType: user.userType
              },
              process.env.JWT_SECRET,
              { expiresIn: 3600 * 12 }, //! 1 hour x 12
            );
            res.status(200).send({
              token: `JWT ${token}`,
              message: 'user found & logged in'
            });
          });
        });
      }
    })(req, res, next);
  });
};
