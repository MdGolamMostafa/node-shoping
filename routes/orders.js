var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send("Get request Orders ");
});

router.get('/get-order-details', (req, res)=> {
  res.send("Get request specific Order");
});

module.exports = router;