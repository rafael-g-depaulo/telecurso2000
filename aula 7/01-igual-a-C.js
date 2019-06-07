// Coisas que tem em JS e em C/C++
// loops
for (true; false; true) {
}

while (false) {
}

do { 
} while (false)

// if else
if (true) {
} else if (false) {
} else {
}

// switch
let x
switch (x) {
  case '4':
    break;
}

// funcoes
function soma (x, y) {
  // mas aqui tem como ter funções locais
  function issoMaisAquilo(a, b) {
    return a + b
  }
  return issoMaisAquilo(x, y)
}
console.log(soma(2,  5))

// funcoes por padrão retornam undefined se vc não retornar nada
function fazNada() {}
console.log(fazNada())