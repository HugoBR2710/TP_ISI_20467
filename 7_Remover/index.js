const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const productRoutes = require('./routes/productRoutes')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productRoutes)

app.listen(3000)