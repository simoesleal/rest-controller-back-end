const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewTable (number) {
  if (!await validateParam(number)) throw new DefaultError(`Não identificamos o numero da Mesa e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
}

async function validateUpdateTable (id, number) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do País e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(number)) throw new DefaultError(`Não identificamos o numero da Mesa e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
}

module.exports = {
	validateNewTable,
  validateUpdateTable
}