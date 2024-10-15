const express = require('express')
const mysql = require('mysql')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "etl",
});



app.post("/users/insert", async (req, res) => {
    const dados = req.body

    console.log(dados)


    for (const dado of dados) {
        const sql = `INSERT INTO users (NIF, Nome, Idade, Genero, Cargo, Salario) VALUES ('${dado.NIF}', '${dado.Nome}', '${dado.Idade}', '${dado.Genero}', '${dado.Cargo}', '${dado.Salario}')`;

        await conn.query(sql, function (err) {
            if (err) {
                console.log(`Erro na query: ${err}`);
            }


        });
    }

    res.status(200).json({ message: "Criado com sucesso: "})

});


conn.connect(function (err) {
    if (err) {
        console.log(`Erro: ${err}`);
    }

    console.log("Conectado à base de dados");

    app.listen(3000);
});