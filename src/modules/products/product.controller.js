const express = require('express');
const router = express.Router();
const productService = require('./product.service');
// Another way of importing members from other files
// const { getProducts, addProducts, editProducts, deleteProducts} = require('./product.service');

router.get('/products', productService.getProducts)
router.post('/products', productService.addProducts)
router.put('/products/:id', productService.editProducts)
router.delete('/products/:id', productService.deleteProducts)

module.exports = router;