// voltando pro exemplo do map()

// ------------------ comportamento que eu quero
// quero uma string no formato '_num_', em que num é o negativo do quadrado de cada número da arrInicial

// "resposta" de antes
const arrFinal1 = [1, 2, 3, 4, 5].map(x => '_' + -1 * Math.pow(x, 2) + '_')
console.log("arrFinal1:", arrFinal1)

const quadrado = x => x * x
const negate = x => -x
const put_ = num => `_${num}_`

// mesma coisa de antes
const arrFinal2 = [1, 2, 3, 4, 5].map(x => put_(negate(quadrado(x))))
console.log("arrFinal2:", arrFinal2)

const arrParcial1 = [1, 2, 3, 4, 5].map(quadrado)                       // exatamente a mesma coisa que [1, 4, 9, 16, 25]
const arrParcial2 = [1, 2, 3, 4, 5].map(quadrado).map(negate)           // exatamente a mesma coisa que [1, 4, 9, 16, 25].map(negate)
const arrParcial3 = [1, 2, 3, 4, 5].map(quadrado).map(negate).map(put_) // exatamente a mesma coisa que arrParcial2.map(put_)
console.log("arrParcial1", arrParcial1)
console.log("arrParcial2", arrParcial2)
console.log("arrParcial3", arrParcial3)

const arrFinal3 = [1, 2, 3, 4, 5]
  .map(quadrado)
  .map(negate)
  .map(put_)
console.log("arrFinal3:", arrFinal3)

const arrFinal4 = [1, 2, 3, 4, 5]
  .map(x => x ** 2)
  .map(x => -x)
  .map(x => `_${x}_`)
console.log("arrParcial4:", arrFinal4)