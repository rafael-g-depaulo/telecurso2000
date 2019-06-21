// Pilares de Functional Programming:
// 1. Funções Puras             // f(x) = y, como na matemática (sem efeito colateral, retorna sepre a mesma coisa com as mesmas entradas)
// 2. Funções de Ordem Maior    // recebe func como parametro OU retorna func como seu valor de retorno
// 3. Recursão                  // fact(x) = x * fact(x-1)

// Currying & Funções parcialmente aplicadas:
const op1 = (x, y) => x + y
const op2 = x => y => x + y
op1(x, y)   // mesma coisa da linha abaixo
op2(x)(y)   // mesma coisa da linha acima

const myOp = op2(x) // funcao parcialmente aplicada (retorna uma funão)
myOp(y)     // mesma coisa que os outros

