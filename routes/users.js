var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send("Get request user ");
});

router.get('/get-user-details/:id', (req, res)=> {
  res.send("Get request specific User"+ req.params.id);
});

module.exports = router;