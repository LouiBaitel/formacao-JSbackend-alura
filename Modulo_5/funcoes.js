//Funções: Isolam blocos de código que podem ser chamados/invocados quando forem necessários ao longo do código.

let x = '';
console.log(x);

x = 'Oi';
console.log(x);

//1) Declaração da função
         //nome        //parâmetro necessário para execução.
function imprimeTexto(texto){
    console.log(texto);
}

//2) Execução da função
imprimeTexto('Bom dia');
imprimeTexto('Veja só que loucura');


function soma(){
    const result = 2+2;
    return result; //O return deve ser a ultima linha da função
}

console.log(soma());
imprimeTexto(soma());

/*
Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
Math.sqrt() : Retorna a raiz quadrada de um número.
Math.min(): Retorna o menor valor entre os argumentos.
Math.max(): Retorna o maior valor entre os argumentos.
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description
*/
