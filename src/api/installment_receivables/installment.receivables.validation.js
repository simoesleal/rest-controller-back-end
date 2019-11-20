const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateUpdateInstallment (id, dataEmissao, dataVencimento) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código desta Conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(dataEmissao)) throw new DefaultError(`Não identificamos a data de emissão desta parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dataEmissao nulo ou vazio')
  if (!await validateParam(dataVencimento)) throw new DefaultError(`Não identificamos a data de vencimento desta parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dataVencimento nulo ou vazio')
}

module.exports = {
  validateUpdateInstallment,
}