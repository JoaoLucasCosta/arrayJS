// Procurando por uma fruta específica
let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
 let frutaProcurada = "Laranja"

 for (let i = 0; i < frutas.length; i++) {
  console.log(`Verificando: ${frutas[i]}`)

 if (frutas[i] === frutaProcurada) {
    console.log(`Fruta encontrada: ${frutas[i]}`);
   break; // Interrompe o loop ao encontrar a fruta
 }
 }

 let numero = [1, 2, 3, 4, 5,6,7,8];
 let soma = 0;

for (let i = 0; i < numero.length; i++) {
 soma += numero[i]; // Adiciona o número atual à variável 'soma'
}
console.log("A soma dos números é:", soma);

 let valores = [2, 4, 6, 8];
for (let i = 0; i < valores.length; i++) {
 valores[i] *= 7; // Multiplica cada valor por 2
}
console.log("Array modificado:", valores);

// forçando loop infinito com condição que nunca vai mudar
for (let i = 0; 1 == 1; i++) {     
   console.log(`${i}`)  
 }

//PRESSIONAR CTRL + C PARA ENCERRAR O LOOP INFINITO
// FOREACH - "PARA CADA" - EXECUTA UMA FUNÇÃO PARA CADA ITEM DO ARRAY

let numeros = [10, 20, 30]

// Definindo uma função que será usada pelo forEach
function exibirNumero(numeros) {
  console.log(`O número é: ${numeros}`)
}

exibirNumero(numeros[0])    //impressao manual de cada elemento
exibirNumero(numeros[1])
exibirNumero(numeros[2])

numeros.forEach(exibirNumero)  //impressao automatizada usando foreach


// Usando o forEach para percorrer o array e chamar a função p/ cada elemento
numeros.forEach(exibirNumero)