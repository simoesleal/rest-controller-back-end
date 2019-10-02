const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewCity (name, state) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(state)) throw new DefaultError(`Não identificamos o estado da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
}

async function validateUpdateCity (id, name, state) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(state)) throw new DefaultError(`Não identificamos o estado da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
}

module.exports = {
	validateNewCity,
  validateUpdateCity
}