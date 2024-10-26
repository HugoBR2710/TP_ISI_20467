const mongoose = require('mongoose')
const { Schema } = mongoose

const Login = mongoose.model('login', new Schema ({
    username : {type: String, required: true },
    password : {type: String, required: true },
    email : { type: String, required: true }
}),

)

module.exports = Login