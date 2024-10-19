const User = require('../models/Product.js')

module.exports = class ProductController {

    static async showUsers(req, res) {

        try {
            const users = await User.find().lean()
            res.status(201).json({ users })
        } catch (error) {
            res.status(501).json({message: "Erro ao efetuar o get à bd.", error})
        }

    }

    static createProduct(req, res) {
        res.render('products/create')
    }

    static createProductPost(req, res) {
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new User({ name, image, price, description })

        product.save()

        res.redirect('/products')
    }

    // static async getProduct(req, res) {
    //     const id = req.params.id

    //     const product = await Product.findById(id).lean()

    //     res.render('products/product', { product })
    // }

    // static async removeProduct(req, res) {
    //     const id = req.params.id

    //     await Product.deleteOne({_id: id})

    //     res.redirect('/products')
    // }

    // static async editProduct(req, res) {
    //     const id = req.params.id

    //     const product = await Product.findById(id).lean()

    //     res.render('products/edit', { product })
    // }

    // static async editProductPost(req, res) {

    //     const id = req.body.id
    //     const name = req.body.name
    //     const image = req.body.image
    //     const price = req.body.price
    //     const description = req.body.description

    //     const product = {name, image, price, description}

    //     await Product.updateOne({_id: id}, product)

    //     res.redirect('/products')        
    // }
}