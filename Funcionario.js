// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('./database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Funcionarios = connection.define('Funcionario', {
    Cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Dnr: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Salario: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Funcionarios.sync({
//     force: true
// });


module.exports = Funcionarios;