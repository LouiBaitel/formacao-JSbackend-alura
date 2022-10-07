/* 
Strings: São variáveis do tipo texto. Sendo caracteres, pontuações, etc.. 
Tudo que não é número ou booleano é considerado como String.
São descritas dentro de aspas simples ('') ou aspas duplas ("")
Se colocarmos números dentro de aspas, eles serão considerados como números
*/

//Type String

const primeiroTexto = 'Olá, mundo!';
const segundoTexto = "Hello, world!";
const senha = "senha@452";
const stringNumeros = "465432";
const citacao = '"Este é um exemplo de citação, onde é necessário utilizar tanto as aspas simples pra abrir a string e as aspas duplas que serão impressas ao usuário."';
console.log(citacao);
 
const saudacao = 'Olá! Meu nome é ';
const nome = "Loui";

//Concatenação: Consiste em juntar duas partes de texto. Necessário utilizar o operador de soma (+)

console.log(saudacao + nome);

/*
Codificação de caracteres ou Character encoding: O padrão UTF (de Unicode Transformation Format ou “formato de conversão de unicode”, em tradução livre) é utilizado como padrão na web até hoje.
O Unicode tem códigos específicos para “cifrar” e “decifrar” caracteres de mais de 150 idiomas antigos e modernos, e também diversos outros conjuntos de caracteres como símbolos matemáticos e inclusive emojs.
*/
// Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)