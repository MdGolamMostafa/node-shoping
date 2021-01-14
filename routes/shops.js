const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

router.post('/',shopController.create);
router.get('/getAll',shopController.getAll);
router.get('/:id',shopController.getById);
router.put('/update/:id',shopController.updateDataId);
router.delete('/delete/:id',shopController.deleteDataId);


// router.get('/:id',shopController.getByUpdate);


module.exports = router;