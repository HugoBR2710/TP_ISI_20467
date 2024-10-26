const xml2js = require('xml2js')

//Import do model/schema do user
const User = require("../models/User.js");
const Login = require("../models/Login.js");

//Class ProductController com as devidas funções
module.exports = class UserController {

  //Insert users into BD
  static async insertUserPost(req, res) {

    const dados = req.body

    if (!Array.isArray(dados)) {
      return res.status(400).json({ message: "Formato inválido." });
    }

    try {
      const userSave = await User.insertMany(dados)
      res.status(201)

    } catch (error) {
      console.error("Erro", error)
      return res.status(501).json({ message: "Erro na criação de beneficiário ", error });
    }

  }

  //Recieving xml by KNIME
  static async recieveXML(req, res) {
    const xml = req.body;

    //XML analising
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        return res.status(400).send("Erro ao analisar XML");
      }
      
      console.dir(result, { depth: null, colors: true });
      // console.log(result.Beneficiarios.item)
      res.json(result);
    });
  }

  //List all users
  static async showUsers(req, res) {

    try {
      const users = await User.find().lean()
      return res.render('users/home', { users })
    } catch (error) {
      return res.status(501).json({ message: "Erro ao efetuar o get à bd.", error })
    }


  }

  //Landing page
  static async LandingPage(req, res) {
    const userId = req.session.userid
    try {
      const user = await Login.findById({ _id: userId })
      const userName = user.username

      return res.render('users/landingPage', { userName })
    } catch (error) {
      res.status(501).json(error)
    }

  }

  //statistics page
  static async statistics(req, res) {
    try {
      const users = await User.find({}, { Visitas: 1, Nome: 1 }).lean();

      const totalVisitas = users.reduce((total, user) => total + (user.Visitas || 0), 0);

      return res.render('users/statistics', { totalVisitas });
    } catch (error) {

      return res.status(500).json({ message: "Erro ao obter estatísticas.", error });
    }
  }

};
