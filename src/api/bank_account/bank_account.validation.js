const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewBankAccount (id_banco, agency, agencyDigit, accountNumber, accountNumberDigit) {
  if (!await validateParam(id_banco)) throw new DefaultError(`Não identificamos o Banco da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id_banco nulo ou vazio')
  if (!await validateParam(agency)) throw new DefaultError(`Não identificamosa Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agency nulo ou vazio')
  if (!await validateParam(agencyDigit)) throw new DefaultError(`Não identificamosa o Digito da Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agencyDigit nulo ou vazio')
  if (!await validateParam(accountNumber)) throw new DefaultError(`Não identificamosa o número da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'accountNumber nulo ou vazio')
  if (!await validateParam(accountNumberDigit)) throw new DefaultError(`Não identificamosa o Digito da Conta da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'accountNumberDigit nulo ou vazio')
}

async function validateUpdateBankAccount (id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(id_banco)) throw new DefaultError(`Não identificamos o Banco da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'id_banco nulo ou vazio')
  if (!await validateParam(agency)) throw new DefaultError(`Não identificamosa Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agency nulo ou vazio')
  if (!await validateParam(agencyDigit)) throw new DefaultError(`Não identificamosa o Digito da Agência da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'agencyDigit nulo ou vazio')
  if (!await validateParam(accountNumber)) throw new DefaultError(`Não identificamosa o número da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'accountNumber nulo ou vazio')
  if (!await validateParam(accountNumberDigit)) throw new DefaultError(`Não identificamosa o Digito da Conta da Conta Bancária e este é um campo obrigatório. Por favor, tente novamente.`, 'accountNumberDigit nulo ou vazio')
}

module.exports = {
	validateNewBankAccount,
  validateUpdateBankAccount
}