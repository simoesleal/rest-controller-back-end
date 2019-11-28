const DefaultError = require('../../handlers/default-error.handler')

async function validateNewCity (name, state) {
  if (!name) throw new DefaultError(`Não identificamos o nome da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!state) throw new DefaultError(`Não identificamos o estado da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
}

async function validateUpdateCity (id, name, state) {
  if (!id) throw new DefaultError(`Não identificamos o código do Estado e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!state) throw new DefaultError(`Não identificamos o estado da Cidade e este é um campo obrigatório. Por favor, tente novamente.`, 'uf nulo ou vazio')
}

module.exports = {
	validateNewCity,
  validateUpdateCity
}