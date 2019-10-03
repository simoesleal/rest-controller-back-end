const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewAccountPayable (number, issueDay, dueDay, installmentValue, totalValue, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) {
  if (!await validateParam(number)) throw new DefaultError(`Não identificamos o número identificador desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
  if (!await validateParam(issueDay)) throw new DefaultError(`Não identificamos a data de emissão desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'issueDay nulo ou vazio')
  if (!await validateParam(dueDay)) throw new DefaultError(`Não identificamos a data de vencimento desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'dueDay nulo ou vazio')
  if (!await validateParam(installmentValue)) throw new DefaultError(`Não identificamos o valor da parcela desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentValue nulo ou vazio')
  if (!await validateParam(totalValue)) throw new DefaultError(`Não identificamos o valor total desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio')
  if (!await validateParam(id_fornecedor)) throw new DefaultError(`Não identificamos o fornecedor desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_fornecedor nulo ou vazio')
  if (!await validateParam(id_moeda)) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_moeda nulo ou vazio')
  if (!await validateParam(id_conta_bancaria)) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_conta_bancaria nulo ou vazio')
  if (!await validateParam(id_forma_pagamento)) throw new DefaultError(`Não identificamos a forma de pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
  if (!await validateParam(id_condicao_pagamento)) throw new DefaultError(`Não identificamos as condições de  pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_condicao_pagamento nulo ou vazio')
}

async function validateUpdateAccountPayable (id, number, issueDay, dueDay, installmentValue, totalValue, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código desta Conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(number)) throw new DefaultError(`Não identificamos o número identificador desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
  if (!await validateParam(issueDay)) throw new DefaultError(`Não identificamos a data de emissão desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'issueDay nulo ou vazio')
  if (!await validateParam(dueDay)) throw new DefaultError(`Não identificamos a data de vencimento desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'dueDay nulo ou vazio')
  if (!await validateParam(installmentValue)) throw new DefaultError(`Não identificamos o valor da parcela desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentValue nulo ou vazio')
  if (!await validateParam(totalValue)) throw new DefaultError(`Não identificamos o valor total desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio')
  if (!await validateParam(id_fornecedor)) throw new DefaultError(`Não identificamos o fornecedor desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_fornecedor nulo ou vazio')
  if (!await validateParam(id_moeda)) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_moeda nulo ou vazio')
  if (!await validateParam(id_conta_bancaria)) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_conta_bancaria nulo ou vazio')
  if (!await validateParam(id_forma_pagamento)) throw new DefaultError(`Não identificamos a forma de pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
  if (!await validateParam(id_condicao_pagamento)) throw new DefaultError(`Não identificamos as condições de  pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_condicao_pagamento nulo ou vazio')
}

module.exports = {
	validateNewAccountPayable,
  validateUpdateAccountPayable
}