const db = require('../../models');

module.exports = app => {
  app.put('/api/updateUser', (req, res) => {
    db.user
      .update(req.body, {
        where: { id: req.body.id }
      })
      .then(rowUpdated => {
        if (rowUpdated === 1) {
          console.log('Updated successfully');
          res.status(200).json({ msg: 'Updated successfully' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'There was an error' });
      });
  });
};
