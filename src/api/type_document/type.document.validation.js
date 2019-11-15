const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewTypeDocument (typeDocument, status) {
  if (!await validateParam(typeDocument)) throw new DefaultError(`Não identificamos o tipo do documento e este é um campo obrigatório. Por favor, tente novamente.`, 'typeDocument nulo ou vazio')
  if (!await validateParam(status)) throw new DefaultError(`Não identificamos o status e este é um campo obrigatório. Por favor, tente novamente.`, 'status nulo ou vazio')
}

async function validateUpdateTypeDocument (id, typeDocument, status) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Tipo do Documento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(typeDocument)) throw new DefaultError(`Não identificamos o tipo do documento e este é um campo obrigatório. Por favor, tente novamente.`, 'typeDocument nulo ou vazio')
  if (!await validateParam(status)) throw new DefaultError(`Não identificamos o status e este é um campo obrigatório. Por favor, tente novamente.`, 'status nulo ou vazio')
}

module.exports = {
	validateNewTypeDocument,
  validateUpdateTypeDocument
}
