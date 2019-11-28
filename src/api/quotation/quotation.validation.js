const DefaultError = require('../../handlers/default-error.handler')

async function validateNewQuotation (quotation, id_coin) {
  if (!quotation) throw new DefaultError(`Não identificamos a Cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'quotation nulo ou vazio')
  if (!id_coin) throw new DefaultError(`Não identificamos a moeda da cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'id_coin nulo ou vazio')
}

async function validateUpdateQuotation (id, quotation, id_coin) {
  if (!id) throw new DefaultError(`Não identificamos o código da Moeda e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!quotation) throw new DefaultError(`Não identificamos a Cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'quotation nulo ou vazio')
  if (!id_coin) throw new DefaultError(`Não identificamos a moeda da cotação e este é um campo obrigatório. Por favor, tente novamente.`, 'id_coin nulo ou vazio')
}

async function validateUpdateQuotationCashier(dolarQuotation, pesoQuotation, gueraniQuotation) {
  if (!dolarQuotation) {
    throw new DefaultError(`Não identificamos a cotação do Dolar. Por favor, tente novamente.`, 'dolarQuotation nulo ou vazio')
  } else {
    if (dolarQuotation.cotacao <= 0) {
      throw new DefaultError(`A cotação do Dolar tem que ser maior que U$ 0.00. Por favor, tente novamente.`, 'dolarQuotation nulo ou vazio')
    }
  }
  if (!pesoQuotation) {
    throw new DefaultError(`Não identificamos a cotação do Dolar. Por favor, tente novamente.`, 'pesoQuotation nulo ou vazio')
  } else {
    if (pesoQuotation.cotacao <= 0) {
      throw new DefaultError(`A cotação do Dolar tem que ser maior que P$ 0.00. Por favor, tente novamente.`, 'pesoQuotation nulo ou vazio')
    }
  }
  if (!gueraniQuotation) {
    throw new DefaultError(`Não identificamos a cotação do Dolar. Por favor, tente novamente.`, 'gueraniQuotation nulo ou vazio')
  } else {
    if (gueraniQuotation.cotacao <= 0) {
      throw new DefaultError(`A cotação do Dolar tem que ser maior que G$ 0.00. Por favor, tente novamente.`, 'gueraniQuotation nulo ou vazio')
    }
  }
}

module.exports = {
	validateNewQuotation,
  validateUpdateQuotation,
  validateUpdateQuotationCashier
}
