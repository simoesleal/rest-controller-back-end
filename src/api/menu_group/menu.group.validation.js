const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewMenuGroup (name) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

async function validateUpdateMenuGroup (id, name) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

module.exports = {
	validateNewMenuGroup,
  validateUpdateMenuGroup
}