// exercício:
// 1. eu quero 4 funções que recebam um número e retornem ele multiplicado por 2, 3, 5, 7 respectivamente

// primeira tentativa
const funk1 = x => x*2
const funk2 = x => x*3
const funk3 = x => x*5
const funk4 = x => x*7

// segunda tentativa
// const mul = (x, y) => x*y
// const mul2 = x => mul(x,2)

function loucura (y) {
  return function(x){
    return (x * y)
  }
}

const baixahealing = (y) => (x) => (x*y)
const multiply2 = loucura(2)
const multiply3 = loucura(3)
const multiply5 = loucura(5)
const multiply7 = loucura(7)


console.log(multiply2(3),multiply3(3),multiply5(3),multiply7(3))


const mult2 = baixahealing(2)
const mult3 = baixahealing(3)
const mult5 = baixahealing(5)
const mult7 = baixahealing(7)

// """gabarito"""
const makeMultiplier1 = x => y => x * y
const dobrar = multiplicateByNum(2)    //(y => 2 * y)
const triplicar = multiplicateByNum(3) //(y => 3 * y)