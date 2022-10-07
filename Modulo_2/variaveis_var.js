//var: Pode ser declarada com um determinado valor, que pode ser substituido ao longo do código. Pode ser usada sem ser declarada.
//Não é muiuto utilizada pois pode gerar bugs em códigos mais complexos
var altura = 5;
var comprimento = 7;
//É possível declarar a variável sem a var na frente pois o js entende que é uma var, mas isso não é uma boa prática.
area = altura * comprimento;
console.log('Teste com declaração var: '+ area);
var area;

//let: Tipo de variável que só pode ser usada após ser declarada;
let forma = 'retangulo';
let alturaL = 5;
let comprimentoL = 7;
let areaL;

if (forma == 'retangulo') {
    areaL = alturaL * comprimentoL;
} else{
    areaL = (alturaL * comprimentoL) / 2
}

console.log('Teste com declaração let: '+ areaL);

//const: É uma constante, ou seja, não pode ser declarada sem valor, precisa ser declarada com um valor, que NÃO é alterado ao longo do código.

const formaC = 'quadrado';
const alturaC = 5;
const comprimentoC = 7; 

if (formaC == 'quadrado') {
    areaC = alturaC * comprimentoC;
} else{
    areaC = (alturaC * comprimentoC) / 2;   
}

console.log('Teste com declaração const: '+ areaC);

