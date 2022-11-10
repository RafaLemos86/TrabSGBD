const connection = require("./database");
const Departamentos = require("./Departamento");
const Projeto = require('./Projeto');
const Funcionarios = require('./Funcionario')



// INSERCAO NA TABELA PROJETO

// for (i = 1; i <= 2000; i++) {
//     Projeto.create({
//         projNumero: i,
//         projLocal: i,
//         Dnum: i
//     })
// };

// INSERCAO NA TABELA DEPARTAMENTOS

// for (i = 1; i <= 50; i++) {
//     Departamentos.create({
//         Dnum: i,
//         Cpf_ger: i
//     });
// }

// INSERCAO NA TABELA FUNCIONARIOS

// for (i = 1; i <= 10000; i++) {
//     Funcionarios.create({
//         Cpf: i,
//         Dnr: i,
//         Salario: i
//     });
// }




// testando conexao
connection
    .authenticate()
    .then(() => {
        console.log('conexao feita no banco')
    }).catch((error) => {
        console.log(error)
    })
