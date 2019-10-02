const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewPaymentType (typePayment) {
  if (!await validateParam(typePayment)) throw new DefaultError(`Não identificamos o tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'typePayment nulo ou vazio')
}

async function validateUpdatePaymentType (id, typePayment) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(typePayment)) throw new DefaultError(`Não identificamos o tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'typePayment nulo ou vazio')
}

module.exports = {
	validateNewPaymentType,
  validateUpdatePaymentType
}