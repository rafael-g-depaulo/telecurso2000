// ex2, agora com desconstrução de objetos

// ex2 ---------------------------------------------------------------

// função de autenticação 
const checkAuth = (auth) => {
  const { user, password } = auth

  // OBS¹: nunca mais auth é referenciado, a partir daqui
  // OBS²: então a gente só se impota com as propriedades user e password...
  // ...do objeto auth, não com o objeto em si

  // fazer coisas pra checar a autenticação
}
// ex2 ---------------------------------------------------------------

// problemas com ex2:

/**
 * (nos livramos disso) 1. repetição de código (const XXXX = auth.XXXX)
 * 2. checkAuth "sabe da existência" de auth sem necessidade
 *  2.1. código burro (não sabe o seu contexto) não vira spaguete
 */
