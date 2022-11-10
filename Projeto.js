// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('./database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Projeto = connection.define('Projeto', {
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


module.exports = Projeto;