//Template String: É uma string modelo. Serve para facilitar a concatenação entre strings.

const nome = 'Loui';
const cidadeNascimento = 'Fazenda Rio Grande';
const idade = 22;

const apresentacao = 'Meu nome é ' + nome + ', sou de ' + cidadeNascimento + ' e tenho ' + idade + ' anos.';

console.log(apresentacao);

// Ao invés das aspas, utilizamos o acento craze ` e incluimos as váriaveis dentro de chaves ${variavel}.
const apresentacaoTemplate = `Olá! Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeNascimento}.`

console.log(apresentacaoTemplate);