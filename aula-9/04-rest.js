const doStuffWithArray = (arr) => {
  // const first = arr[0]         // um elemento da array
  // const resto = arr.slice(1)   // uma array contendo o resto dos elementos

  const [ first, ...resto ] = arr
  console.log(first, resto)  

  // const [ prim, segundo, ...rest ] = arr
}

const recursaoDeCauda = ([h, ...t]) => t.length === 0
  ? h : h + recursaoDeCauda(t)

doStuffWithArray([1, 2, 3])
doStuffWithArray([1, 2])
doStuffWithArray([1])