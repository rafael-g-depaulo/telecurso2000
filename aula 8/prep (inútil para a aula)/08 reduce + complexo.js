
// ----------------------------------------------------------------------------
// exemplo de reduce mais complexo
const resultado = ['banana', 'maca', 'abacate', 'morango'].reduce(
  (valorAcumulado, valorAtual, index) => {
    valorAcumulado[valorAtual] = index
    return valorAcumulado
  }
, {})

resultado.morango // 3

// resultado === {
//  banana: 0,
//  maca: 1,
//  abacate: 2,
//  morango: 3
// }