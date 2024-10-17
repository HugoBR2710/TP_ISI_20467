const mongoose = require('mongoose')
const { Schema } = mongoose

const User = mongoose.model('User', new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, reuired: true }

}),
)


module.exports = User