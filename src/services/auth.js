/* eslint-disable promise/param-names */
export function signIn() {
  return new Promise((result) => {
    setTimeout(() => {
      result({
        token: 'hasdsalkdjsakdjsaldkjas',
        user: {
          id: 1,
          name: 'Vitor',
          endereço: 'Rua José Melaré 56',
          cidade: 'Boituva',
          email: 'vitor.camposrdc@gmail.com',
        },
      })
    }, 500)
  })
}
