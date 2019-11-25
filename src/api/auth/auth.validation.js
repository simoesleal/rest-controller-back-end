const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateAuthenticate (login, password) {
  if (!await validateParam(login)) { throw new DefaultError(`Não identificamos o Login. Por favor, tente novamente.`, 'login nulo ou vazio') }
  if (!await validateParam(password)) { throw new DefaultError(`Não identificamos Senha. Por favor, tente novamente.`, 'password nulo ou vazio') }
}

module.exports = {
	validateAuthenticate
}