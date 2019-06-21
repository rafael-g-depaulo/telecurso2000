//----------------------------------------------------------------------------
// forEach*
// *(forEach não é como os outros. não é puro)

// ------------------ comportamento que eu quero
// eu quero mostrar na tela todos os elementos da arrInicial
const arrInicial = [1, 2, 3, 4, 5]

for (let i = 0; i < arrInicial.length; i++) {
  console.log(arrInicial[i])  // 1 // 2 // 3 // 4 // 5
}

// ------------------ a mesma coisa usando forEach()
arrInicial.forEach(console.log)
arrInicial.forEach(x => console.log('aaaaaaaaaaa olha isso' + x))

arrInicial.forEach(x => '_' + -1 * Math.pow(x, 2) + '_') //não faz nada
