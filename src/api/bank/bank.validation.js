const DefaultError = require('../../handlers/default-error.handler')

async function validateNewBank (name) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Banco e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

async function validateUpdateBank (id, name) {
  if (!id) throw new DefaultError(`Não identificamos o código do Banco e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Banco e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
}

module.exports = {
	validateNewBank,
  validateUpdateBank
}