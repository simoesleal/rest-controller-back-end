const DefaultError = require('../../handlers/default-error.handler')

async function validateNewPaymentCondition (id_forma_pagamento, installmentNumber, issueDate, dueDate, installmentValue) {
  if (!id_forma_pagamento) throw new DefaultError(`Não identificamos a forma de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
  if (!installmentNumber) throw new DefaultError(`Não identificamos o número da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
  if (!issueDate) throw new DefaultError(`Não identificamos a data de emissão da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'issueDate nulo ou vazio')
  if (!dueDate) throw new DefaultError(`Não identificamos a data do vencimento da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dueDate nulo ou vazio')
  if (!installmentValue) throw new DefaultError(`Não identificamos o valor da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentValue nulo ou vazio')
}

async function validateUpdatePaymentCondition (id,  id_forma_pagamento, installmentNumber, issueDate, dueDate, installmentValue) {
  if (!id) throw new DefaultError(`Não identificamos o código da Condição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!id_forma_pagamento) throw new DefaultError(`Não identificamos a forma de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
  if (!installmentNumber) throw new DefaultError(`Não identificamos o número da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
  if (!issueDate) throw new DefaultError(`Não identificamos a data de emissão da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'issueDate nulo ou vazio')
  if (!dueDate) throw new DefaultError(`Não identificamos a data do vencimento da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dueDate nulo ou vazio')
  if (!installmentValue) throw new DefaultError(`Não identificamos o valor da parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentValue nulo ou vazio')
}

module.exports = {
	validateNewPaymentCondition,
  validateUpdatePaymentCondition
}