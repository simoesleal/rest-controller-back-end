const DefaultError = require('../../handlers/default-error.handler')

async function validateUpdateInstallment (id, dataEmissao, dataVencimento) {
  if (!id) throw new DefaultError(`Não identificamos o código desta Conta e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!dataEmissao) throw new DefaultError(`Não identificamos a data de emissão desta parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dataEmissao nulo ou vazio')
  if (!dataVencimento) throw new DefaultError(`Não identificamos a data de vencimento desta parcela e este é um campo obrigatório. Por favor, tente novamente.`, 'dataVencimento nulo ou vazio')
}

module.exports = {
  validateUpdateInstallment,
}