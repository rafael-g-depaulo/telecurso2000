// uma funcao de ordem maior é uma funcao que recebe outra funcao como parametro, ou que tem uma funcao como seu valor de retorno

// exemplo
const mostrarSoma1          = (x, y) => console.log("o resultado do calculo de x e y é: ", x+y)
const mostrarSubtracao1     = (x, y) => console.log("o resultado do calculo de x e y é: ", x-y)
const mostrarMultiplicacao1 = (x, y) => console.log("o resultado do calculo de x e y é: ", x*y)
const mostrarDivisao1       = (x, y) => console.log("o resultado do calculo de x e y é: ", x/y)

// funcao que recebe uma funcao (operation) e retorna outra funcao (showOperation)
const createFuncao1 = function(operation) {
  return function showOperation(x, y) {
    return console.log("o resultado do calculo de x e y é: ", operation(x, y))
  }
}

const createFuncao2 = op => (x, y) => console.log("o resultado do calculo de x e y é: ", op(x, y))
const mostrarSoma2          = createFuncao2((x, y) => x+y)
const mostrarSubtracao2     = createFuncao2((x, y) => x-y)
const mostrarMultiplicacao2 = createFuncao2((x, y) => x*y)
const mostrarDivisao2       = createFuncao2((x, y) => x/y)

mostrarSoma2(23, 45)
