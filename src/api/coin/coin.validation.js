const DefaultError = require('../../handlers/default-error.handler')

async function validateNewCoin (name, pluralName, symbol) {
  if (!name) throw new DefaultError(`Não identificamos o nome da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!pluralName) throw new DefaultError(`Não identificamos o nome no plural da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'pluralName nulo ou vazio')
  if (!symbol) throw new DefaultError(`Não identificamos o simbolo da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'symbol nulo ou vazio')
}

async function validateUpdateCoin (id, name, pluralName, symbol) {
  if (!id) throw new DefaultError(`Não identificamos o código da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!pluralName) throw new DefaultError(`Não identificamos o nome no plural da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'pluralName nulo ou vazio')
  if (!symbol) throw new DefaultError(`Não identificamos o simbolo da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'symbol nulo ou vazio')
}

module.exports = {
	validateNewCoin,
  validateUpdateCoin
}
