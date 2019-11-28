const DefaultError = require('../../handlers/default-error.handler')

async function validateNewPaymentType (typePayment) {
  if (!typePayment) throw new DefaultError(`Não identificamos o tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'typePayment nulo ou vazio')
}

async function validateUpdatePaymentType (id, typePayment) {
  if (!id) throw new DefaultError(`Não identificamos o código do Tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!typePayment) throw new DefaultError(`Não identificamos o tipo do Pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'typePayment nulo ou vazio')
}

module.exports = {
	validateNewPaymentType,
  validateUpdatePaymentType
}