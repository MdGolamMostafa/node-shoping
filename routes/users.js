const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a USER');
});

router.get('/id',function (req, res,next){
  res.send('respond with a ID');
});

module.exports = router;
