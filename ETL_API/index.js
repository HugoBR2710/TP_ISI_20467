const express = require('express')

const app = express()


const productRoutes = require('./routes/productRoutes')


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