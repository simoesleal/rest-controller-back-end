const DefaultError = require('../../handlers/default-error.handler')

async function validateNewTypeDocument (typeDocument) {
  if (!typeDocument) throw new DefaultError(`Não identificamos o tipo do documento e este é um campo obrigatório. Por favor, tente novamente.`, 'typeDocument nulo ou vazio')
}

async function validateUpdateTypeDocument (id, typeDocument) {
  if (!id) throw new DefaultError(`Não identificamos o código do Tipo do Documento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!typeDocument) throw new DefaultError(`Não identificamos o tipo do documento e este é um campo obrigatório. Por favor, tente novamente.`, 'typeDocument nulo ou vazio')
}

module.exports = {
	validateNewTypeDocument,
  validateUpdateTypeDocument
}
