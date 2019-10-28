const db = require('../../models');

module.exports = app => {
  app.post('/reports/createReport', (req, res) => {
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
