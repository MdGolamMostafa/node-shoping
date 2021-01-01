var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send("Get request user ");
});

router.get('/get-user-details', (req, res)=> {
  res.send("Get request specific User");
});

module.exports = router;