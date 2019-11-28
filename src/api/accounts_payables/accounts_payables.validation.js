const DefaultError = require('../../handlers/default-error.handler')

async function validateNewAccountPayable (number, issueDay, dueDay, installmentValue, totalValue, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) {
  if (!number) throw new DefaultError(`Não identificamos o número identificador desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
  if (!issueDay) throw new DefaultError(`Não identificamos a data de emissão desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'issueDay nulo ou vazio')
  if (!dueDay) throw new DefaultError(`Não identificamos a data de vencimento desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'dueDay nulo ou vazio')
  if (!installmentValue) throw new DefaultError(`Não identificamos o valor da parcela desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'installmentValue nulo ou vazio')
  if (!totalValue) throw new DefaultError(`Não identificamos o valor total desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio')
  if (!id_fornecedor) throw new DefaultError(`Não identificamos o fornecedor desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_fornecedor nulo ou vazio')
  if (!id_moeda) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_moeda nulo ou vazio')
  if (!id_conta_bancaria) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_conta_bancaria nulo ou vazio')
  if (!id_forma_pagamento) throw new DefaultError(`Não identificamos a forma de pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_forma_pagamento nulo ou vazio')
  if (!id_condicao_pagamento) throw new DefaultError(`Não identificamos as condições de  pagamento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id_condicao_pagamento nulo ou vazio')
  }

async function validateUpdateAccountPayable (id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria) {
  if (!id) throw new DefaultError(`Não identificamos o código desta Conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!idFornecedor) throw new DefaultError(`Não identificamos o fornecedor desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idFornecedor nulo ou vazio')
  if (!idMoeda) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio')
  if (!idContaBancaria) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaBancaria nulo ou vazio')
  if (!idTipoDocumento) throw new DefaultError(`Não identificamos o tipo de documento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idTipoDocumento nulo ou vazio')
}

async function validateCreateNewAccountPayable (identifier, qtdInstallment, totalValue, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment) {
  if (!identifier) throw new DefaultError(`Não identificamoso código identificador este é um campo obrigatório. Por favor, tente novamente.`, 'identifier nulo ou vazio')
  if (!qtdInstallment) throw new DefaultError(`Não identificamos a quantidade de parcelas este é um campo obrigatório. Por favor, tente novamente.`, 'qtdInstallment nulo ou vazio')
  if (!totalValue) { 
    throw new DefaultError(`Não identificamos o valor total desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio') 
  } else {
    if (totalValue <= 0) {
    throw new DefaultError(`O valor total da duplicata deve ser maior que R$ 0.00. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
    }
  }
  if (!idFornecedor) throw new DefaultError(`Não identificamos o fornecedor desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idFornecedor nulo ou vazio')
  if (!idMoeda) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio')
  if (!idContaBancaria) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaBancaria nulo ou vazio')
  if (!idTipoDocumento) throw new DefaultError(`Não identificamos o tipo do pagamento é um campo obrigatório. Por favor, tente novamente.`, 'idTipoDocumento nulo ou vazio')
  if (!Installment) { 
    throw new DefaultError(`Não identificamos nenhuma Parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'Installment nulo ou vazio')
  } else {
    for (let i = 0; i < Installment.length; i++) {
      if (!Installment[i].installmentNumber) { 
        throw new DefaultError(`Não identificamos o número da parcela. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
      } else if (!Installment[i].installmentValue) {
        throw new DefaultError(`Não identificamos o valor da parcela. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
      } else if (!Installment[i].issueDay) {
        throw new DefaultError(`Não identificamos a Data de Emissão da parcela. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
      } else if (!Installment[i].dueDay) {
        throw new DefaultError(`Não identificamos a Data de Vencimento da parcela. Por favor, tente novamente.`, 'installmentNumber nulo ou vazio')
      }
    }
  }
}

module.exports = {
	validateNewAccountPayable,
  validateUpdateAccountPayable,
  validateCreateNewAccountPayable
}