const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateCreateNewAccountReceivable (identifier, qtdInstallment, totalValue, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment) {
  if (!await validateParam(identifier)) throw new DefaultError(`Não identificamos o código identificador este é um campo obrigatório. Por favor, tente novamente.`, 'identifier nulo ou vazio')
  if (!await validateParam(qtdInstallment)) throw new DefaultError(`Não identificamos a quantidade de parcelas este é um campo obrigatório. Por favor, tente novamente.`, 'qtdInstallment nulo ou vazio')
  if (!await validateParam(totalValue)) throw new DefaultError(`Não identificamos o valor total desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio')
  if (!await validateParam(idCliente)) throw new DefaultError(`Não identificamos o cliente desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idCliente nulo ou vazio')
  if (!await validateParam(idMoeda)) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio')
  if (!await validateParam(idContaBancaria)) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaBancaria nulo ou vazio')
  if (!await validateParam(idTipoDocumento)) throw new DefaultError(`Não identificamos o tipo do pagamento é um campo obrigatório. Por favor, tente novamente.`, 'idTipoDocumento nulo ou vazio')
  if (!await validateParam(Installment)) throw new DefaultError(`Não identificamos nenhuma Parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'Installment nulo ou vazio')
  }

  async function validateUpdateAccountReceivable (id, idCliente, idMoeda, idTipoDocumento, idContaBancaria) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código desta Conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(idCliente)) throw new DefaultError(`Não identificamos o cliente desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idCliente nulo ou vazio')
  if (!await validateParam(idMoeda)) throw new DefaultError(`Não identificamos a moeda desta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio')
  if (!await validateParam(idContaBancaria)) throw new DefaultError(`Não identificamos a conta bancaria utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaBancaria nulo ou vazio')
  if (!await validateParam(idTipoDocumento)) throw new DefaultError(`Não identificamos o tipo de documento utilizada nesta conta e este é um campo obrigatório. Por favor, tente novamente.`, 'idTipoDocumento nulo ou vazio')
}

module.exports = {
  validateCreateNewAccountReceivable,
  validateUpdateAccountReceivable
}