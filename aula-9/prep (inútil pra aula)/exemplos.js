/// DECONSTRUCTION

// with objects
  // before
  const loginAttempt = (auth) => {
    const email = auth.email
    const password = auth.password
  }
  // after 1
  const loginAttempt = (auth) => {
    const { email, password } = auth
  }
  // after 2
  const loginAttempt = ({ email, password }) => {
    // stuff
  }
// with arrays
  // before
  const doStuffWithArr = (arr) => {
    const first = arr[0]
    const second = arr[1]
  }
  // after
  const doStuffWithArr = (arr) => {
    const [ first, second ] = arr
  }

// react
const myComponent = ({color, prompt, children}) => 
  <div style={{ color }}>
    <p>prompt é { prompt }</p>
    { children }
  </div>

/// REST
const doStuffWithArr = (arr) => {
  const [ first, ...RESTofArray ] = arr
}
const doStuffWithArr = ([ first, ...RESTofArray ]) => {
  // do stuff
}
const tailRecursion = ([ head, ...tail ]) => {
  // do stuff
}

/// SPREAD / REST

// spread example (array)
const concat = (arr1, arr2) => [...arr1, ...arr2]
const pushBack = (arr, value) => [...arr, value]

// respostas do desafio 1
const copy = arr => arr.reduce((acc, cur) => [...acc, cur])
const forEach = (arr, foo) => arr.reduce((_, cur) => foo(cur))
const filter = (arr, foo) => arr.reduce((acc, cur) => foo(cur) ? acc : [...acc, cur], [])
const map = (arr, foo) => arr.reduce((acc, cur) => [...acc, foo(cur)], [])
const flatMap = (arr, foo) => arr.reduce((acc, cur) => [...acc, ...foo(cur)], [])

// spread example (string)
const isPalindrome = str => [...str].reduce(
  (acc, char, i, arr) => acc && char === arr[arr.length-i-1], true
)
  
// spread example (object)
const join2Obj = (obj1, obj2) => ({ ...obj1, ...obj2 })

// spread + rest example
const joinObj = (...objects) => objects.reduce((acc, cur) => join2Obj(acc, cur))
  // objects.reduce((acc, cur) => ({ ...acc, ...cur }))

// tail recursion example
const sum = ([head, ...tail]) => tail.length === 0 ? head : head + sum(tail)

// example of desafio 2 with spread. use only if asked
const swap = arr => arr.reduce(
  (acc, cur, i) => [
    ...acc,                               // adicione apos o acumulado
    i === arr.length-1 && i % 2 === 0 ?   // if é o ultimo elemento e é par (tipo o 4 em [0, 1, 2, 3, 4])
      cur                                 //   -> use o atual (o último elemento do array)
    : i % 2 === 0 ?                       // else if é par (tipo 0 e 2 em [0, 1, 2, 3, 4])
      arr[i+1]                            //   -> use o próximo
    : arr[i-1]                            // else (é impar) -> use o anterior
  ]
  , []
)