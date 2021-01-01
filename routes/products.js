const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get request your Products");
});

router.get('/get-product-details', (req, res)=> {
    res.send("Get request specific Product");
});

module.exports = router;