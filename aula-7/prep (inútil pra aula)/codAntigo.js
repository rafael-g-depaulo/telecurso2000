const mostrarSoma1          = (x, y) => console.log("o resultado do calculo de x e y é: ", x+y)
const mostrarSubtracao1     = (x, y) => console.log("o resultado do calculo de x e y é: ", x-y)
const mostrarMultiplicacao1 = (x, y) => console.log("o resultado do calculo de x e y é: ", x*y)
const mostrarDivisao1       = (x, y) => console.log("o resultado do calculo de x e y é: ", x/y)

const mostrarCalculoFactory = operacao => (m, n) => console.log("o resultado do calculo de x e y é: ", operacao(m, n))
const mostrarCalculoFactory = (operacao, m, n) => console.log("o resultado do calculo de x e y é: ", operacao(m, n))

const mostrarSoma2          = mostrarCalculoFactory( (x, y) => x+y )
const mostrarSubtracao2     = mostrarCalculoFactory( (x, y) => x-y )
const mostrarMultiplicacao2 = mostrarCalculoFactory( (x, y) => x*y )
const mostrarDivisao2       = mostrarCalculoFactory( (x, y) => x/y )

mostrarSoma2(2, 4) // mostra na tela "o resultado do calculo de x e y e: 6"

const multiplicateByNum = x => y => x * y

const dobrar = multiplicateByNum(2)    //(y => 2 * y)
const triplicar = multiplicateByNum(3) //(y => 3 * y)
const myNum1 = dobrar(5)               // myNum1 === 10
const myNum2 = triplicar(5)            // myNum2 === 15

// lembre que (() => {}) é um valor válido (pode ser retornado por uma funçao)

const elevatebyNthPower = power => num => Math.pow(num,power)

console.log(elevatebyNthPower(2)(3)) // 3²



// Tipos
console.log("\n== Tipos ==\n")

var x
console.log(x)
x = 13
console.log(x)
x = true
console.log(x)
x = "treinsdkanf"
console.log(x)
x = [1, 2, 3, 4, 'asdfg', true]
console.log(x)
x = {
  name: undefined,  age: 15
}
console.log(x)
x = undefined
console.log(x)
x = null
console.log(x)
x = function (num) { return 2*num }
console.log(x)
console.log(x(10))

// ====================================

// Object Creation
console.log("\n== Object Creation ==\n")

// 1: Literal
let joao = {
  name: "joão",
  age: 24,
  sayHi: function() { console.log("hi")}
}

joao.sayHi()

// 2: Function factories
function CreatePerson(name, age) {
  return { name: name, age: age }
}
let maria = CreatePerson("maria", 47)

// 3: Protótipos
function Person(name, age) {
  this.name = name
  this.age = age
}
let daniel = new Person("daniel", 7)
console.log(daniel) // Person { name: 'daniel', age: 7 }

// """4""": Classes, mas no fundo são Protótipos
class Persona {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
let marcos = new Persona("marcos", 298)

// ====================================

// Function Definition/Declaration
console.log("\n== Function Definition/Declaration ==\n")
// 1: Funções não-anônimas
function foo1 (num1, num2) {
}

// 2: usando variável(const)
const foo2 = function (num1, num2) {
}

//  3: arrow function
const sum = (num1, num2) => {
  console.log(num1, num2, num1+num2)
}
//  3.1: variações importantes de arrow function:
//    - Um único argumento não precisa de parênteses
const jump2 = num => {
  return num+2;
}

//    - Se a função só for um return não precisa de chaves nem da palavra 'return'. só bote o valor direto
const sumBoth = (num1, num2) => num1+num2

//    - Usando ambos recursos simultaneamente
const isEven = num => num % 2
    
sum(2,4)