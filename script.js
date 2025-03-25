console.log("Oi mundo")
// Variáveis
let nome = "João"; // Variável mutável (pode ser alterada)
const idade = 30; // Variável imutável (constante)

// Tipos de dados
let texto = "Olá, mundo!"; // String
let numero = 10; // Número inteiro
let decimal = 3.14; // Número decimal
let booleano = true; // Booleano (verdadeiro ou falso)
let indefinido; // Undefined
let nulo = null; // Null

// Saída no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Texto:", texto);
console.log("Número:", numero);
console.log("Decimal:", decimal);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);

// Operadores aritméticos
let soma = numero + 5;
let subtracao = numero - 3;
let multiplicacao = numero * 2;
let divisao = numero / 2;
let resto = numero % 3;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto:", resto);

// Estruturas de controle
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

for (let i = 0; i < 5; i++) {
  console.log("Iteração:", i);
}

let contador = 0;
while (contador < 3) {
  console.log("Contador:", contador);
  contador++;
}

// Funções
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

let mensagem = saudacao("Maria");
console.log(mensagem);

// Arrays
let frutas = ["maçã", "banana", "laranja"];
console.log("Frutas:", frutas[0]); // Acessa o primeiro elemento

// Objetos
let pessoa = {
  nome: "Pedro",
  idade: 25,
  profissao: "Engenheiro"
};

console.log("Pessoa:", pessoa.nome); // Acessa a propriedade "nome"