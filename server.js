const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const logger = require('morgan');
require('dotenv').config();

// Assign port and Start Express Server
const PORT = process.env.PORT || 8080;
const app = express();

// Setup BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Logger
app.use(logger('dev'));

// Setup passport
app.use(passport.initialize());
require('./config/passport.js');

// Load passport strategies
const db = require('./models');

// Setup Misc
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Define Routes
require('./routes/userRoutes/registerUser')(app);
require('./routes/userRoutes/loginUser')(app);
require('./routes/userRoutes/findUsers')(app);
require('./routes/userRoutes/deleteUser')(app);
require('./routes/userRoutes/updateUser')(app);
require('./routes/eventRoutes/findEvents')(app);
require('./routes/studentRoutes/findStudents')(app);
require('./routes/studentRoutes/createStudent')(app);
require('./routes/reportRoutes/createReport')(app);
require('./routes/reportRoutes/findReports')(app);
require('./routes/incidentRoutes/createIncident')(app);
require('./routes/incidentRoutes/findIncidents')(app);

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
