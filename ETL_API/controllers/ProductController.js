const User = require("../models/Product.js");

module.exports = class ProductController {
  
    static async showUsers(req, res) {

        try {
            const users = await User.find().lean()
            res.status(201).json({ users })
        } catch (error) {
            res.status(501).json({message: "Erro ao efetuar o get à bd.", error})
        }

    }

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

};
