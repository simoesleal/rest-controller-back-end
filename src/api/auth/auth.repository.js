const camelize = require('camelize')
const validaTransaction = require('../utils/repositories')
const { PreparedStatement } = require('pg-promise')
const DefaultError = require('../../handlers/default-error.handler')
const { AUTH_LOGIN  } = require('./auth.queries')

async function authenticateRepository (login, password, transaction = null) {
  let response
  try {
    transaction = await validaTransaction(transaction)
    const QUERY = new PreparedStatement({name: 'auth-login', text: AUTH_LOGIN, values: [login, password]})
    response = await transaction.one(QUERY)
  } catch (error) {
      throw new DefaultError(`Não foi possível realizar o login com este usuário, por favor, tente novamente.`)
  }
  return camelize(response)
}

module.exports = {
	authenticateRepository
}