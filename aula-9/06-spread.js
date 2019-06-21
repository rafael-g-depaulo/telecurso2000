const pushBack = (arr, elem) => [ ...arr, elem ]
const quickSort = ([h,...t]) => h === undefined ? [] : [ ...quickSort(t.filter(x => x <= h)), h, ...quickSort(t.filter(x => x > h))]

// console.log(pushBack([1, 2, 3, 4, 5]))
console.log(quickSort([2, 4 ,67 ,8, 12, 57, 3, 8, 1, 0  ]))

const isPalindrome = str => [...str]
  .every(( char, i, arr) => char === arr[arr.length-i-1])
// const isPalindrome = str => [...str] === [...str].reverse()