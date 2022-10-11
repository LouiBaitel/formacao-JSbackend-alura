/*
Parametros: Servem para função receber informações para que seja executada.
O nome dos parâmetros variam conforme o tipo de parâmetro que desejamos receber.
Faz parte das boas práticas, passar uma quantidade pequena de parâmetros necessário na função.
Caso se depare com uma função que necessita de vários parâmetros, tente quebrá-la em funções menores, assim a manutenção do código fica facilitada.
*/
function soma(num1, num2){
    var result = num1 + num2;
    return result;
}

//Os parâmetros devem ser passados no momento da execução da função.
console.log(soma(4, 6));

function nomeIdade(nome, idade){
    return `Olá! Meu nome é ${nome} e tenho ${idade} anos.`;
}

//Se atentar a ordem dos parâmetros e argumento da chamada.
console.log(nomeIdade(13, 'Loui'));
console.log(nomeIdade('Loui', 22));


//Passando inicialmente um valor fixo para s parâmetros necessários na chamada da função, ao invoca-la, caso deixemos de informar algum argumento, não acontecera nenhum erro.
function multiplica(num1 = 1 , num2 = 1){
    return num1 * num2;
}
console.log(multiplica(soma(7,98))); //Faltando um argumento
console.log(multiplica(soma(4, 6), soma(5,8)));
