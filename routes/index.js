var router = require('express').Router();

var nytimes = require('./nytimes')

router.get('/', function (req, res) {
  res.status(200).send('Welcome to News');
});

router.use('/nytimes', nytimes);

module.exports = router;
