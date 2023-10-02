console.log('Olá, JavaScript!')

var userName = 'Breno Martinez'

document.getElementById('user-name').innerHTML = userName

// Variáveis //


 var nome = 'Mestre Yoda'
 var idade = 100
 var jedi = true

// console.log(typeof nome)
// console.log(idade)
// console.log(jedi)


// // Operadores matemáticos //


// var n1 = 5
// var n2 = 5

// var total = n1 + n2


// // Funções //


// function soma(n1, n2) {
//     console.log(n1 + n2)

// }

// soma(5, 100)


// function boasVindas(nome) {
//     alert('Seja bem vindo(a), ' + nome + '!')
// }

// boasVindas('Breno')


// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 10)+

// function soma(n1, n2){
//     return n1 + n2
// }

// var resultado = soma (5,5)
// console.log(resultado)

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que não aceitam o cartão de debido ou credito

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais 
// Quando faço um saque de 500 reais 
// Então o valor do saque deve ser deduzido do meu saldo 

var saldo = 1000

function saque(valor){
    
    // Cenario 2: Saque com valor superior ao saldo
    // Dado que meu saldo é de 1000 reais  
    // Quando faço um saque de 1001 reais 
    // Então não deve deduzir do meu saldo
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo
    if(valor > saldo){
        console.log('Valor do saque superior ao saldo')
    } 
    
    // Cenario 3: Saque com valor máximo 
    // Dado que meu saldo é de 1000 reais 
    // E o valor maximo por operação é de 700
    // Quando faço um saque no valor de 701 reais
    // Então não deve deduzir do meu saldo
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido
    else if (valor > 700) {
        console.log('Valor do saque é superior ao maximo permitido por operação')
    }

    else{
        saldo = saldo - valor
    }


}

saque(701)
console.log(saldo)


// Arrays //

// var gaveteiro = ['Meias', 'Gravatas', 'Cuecas', 'Documentos']

// console.log(gaveteiro[3])

 var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO') // adicionando mais um objeto para minha lista
// personagens.pop() //removendo o ultimo objeto da lista

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// }) // filtro para ignorar um determinado item
// filtro busca por todos os objetos diferente do parametro informado 

// console.log(personagens)

// Controles de repetição (Loops) 

// personagens.forEach(function(p){
//     console.log(p)
// })

// //ou

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 4; i++) {
//     console.log(personagens[i])
// }

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

// const nome = 'Darth Vader'
// console.log(nome)
// nome = 'Mestre Yoda'
// console.log(nome)