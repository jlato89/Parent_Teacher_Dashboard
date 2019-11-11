const db = require('../../models');

module.exports = app => {
  app.get('/api/findIncidents', (req, res) => {
    db.incident
      .findAll({})
      .then(events => {
        // console.log(events);
        res.status(200).send(events);
      })
      .catch(err => {
        console.log(err.response);
        res.status(500).send(err.response);
      });
  });
};
