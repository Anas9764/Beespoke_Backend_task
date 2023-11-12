const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Product Search API
router.get('/product-search', productController.productSearch);


module.exports = router;
