const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/auth', function(req, res, next) {
  res.send('Auth');
});

module.exports = router;
