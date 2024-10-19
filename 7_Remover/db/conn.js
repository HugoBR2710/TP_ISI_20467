const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/testemongoose2')
    console.log("conectado com mongoose")
}

main().catch((err) => console.log(err))

module.exports = mongoose