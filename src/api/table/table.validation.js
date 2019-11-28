const DefaultError = require('../../handlers/default-error.handler')

async function validateNewTable (number) {
  if (!number) throw new DefaultError(`Não identificamos o numero da Mesa e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
}

async function validateUpdateTable (id, number) {
  if (!id) throw new DefaultError(`Não identificamos o código da Mesa e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!number) throw new DefaultError(`Não identificamos o numero da Mesa e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
}

module.exports = {
	validateNewTable,
  validateUpdateTable
}