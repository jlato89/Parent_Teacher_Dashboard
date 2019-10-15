const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Assign port and Start Express Server
const PORT = process.env.PORT || 8080;
const app = express();

//Setup BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup passport
app.use(passport.initialize());

//Load passport strategies
const db = require('./models');
// require('./config/passport.js')(passport, db);

// Setup Misc
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Define Routes
// require('./routes/api')(app, passport, db);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
