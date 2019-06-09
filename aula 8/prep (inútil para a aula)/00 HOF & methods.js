
//----------------------------------------------------------------------------
// revisão de HOF
// example 1
const applyTwice = (foo, target) => foo(foo(target))
const dobrar = x => 2 * x
applyTwice(dobrar, 5) // 20

// example 2
const applyTwiceWithCurrying = foo => target => foo(foo(target))
const quadruplicar = applyTwiceWithCurrying(dobrar)
const result_ = quadruplicar(5)