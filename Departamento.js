// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('./database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Departamentos = connection.define('Departamento', {
    Dnum: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Cpf_ger: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Departamento.sync({
//     force: true
// });


module.exports = Departamentos;
