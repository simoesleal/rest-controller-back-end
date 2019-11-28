const DefaultError = require('../../handlers/default-error.handler')

async function validateNewUnity (name, abbreviation) {
  if (!name) throw new DefaultError(`Não identificamos o nome da Unidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!abbreviation) throw new DefaultError(`Não identificamos a abreviação da Unidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

async function validateUpdateUnity (id, name, abbreviation) {
  if (!id) throw new DefaultError(`Não identificamos o código da Unidade e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome da Unidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!abbreviation) throw new DefaultError(`Não identificamos a abreviação da Unidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

module.exports = {
	validateNewUnity,
  validateUpdateUnity
}
