// Definindo o array
let frutas = ["Maçã", "Banana", "Laranja", "Melancia", "Uva"]

// Imprimindo manualmente, mas acessando os elementos do array
 console.log(`Elemento no índice 0: ${frutas[0]}`)
console.log(`Elemento no índice 1: ${frutas[1]}`)
 console.log(`Elemento no índice 2: ${frutas[2]}`)
console.log(`Elemento no índice 3: ${frutas[3]}`)
 console.log(`Elemento no índice 4: ${frutas[4]}`)

for (let i = 0; i <= 1000; i++) {  //3 parametros: inicio/condicao/incremento
    console.log(`Número: ${i}`)
   }


// Usando o loop for para percorrer o array de frutas:

//o contador 'i' começa no valor 0 e vai até frutas.length -1 (ultimo elemento do array)
for (let i = 0; i < frutas.length; i++) { 

//'frutas[i]' acessa o elemento no índice atual
console.log(`Elemento no índice ${i}: ${frutas[i]}`)  
}

