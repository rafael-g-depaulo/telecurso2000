// functions??!?
function soma(x, y) { return x+y }
// voce pode botar funcoes em variaveis e constantes (porque sao valores validos em js) 
let myFunc = soma
function getSoma() { return soma }
let myFunc2 = getSoma()

console.log(myFunc)
console.log(myFunc(2, 3))

console.log(myFunc2)
console.log(myFunc2(2, 3))

// voce pode botar funcoes em objetos (porque sao valores validos em js)
const mario3 = {
  name: "mario",
  brother: "luigi",
  run: function() {
    console.log("correndo")
  },
  jump() {
    console.log("yahoo!")
  }
}
mario3.jump()

// voce pode botar funcoes em arrays (porque sao valores validos em js)
// iterate on functions
const funcoes = [
  soma,
  mario3.jump,
  myFunc2,
  console.log
]

for (let i = 0; i < funcoes.length; i++) {
  console.log(funcoes[i]())
}
