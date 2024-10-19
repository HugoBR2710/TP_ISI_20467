const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController.js')

// router.get('/create', ProductController.createProduct)
router.get('/', ProductController.showUsers)
router.post('/create', ProductController.createProductPost)
// router.post('/remove/:id', ProductController.removeProduct)
// router.get('/edit/:id', ProductController.editProduct)
// router.post('/edit', ProductController.editProductPost)
// router.get('/:id', ProductController.getProduct)    

module.exports = router