const express = require('express')

const app = express()

const conn = require('./db/conn')

const productRoutes = require('./routes/productRoutes')


//read body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', productRoutes)

app.listen(3000)