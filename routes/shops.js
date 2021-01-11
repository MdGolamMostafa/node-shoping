const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.post('/',shopController.create);
router.get('/getAll',shopController.getAll);


module.exports = router;