const db = require('../../models');

module.exports = app => {
  app.post('/api/createReport', (req, res) => {
    db.incident
      .create(req.body)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send({
          message: 'Incident Added'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err.response);
      });
  });
};
