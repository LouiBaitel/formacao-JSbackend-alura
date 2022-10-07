//booolean 

const usuarioLogado = true;
const contaPaga = false;

// Truthy or falsy
/*
0: Pode ser lido como false;
1: Pode ser lido como true;
*/
console.log('Falsy: '+ (0 == false)) //falsy: Elemento que assume o tipo false;
console.log('Falsy: '+ ('' == false)) //falsy

console.log('Truthy: '+ (1 == true)) //Truthy: Elemento que assume o tipo true;

//null: É um tipo de dado que representa o vazio.
let minhaVar = null;
console.log('Exemplo tipo null: ' +minhaVar);

//undefined: Tem-se uma variável declarada mas sem nenhum valor.
let minhaVar2;
console.log('Exemplo tipo undefined: ' + minhaVar2);

let numero = 3;
let texto = 'Alura';

    //Usando o typeof na frente da variável conseguimos identificar qual o seu tipo.
console.log('Exemplo da utilização de typeof: '+ (typeof numero)); 
console.log('Exemplo da utilização de typeof: '+ (typeof texto));
    //Retorna como object, pois quando foi criado, foi criado como um objeto. Esse é um bug dentro do JavaScript que não pretende-se ser consertado devido o impacto em códigos já existentes.
console.log('Exemplo da utilização de typeof para tipo null: '+ (typeof minhaVar));