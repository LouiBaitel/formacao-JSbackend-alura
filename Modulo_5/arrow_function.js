/*
Arrow function: Utiliza uma flecha na sua declaração. É uma novidade.
Informa-se primeiro o parâmetro, separado por => e colocamos apenas o retorno da função.
Não pode ser nomeada e sempre vem acompanhada de uma const.
Se o seu return tiver mais de uma linha, é necessário incluir as chaves e o return
Indicada para códigos menores.
*/

function apresentar(nome){
    return `Meu nome é ${nome}`
}

//Arrow function:
const apresentarARROW = nome => `Meu nome é ${nome}`;
const somaArrow = (num1, num2) => num1 + num2;
const somaNumPeq = (num1, num2) => {
    if (num1 > 10|| num2 > 10) {
        return 'Somente numeros de 1 a 9'
    } else{
        return num1 + num2;
    }
}

console.log(apresentarARROW('Loui'))
console.log(somaArrow(1,2));
console.log(somaNumPeq(1,2));