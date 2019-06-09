// ----------------------------------------------------------------------------

// flatMap

// map(T => any)
// flatMap(T => [any])

// eu quero uma array com 1 na primeira posição, 2 nas duas próximas posições, 3 nas próximas 3 posições, etc. até 5.

const xTimesX = x => Array(x).fill(x, 0, x-1)

const myArr = xTimesX(1) // [1]
const myArr = xTimesX(2) // [2, 2]
const myArr = xTimesX(3) // [3, 3, 3]

const resultFalso = [1, 2, 3, 4, 5].map(xTimesX) // não funciona, resulta nisso abaixo
// [
//   [1],
//   [2, 2],
//   [3, 3, 3],
//   etc.
// ]

const result = [1, 2, 3, 4, 5].flatMap(xTimesX)
// [
//   // 1 => [1]
//   1,
//   // 2 => [2, 2]
//   2, 2,
//   // 3 => [3, 3, 3]
//   3, 3, 3,
//   // etc.
// ]

