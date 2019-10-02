const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewCountry (name, namePt, initials) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do País e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(namePt)) throw new DefaultError(`Não identificamos o nome do País em pt-br e este é um campo obrigatório. Por favor, tente novamente.`, 'namePt nulo ou vazio')
  if (!await validateParam(initials)) throw new DefaultError(`Não identificamos a sigla do País e este é um campo obrigatório. Por favor, tente novamente.`, 'initials nulo ou vazio')
}

async function validateUpdateCountry (id, name, namePt, initials) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do País e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do País e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(namePt)) throw new DefaultError(`Não identificamos o nome do País em pt-br e este é um campo obrigatório. Por favor, tente novamente.`, 'namePt nulo ou vazio')
  if (!await validateParam(initials)) throw new DefaultError(`Não identificamos a sigla do País e este é um campo obrigatório. Por favor, tente novamente.`, 'initials nulo ou vazio')
}

module.exports = {
	validateNewCountry,
  validateUpdateCountry
}