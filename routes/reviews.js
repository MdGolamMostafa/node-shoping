const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get request reviews");
});

router.get('/get-review-details/:id', (req, res)=> {
    res.send("Get request specific review" + req.params.id);
});

module.exports = router;