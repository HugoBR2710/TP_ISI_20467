const User = require("../models/Product.js");

module.exports = class ProductController {
  // static async showProducts(req, res) {
  //     const products = await Product.find().lean()

  //     res.render('products/all', { products })
  // }

  // static createProduct(req, res) {
  //     res.render('products/create')
  // }

  static createProductPost(req, res) {
    const Nome = req.body.Nome;
    const Telemovel = req.body.Telemovel;
    const Referencia = req.body.Referencia;
    const Familia = req.body.Familia;
    const Nacionalidade = req.body.Nacionalidade;
    const Pedidos = req.body.Pedidos;
    const Notas = req.body.Notas;
    const Visitas = req.body.Visitas;

    const user = new User({
      Nome,
      Telemovel,
      Referencia,
      Familia,
      Nacionalidade,
      Pedidos,
      Notas,
      Visitas,
    });

    try {
      user.save();
      res.status(201).json({ message: "Registado com sucesso: ", user });
    } catch (error) {
      res.status(501).json({ message: "Erro na criação de beneficiário " });
    }
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
};
