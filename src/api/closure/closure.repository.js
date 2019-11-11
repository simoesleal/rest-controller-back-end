const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { 
	POST_NEW_CLOUSURE
} = require('./closure.queries')


async function postNewClousureRepository (p_id_conta_cliente, p_id_mesa, json_fechamento, transaction = null) {
  let response
 try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'post_new_clousure', text: POST_NEW_CLOUSURE, values: [p_id_conta_cliente, p_id_mesa, JSON.stringify(json_fechamento)]})
    response = await transaction.manyOrNone(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível fechar esta mesa, por favor, tente novamente. Detalhes do erro: ${error.message}`, `error.message: [ ${error.message} ] error.code: [ ${error.code} ]`)
  }
  return camelize(response)
}

module.exports = {
	postNewClousureRepository
}
