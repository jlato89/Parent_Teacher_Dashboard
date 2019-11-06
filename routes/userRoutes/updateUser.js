const db = require('../../models');

module.exports = app => {
  app.put('/api/updateUser', (req, res) => {
    db.user.update(req.body, {
      where: { id: req.body.id }
    })
    .then(result => {
      console.log('Records Updated: ', result);
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(result);
    });
  });
};
