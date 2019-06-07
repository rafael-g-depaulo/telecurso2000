// quero o negativo do quadrado de cada número da arrInicial
const arrInicial = [1, 2, 3, 4, 5]
const arrFinal = []

for (let i = 0; i < arrInicial.length; i++) {
  if (arrInicial[i] % 2 === 0)
    arrFinal.push(arrInicial[i])
}

console.log(arrFinal) // [2, 4, 6, 8, 10]