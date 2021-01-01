const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get request reviews");
});

router.get('/get-review-details', (req, res)=> {
    res.send("Get request specific review");
});

module.exports = router;