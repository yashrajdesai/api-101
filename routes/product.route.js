const router = require('express').Router();
const {addProduct, getAllproducts} = require('../controllers/product.controller');

router.post('/', addProduct);

router.get('/', getAllproducts);

module.exports = router;