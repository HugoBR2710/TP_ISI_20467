//Import dos pacotes express e router para api 
const express = require('express')
const router = express.Router()

//import da classe do controlador.
const LoginController = require('../controllers/LoginController')

//endpoints API
router.get('/login', LoginController.Login)
router.post('/login', LoginController.LoginPost)
router.get('/register', LoginController.Register)
router.post('/register', LoginController.RegisterPost)
router.get('/logout', LoginController.logout)
   
module.exports = router