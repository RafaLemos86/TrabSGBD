// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('./database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Departamento = connection.define('departamentos', {
    projNumero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    projLocal: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Dnum: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Departamento.sync({
//     force: true
// });


module.exports = Departamento;