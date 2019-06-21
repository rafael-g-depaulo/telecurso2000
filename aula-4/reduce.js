// quero a soma de todos os números da arrInicial
const arrInicial = [1, 2, 3, 4, 5]
let resAcumulado = 0

for (let i = 0; i < arrInicial.length; i++) {
  resAcumulado += arrInicial[i]
}

const resFinal = resAcumulado

console.log(resFinal) // 15