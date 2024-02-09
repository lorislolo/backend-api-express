const endereco = {
    rua: 'Rua das Margaridas',
    numero: 123,
    bairro: 'Jardim das Flores',
    cidade: 'Suzano',
    estado: 'SP'
}
const user = { 
    name: 'Lorena',
    idade: 17,
    email: 'lorena.macedo@aluno.ifsp.edu.br',
    cidade: 'Suzano',
    aluno: true,
    end: endereco
}



console.log(user.name, user.idade, user.email, user.cidade, user.aluno, user.end);