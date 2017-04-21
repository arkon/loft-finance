const api = require('../../modules/finance-api');

module.exports = (app) => {
  app.get('/api/symbol/:id', (req, res, next) => {
    api(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  });
};
