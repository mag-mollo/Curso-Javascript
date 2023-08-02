//TIPO NUMBER 

//Number
const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero / segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante
const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuanteSemZero = .5;

//operaçôes
const novaOperacao = numeroPontoFlutuante / numeroPontoFlutuanteSemZero;

console.log(novaOperacao)

//Nan ==> Not a NUmber ( não é numero)
const  alura = "Alura";

console.log( alura * primeiroNumero)





//TIPO BOOLEANO

//exemplos de uso 
const testeNumero = 5;
const segundoTesteNumero = 5 ;
let cadastroAtivado = true;

console.log(testeNumero === segundoTesteNumero);

const textoTeste = "Alura";
const textoTeste2 = "alura";

console.log ( textoTeste === textoTeste2);

const bacharel = false;

console.log (bacharel == 1)
const usuarioLogado = true
const contapaga = false

// truthy ou falsy

// 0 => false
// 1 => true

console.log( 0 == false)
console.log(" " == false)

console.log( 1 == true)

//null ( vazio ou nada)
let minhaVar;
let varNull = null;

console.log( minhaVar)
console.log(varNull)

let number = 3;
let texto = "Alura";

console.log( typeof minhaVar) // typeof -> qual tipo de dado sendo guardado na variavel 
console.log( typeof varNull)





//TIPO STRING

//exemplos de string
const texto1 = "Olá Mundo!";
const texto2 = 'Olá Mundo!';
const senha = "senhaSuperSegura456!";
const numero= "34567";

const citacao = 'O Leo dissse "OIE"';  //diferenciar a cadeia de caracteres e citação

//tamplate string OU template literal

// concatenação

const citacao2 = "Meu nome é ";
const nome = "Leonardo" ;
console.log ( citacao2 + nome)


