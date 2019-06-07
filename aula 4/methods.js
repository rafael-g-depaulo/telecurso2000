arr.map((value, index) => {})
arr.map((value, index, arrRef) => {})
arr.filter((value, index) => {})
arr.filter((value, index, arrRef) => {})

// comentar sobre sort & flatMap
arr.sort((a, b) => { /* se retornar < 0, a antes de b, se > 0, b antes que a */ })
arr.flatMap((value, index) => {
  // se retornar um valor T, funciona como map
  // se retornar uma array [X1, X2, X3], insere X1, X2, X3 naquela posição
})

arr.reduce((accumulatedValue, currentValue, currentIndex, arrRef) => {}, initialValue)