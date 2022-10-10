// Operador ternário: Age como um if, fazendo uma comparação entre dois parâmentros, porém em uma única linha. 

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima){
    console.log('Pode beber!');
} else{
    console.log('Não pode beber!');
}

//exemplo de ternário
//Incluiímos primeiro a condição, separamos com ? o que sera executado caso o if seja true e : o que será executado em else para false.

console.log(idadeCliente >= idadeMinima ? 'Pode beber!' : 'Não pode beber!' );