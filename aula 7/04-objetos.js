// objetos são arrays de pares "chave(string): valor(qualquer valor válido em JS)"*
// *(tecnicamente não, mas é basicamente assim que eles funcionam)
const mario = {
  name: "mario",
  brother: "luigi"
}

const wario = [
  ["name", "wario"]
  ["brother", "waluigi"]
]

// como objetos e arrays são valores válidos para uma propriedade, coisas assim podem acontecer
const mario2 = {
  name: "mario",
  age: 88,
  brother: {
    name: "luigi",
    idade: 89
  },
  powerUps: [
    "star",
    "fire flower",
    [ 
      {
        arrays: [{}, {}]
      }
    ]
  ]
}

