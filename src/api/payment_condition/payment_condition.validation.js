const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewPaymentCondition (condition, installments, firstDay, description, id_forma_pagamento) {
  if (!await validateParam(condition)) throw new DefaultError(`Não identificamos a condição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'condition nulo ou vazio')
  if (!await validateParam(installments)) throw new DefaultError(`Não identificamos as parcelas e este é um campo obrigatório. Por favor, tente novamente.`, 'installments nulo ou vazio')
  if (!await validateParam(firstDay)) throw new DefaultError(`Não identificamos a data do pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'firstDay nulo ou vazio')
  if (!await validateParam(description)) throw new DefaultError(`Não identificamos a descrição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'description nulo ou vazio')
  if (!await validateParam(id_forma_pagamento)) throw new DefaultError(`Não identificamos a forma de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')

}

async function validateUpdatePaymentCondition (id,  condition, installments, firstDay, description, id_forma_pagamento) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código da Condição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(condition)) throw new DefaultError(`Não identificamos a condição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'condition nulo ou vazio')
  if (!await validateParam(installments)) throw new DefaultError(`Não identificamos as parcelas e este é um campo obrigatório. Por favor, tente novamente.`, 'installments nulo ou vazio')
  if (!await validateParam(firstDay)) throw new DefaultError(`Não identificamos a data do pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'firstDay nulo ou vazio')
  if (!await validateParam(description)) throw new DefaultError(`Não identificamos a descrição de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'description nulo ou vazio')
  if (!await validateParam(id_forma_pagamento)) throw new DefaultError(`Não identificamos a forma de pagamento e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
}

module.exports = {
	validateNewPaymentCondition,
  validateUpdatePaymentCondition
}