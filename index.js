const connection = require("./database")
const Departamento = require('./Departamento');





Departamento.create({
    projNumero: 1,
    projLocal: 1,
    Dnum: 1
}).then(() => {
    console.log('inserido')
}).catch((error) => {
    console.log(error)
})


// testando conexao
connection
    .authenticate()
    .then(() => {
        console.log('conexao feita no banco')
    }).catch((error) => {
        console.log(error)
    })
