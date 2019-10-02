const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewCoin (name, pluralName, symbol) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(pluralName)) throw new DefaultError(`Não identificamos o nome em plural da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'pluralName nulo ou vazio')
  if (!await validateParam(symbol)) throw new DefaultError(`Não identificamos o simbolo da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'symbol nulo ou vazio')
}

async function validateUpdateCoin (id, name, pluralName, symbol) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(pluralName)) throw new DefaultError(`Não identificamos o nome em plural da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'pluralName nulo ou vazio')
  if (!await validateParam(symbol)) throw new DefaultError(`Não identificamos o simbolo da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'symbol nulo ou vazio')
}

module.exports = {
	validateNewCoin,
  validateUpdateCoin
}
