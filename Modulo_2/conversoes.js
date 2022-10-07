/* 
Entendendo um pouco mais sobre os tipos de dados
Como tratamos tipos de dados em conjunto com booleanos
*/

//Conversão implícita: Permite que convertamos um tipo de dado em outro.
const numero = 8;
const numeroString = '8';
const numeroStringLetra = '85p'
let telefone = 12341234;

console.log('Comparação entre tipos diferentes: ' + (numeroString === numero));

    //O JavaScript converteu a string de número em número, fazendo com que a comparação retorne true.
console.log('Comparação implícita: ' + (numeroString == numero));
    //O número é tranformado em string e ocorre a concatenação das variáveis.
console.log('Soma de tipos diferentes: ' + (numero + numeroString));

//Conversão explícita: Pode ser feita com duas funções nativas do javascript
/* Number() -> Transforma uma string em um número;
        Se tentarmos converter uma string que não possui apenas números, nosso retorno será NaN.
   String() -> Transforma um número em uma string.
        Outra opção para transformarmos um valor em String é usar o toString()
*/
console.log('Soma de tipos diferentes com conversão de tipo: ' + (numero + Number(numeroString)));
console.log('Exemplo de conversão de string que não possui só números: ' + Number(numeroStringLetra));
console.log("Conversão com toString(): " + telefone.toString());

/*
var, if e const são palavras reservadas do JavaScript, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.
Palavras que não podem ser usadas como nome de variável:
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield
*/