const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get request your Products");
});

router.get('/get-product-details/:id', (req, res)=> {
    res.send("Get request specific Product" + req.params.id);
});

module.exports = router;