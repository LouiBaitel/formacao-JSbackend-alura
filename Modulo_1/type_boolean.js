/*
Type Booolean: É um tipo muito utilizado para quando vamos realizar algum tipo de verificação. Admite apenas os valores de true (verdadeiro) e false (falso).
== Comparação
=== Compara o typo do elemento também
*/

const firstNumber = 6;
const secondNumber = 10;
let cadastroAtivo = false;

console.log(firstNumber === secondNumber); 

const texto1 = 'Alura';
const texto2 = 'a';
const firstNumberString = '6';

console.log(firstNumber === firstNumberString); //Retorna false, pois estamos verificando se além de serem iguais, são do mesmo tipo.
console.log(firstNumber == firstNumberString); //Retorna true, pois quando declaramos uma string que contém apeas números, o javascript ainda coonsegue lê-la como um número e verificar que são iguais.
