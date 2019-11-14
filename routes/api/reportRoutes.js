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

  app.post('/api/createReport', (req, res) => {
    db.report
      .create(req.body)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send({
          message: 'Report Added'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err.response);
      });
  });
};
