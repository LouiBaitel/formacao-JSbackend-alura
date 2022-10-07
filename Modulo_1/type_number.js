/*
node nome_arquivo.js no terminal faz com que rodemos o código
*/

//------------------------- Tipo Number ---------------------

const meu_numero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

//Conseguimos fazer essa operação porque as váriáveis sendo utilizadas são do tipo número
const operacaoSoma = primeiroNumero + segundoNumero;
const operacaoSubtracao = primeiroNumero - segundoNumero;
const operacaoDivisao = primeiroNumero / segundoNumero;
const operacaoMultiplicacao = primeiroNumero + segundoNumero;

console.log('Primeiro número: '+ primeiroNumero + '\nSegundo número: '+ segundoNumero);
console.log('Soma: '+ operacaoSoma);
console.log('Subtração: '+ operacaoSubtracao);
console.log('Divisão: '+ operacaoDivisao);
console.log('Multiplicação: '+ operacaoMultiplicacao);

/* 
Ponto flutuantes, são os conhecidos floats, ou números que possuem casas decimais após o ponto. 
Lembre-se sempre de utilizar . ao invés da virgula
Caso o número inicie com 0, não é necessário digitá-lo, apenas o ponto
As operações usadas com números inteiros são as mesmas para os flutuantes.
*/

const numPontoFlutuante = 3.14;
const numPontoFlutuanteoffZero = .56;

const operacaoComFlutuante = primeiroNumero / numPontoFlutuante;

console.log('Exemplo de divisão com ponto flutuante: ' + operacaoComFlutuante);

//Nan -> Not a Number. Temos esse retorno quando tentamos realizar alguma operação com um elemento que não é número

const pedacoTexto = 'Teste';
console.log('Exemplo de NaN: ' + (pedacoTexto * segundoNumero));