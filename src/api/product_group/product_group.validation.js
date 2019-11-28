const DefaultError = require('../../handlers/default-error.handler')

async function validateNewProductGroup (name) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Grupo de Produtos e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

async function validateUpdateProductGroup (id, name) {
  if (!id) throw new DefaultError(`Não identificamos o código do País e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Grupo de Produtos e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

module.exports = {
	validateNewProductGroup,
  validateUpdateProductGroup
}