const doSomethingWithArr = (arr) => {
  // const first = arr[0]
  // const second = arr[1]

  const [ first, second ] = arr
  console.log(first, second)
}
const doSomethingWithArr2 = ([ first, second ]) => {
  console.log(first, second)
}

doSomethingWithArr([1, 2, 3, 4])
