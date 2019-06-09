//----------------------------------------------------------------------------
// map
// ------------------ comportamento que eu quero
// quero uma string no formato '_num_', em que num é o negativo do quadrado de cada número da arrInicial
const arrInicial = [1, 2, 3, 4, 5]
const arrFinal = []

for (let i = 0; i < arrInicial.length; i++) {
  const valueTransformed = '_' + -1 * Math.pow(arrInicial[i], 2) + '_'
  arrFinal[i] = valueTransformed
}

console.log(arrFinal) // ['_-1_', '_-4_', '_-9_', '_-16_', '_-25_']


// ------------------ a mesma coisa usando map()
const arrFinal2 = [1, 2, 3, 4, 5].map(x => '_' + -1 * Math.pow(x, 2) + '_')
// arr.map((value, index) => {new_value}) // sintaxe para usar .map()
// arr.map((value, index, arrRef) => {new_value}) // sintaxe para usar .map()

