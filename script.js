//Perguntar ao usuario qual a o nome e a idade dele

//se o nome dele começar com J ou terminar com A deverá mostrar na tela
//uma mensagem que o nome começa com J ou termina com A.

//enquanto a idade dele for menor que 60 anos deverá acrescentar
//de 2 em 2 a idade até ser maior ou igual a 60

let nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite a sua idade: '))

// Se o nome começar com J
if (nome.toUpperCase().startsWith('J') && nome.toUpperCase().endsWith('A')) {
  document.write(`Seu nome é ${nome} começa com a letra "J" e 
   termina com a letra "A". A sua idade é ${idade} anos. <br> 
    <br>`)
} else if (nome.toUpperCase().startsWith('J')) {
  document.write(
    `Seu nome é ${nome} e começa coma letra "J". A sua idade é ${idade} anos. <br> <br>`
  )

  // Se o nome terminar com A
} else if (nome.toLocaleUpperCase().endsWith('A')) {
  document.write(`Seu nome é ${nome} e termina com a letra 
   "A". A sua idade é ${idade} anos. <br> <br>`)

  // Se o nome não começar com J ou terminar com A
} else {
  document.write(
    `Seu nome é ${nome} e não começa com a letra "J" nem termina com letra "A" e a sua idade é ${idade} anos. <br> <br>`
  )
}

// Enquanto a váriavel idade for menor que 60 criar um laço para contar de 2 em 2 até chegar em 60

for (let contador = idade; contador <= 60; contador += 2) {
  document.write(contador + ' ')
}
