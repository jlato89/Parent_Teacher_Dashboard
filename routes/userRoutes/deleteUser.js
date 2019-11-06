const db = require('../../models');

module.exports = app => {
  app.delete('/api/deleteUser', (req, res) => {
    db.user
      .destroy({
        where: {
          id: req.body.userId 
          //! maybe add a validation check to be sure request
          //! came from valid server.
        }
      })
      .then(rowDeleted => {
        if (rowDeleted === 1) {
          console.log('Deleted successfully');
          res.status(200).json({ msg: 'Deleted successfully'});
        }
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ msg: 'There was an error' });
      });
  });
};
