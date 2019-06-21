//----------------------------------------------------------------------------
// filter

// ------------------ comportamento que eu quero
// quero todos os números da arrInicial que forem pares
const arrInicial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrFinal = []

for (let i = 0; i < arrInicial.length; i++) {
  if (arrInicial[i] % 2 === 0)
    arrFinal.push(arrInicial[i])
}

console.log(arrFinal) // [2, 4, 6, 8, 10]

// ----------------- a mesma coisa usando filter()
const arrFinal2 = [1, 2, 3, 4, 5, 6].filter((x, i) => i % 2 === 0)
const arrFinal3 = arrInicial.filter(x => x % 2 === 0)
// arr.filter((value, index) => {boolean}) // sintaxe para usar .filter()
// arr.filter((value, index, arrRef) => {boolean}) // sintaxe para usar .filter()
