//Import dos pacotes express e router para api 
const express = require('express')
const router = express.Router()

//import da classe do controlador.
const UserController = require('../controllers/UserController.js')

//middleware para dar check ao user
const checkAuth = require('../helpers/auth.js').checkAuth

//endpoints API
router.get('/', checkAuth, UserController.showUsers)
router.post('/create', checkAuth, UserController.insertUserPost)
router.post('/xml', UserController.recieveXML)
router.get('/landingpage', checkAuth, UserController.LandingPage)
router.get('/statistics', checkAuth, UserController.statistics)
   
module.exports = router