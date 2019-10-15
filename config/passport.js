const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({session: false},
  function(userName, password, done) {
    console.log('userName',userName)
    User.findOne({ userName: userName })
      .exec()
      .then( (user)=>{
        if(!user){
          console.log( 'NO USER EXISTS')
          return done(null, false, {message: 'userName or password does not match'})
        } else {
          bcrypt.compare(password, user.password)
            .then( result =>{
              if(result){
                return done(null, user)
              }
              else{
                return done(null, false, {message: 'userName or password does not match'})
              }
            })
            .catch(err =>{
              console.log('error with bcrypt',err)
            })
        }
      })
      .catch( err =>{
        console.log(err)
      })
  }
))
