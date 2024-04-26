const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/todos', function(req, res, next) {
  res.send('todos');
});

module.exports = router;