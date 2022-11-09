const { Sequelize } = require('sequelize');

// conectando
const connection = new Sequelize('empresa', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = connection