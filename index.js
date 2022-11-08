const { Sequelize } = require('sequelize');

// conectando
const connection = new Sequelize('empresa', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres'
});


// testando conexao
connection
    .authenticate()
    .then(() => {
        console.log('conexao feita no banco')
    }).catch((error) => {
        console.log(error)
    })
