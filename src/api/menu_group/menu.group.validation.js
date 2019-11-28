const DefaultError = require('../../handlers/default-error.handler')

async function validateNewMenuGroup (name) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

async function validateUpdateMenuGroup (id, name) {
  if (!id) throw new DefaultError(`Não identificamos o código do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Grupo do Cardápio e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

module.exports = {
	validateNewMenuGroup,
  validateUpdateMenuGroup
}