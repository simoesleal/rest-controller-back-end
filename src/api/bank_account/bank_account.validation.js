const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewBankAccount (id_banco, agency, account_number) {
  if (!await validateParam(id_banco)) throw new DefaultError(`Não identificamos o Banco da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id_banco nulo ou vazio')
  if (!await validateParam(agency)) throw new DefaultError(`Não identificamosa Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agency nulo ou vazio')
  if (!await validateParam(account_number)) throw new DefaultError(`Não identificamosa o número da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'account_number nulo ou vazio')
}

async function validateUpdateBankAccount (id, id_banco, agency, account_number) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(id_banco)) throw new DefaultError(`Não identificamos o Banco da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id_banco nulo ou vazio')
  if (!await validateParam(agency)) throw new DefaultError(`Não identificamosa Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agency nulo ou vazio')
  if (!await validateParam(account_number)) throw new DefaultError(`Não identificamosa o número da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'account_number nulo ou vazio')
}

module.exports = {
	validateNewBankAccount,
  validateUpdateBankAccount
}