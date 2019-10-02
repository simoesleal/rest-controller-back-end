const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewQuotation (quotation, id_coin) {
  if (!await validateParam(quotation)) throw new DefaultError(`Não identificamos a Cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'quotation nulo ou vazio')
  if (!await validateParam(id_coin)) throw new DefaultError(`Não identificamos a moeda da cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'id_coin nulo ou vazio')
}

async function validateUpdateQuotation (id, quotation, id_coin) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(quotation)) throw new DefaultError(`Não identificamos a Cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'quotation nulo ou vazio')
  if (!await validateParam(id_coin)) throw new DefaultError(`Não identificamos a moeda da cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'id_coin nulo ou vazio')
}

module.exports = {
	validateNewQuotation,
  validateUpdateQuotation
}
