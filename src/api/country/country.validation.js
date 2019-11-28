const DefaultError = require('../../handlers/default-error.handler')

async function validateNewCountry (name, namePt, initials) {
  if (!name) throw new DefaultError(`Não identificamos o nome do País e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!namePt) throw new DefaultError(`Não identificamos o nome do País em pt-br e este é um campo obrigatório. Por favor, tente novamente.`, 'namePt nulo ou vazio')
  if (!initials) throw new DefaultError(`Não identificamos a sigla do País e este é um campo obrigatório. Por favor, tente novamente.`, 'initials nulo ou vazio')
}

async function validateUpdateCountry (id, name, namePt, initials) {
  if (!id) throw new DefaultError(`Não identificamos o código do País e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do País e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!namePt) throw new DefaultError(`Não identificamos o nome do País em pt-br e este é um campo obrigatório. Por favor, tente novamente.`, 'namePt nulo ou vazio')
  if (!initials) throw new DefaultError(`Não identificamos a sigla do País e este é um campo obrigatório. Por favor, tente novamente.`, 'initials nulo ou vazio')
}

module.exports = {
	validateNewCountry,
  validateUpdateCountry
}