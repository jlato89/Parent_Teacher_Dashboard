const db = require('../../models');

module.exports = app => {
  app.post('/api/createStudent', (req, res) => {
    db.student
      .create(req.body)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send({
          message: 'Student(s) @ Parent Added'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err.response);
      });
  });
};
