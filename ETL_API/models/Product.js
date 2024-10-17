const mongoose = require('mongoose')
const { Schema } = mongoose

const User = mongoose.model('User', new Schema({
    Nome: { type: String, required: true },
    Telemovel: { type: Number, required: true },
    Referencia: { type: Number, required: true },
    Familia: { type: String, reuired: true },
    Nacionalidade: { type: String, reuired: true },
    Pedidos: { type: String, reuired: true },
    Notas: { type: String, reuired: true },
    Visitas: { type: Number, reuired: true }
}),
)


module.exports = User