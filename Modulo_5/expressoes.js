/*
Declaração de função
*/
function minhaFuncao(param){
    //bloco de código
}
minhaFuncao('param');

/*
Expressão de função: É uma outra forma de escrever função; Não é dado um nome para função, e sim o nome da variável.
A variável deve ser declarada como const.
*/
const soma = function(num1, num2){return num1 + num2};
console.log(soma(1, 1));

//Principal diferença: HOSTING. Funções e variáveis são 'lidas' primeiro pelo código.

console.log(apresentar());
function apresentar(){
    return "olá"
}

/*
Para acessarmos a expressão de função, é necessário declará-la antes de invocá-la. Isso acontece porque a função é criada como u8ma const.
*/
// console.log(subtrai(2,1));
const subtrai = function(num1, num2){return num1 - num2};
console.log(subtrai(2,1));