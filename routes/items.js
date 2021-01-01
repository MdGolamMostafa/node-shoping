const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get request for items");
});

router.get('/get-items-details', (req, res)=> {
    res.send("Get request specific item");
});

module.exports = router;