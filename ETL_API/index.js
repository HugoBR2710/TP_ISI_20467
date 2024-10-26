const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const FileStore = require('session-file-store')(session)
const UserController = require('./controllers/UserController')
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const loginRoutes = require('./routes/loginRoutes')

//Template engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(bodyParser.text({ type: 'application/xml', limit: '10mb' }));

//read body
app.use(
    express.urlencoded({
        extended: true
    })
)

//Increase the limit of JSON file
app.use(express.json({limit: "50mb"}))

//Declaration of public folder 
app.use(express.static('public'))

//SESSION MIDDLEWARE
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        saveUninitialized: false,
        resave: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)

//SET SESSION TO RESPONSE
app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

//Principal endpoint
app.use('/users', userRoutes)
app.use('/auth', loginRoutes)

//Server listen on port 3000
app.listen(3000)