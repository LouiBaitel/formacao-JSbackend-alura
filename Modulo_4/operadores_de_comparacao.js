// == Faz uma comparação implícita somente dos valores das variáveis;
// === Faz uma comparação tanto o valor da variável quanto seu tipo;
    // Nas boas práticas, orienta-se que a comparação seja feita somente com ===. Ainda, é necessário que a conversão dos valores das variáveis seja feito de forma explícita.


const numero = 5;
const texto ='5';

console.log(numero == texto);
console.log(texto === numero);

console.log(typeof numero); 
console.log(typeof texto);

//Conversão explícita
Number();
String();
toString();