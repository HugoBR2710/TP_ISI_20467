//Import model/schema from Login
const Login = require('../models/Login')
const bcrypt = require('bcryptjs')

module.exports = class LoginController {

    //Login page render
    static async Login(req, res) {

        return res.render('auth/login')
    }

    //Login function
    static async LoginPost(req, res) {
        const { email, password } = req.body

        //Find user
        const users = await Login.findOne({ email: email })

        //Check if user exists
        if (!users) {
            return res.status(501).json({ message: "Esta conta não existe" })
        }

        //Check password

        const passwordMatch = bcrypt.compare(password, users.password)

        if (!passwordMatch) {
            return res.status(501).json({ message: "Password incorreta" })
        }

        // INITIALIZE SESSION
        req.session.userid = users.id

        req.session.save(() => {
            return res.redirect('/users/landingpage')
        })


    }

    //Register page render
    static async Register(req, res) {

        res.render('auth/register')
    }

    //Register function
    static async RegisterPost(req, res) {

        const username = req.body.name
        const email = req.body.email
        const password = req.body.password
        // const Confirmpassword = req.body.confirmpassword

        //create salt password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const newUser = new Login({ username, email, password: hashedPassword })

        try {

            const userAdded = await newUser.save()

            // INITIALIZE SESSION
            req.session.userid = userAdded.id

            req.session.save(() => {
                res.status(201)
                res.redirect('/users/landingpage')
            })


        } catch (error) {
            res.status(501).json({ message: "Erro na criação de user" })
        }

    }

    //logout function
    static async logout(req, res) {
        req.session.destroy()
        res.redirect('/auth/login')
    }
}