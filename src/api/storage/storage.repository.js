const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	POST_NEW_PURCHASE_ENTRY
} = require('./storage.queries')

async function postNewPurchaseEntryRepository (identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, installment, products, transaction = null) {
  let response  
 try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'post_new_purchase_entry', text: POST_NEW_PURCHASE_ENTRY, values: [identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, JSON.stringify(installment), JSON.stringify(products)]})
    response = await transaction.one(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível dar entrada nessa nota de compra, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	postNewPurchaseEntryRepository
}
