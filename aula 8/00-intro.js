// CHAMAR UMA FUNÇÃO PURA TEM O MESMO RESULTADO DE SUBSTITUIR ELA PELA SUA EXPRESSÃO DE RETORNO
const dobrar = x => x * 2
// dobrar(3) === 3 * 2

const getDobrar = () => dobrar    // funcao de ordem maior (retorna uma função)
const doubleANumber = getDobrar()

console.log(dobrar(15))
console.log(doubleANumber(0.7))
console.log(getDobrar()(10))

const applyTwice = foo => (  arg => foo(foo(arg))  )
const applyTwice2 = (foo, arg) => foo(foo(arg))       // applyTwice2(dobrar, 4) === 16

const x = applyTwice(dobrar)
// applyTwice(dobrar) === arg => dobrar(dobrar(arg))

x(3) // qual o resultado?
// x(3) === dobrar(dobrar(3))
// x é uma função de quadruplicar
