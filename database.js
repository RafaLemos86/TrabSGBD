const { Sequelize } = require('sequelize');

// conectando
const connection = new Sequelize('empresa', 'postgres', '0000', {
    host: "127.0.0.1",
    dialect: 'postgres'
});


module.exports = connection