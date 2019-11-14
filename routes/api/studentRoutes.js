const db = require('../../models');

module.exports = app => {
  app.get('/api/findStudents', (req, res) => {
    db.student
      .findAll({})
      .then(student => {
        // console.log(student);
        res.status(200).send(student);
      })
      .catch(err => {
        console.log(err.response);
        res.status(500).send(err.response);
      });
  });

  app.get('/findStudent/:parentId', (req, res) => {
    const parentId = req.params.parentId;

    db.student
      .findOne({
        where: {
          parentId: parentId
        }
      })
      .then(student => {
        // console.log(student);
        res.status(200).send(student);
      })
      .catch(err => {
        console.log(err.response);
        res.status(500).send(err.response);
      });
  });

  app.post('/api/createStudent', (req, res) => {
    db.student
      .create(req.body)
      .then(response => {
        console.log(response.dataValues);
        res.status(200).send({
          message: 'Student(s) Added'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err.response);
      });
  });
};
