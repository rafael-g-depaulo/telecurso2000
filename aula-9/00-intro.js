// ex1 ----------------------------------------------------------------

// função de autenticação 
const checkAuth = (auth) => {
  const user     = auth.user
  const password = auth.password
  // OBS: nunca mais auth é referenciado, a partir daqui

  // fazer coisas pra checar a autenticação
}
// ex1 ---------------------------------------------------------------

// problemas com ex1:

/**
 * 1. repetição de código (const XXXX = auth.XXXX)
 * 2. checkAuth "sabe da existência" de auth sem necessidade
 *  2.1. código burro (não sabe o seu contexto) não vira spaguete
 */
