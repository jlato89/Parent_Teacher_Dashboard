const db = require('../../models');

module.exports = app => {
  app.get('/api/findReports', (req, res) => {
    db.report
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
