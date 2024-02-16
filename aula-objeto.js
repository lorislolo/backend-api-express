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
//vendo como juntar dois objetos
const obj1 ={
    prop1: 1,
    prop2: 2,
}

const obj2 ={
    prop1: 3,
    prop2: 4,
}

const tudo = {...obj1, obj2, prop1: 5}
//editar
tudo.prop4 = 6
//deletar
delete tudo.prop2
//adicionar
tudo.prop5 = 5
//adicionar criando outro objeto
tudo.prop6 = {teste1: '1', teste2: '2'}
//const tudo = { prop1: 1, prop2: 2,} (MESMO QUE A LINHA DE CIMA)
console.log(tudo);

console.log(user.name, user.idade, user.email, user.cidade, user.aluno, user.end);