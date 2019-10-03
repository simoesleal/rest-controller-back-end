const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_ACCOUNT_PAYABLES } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewAccountPayable,
  validateUpdateAccountPayable
} = require('./accounts_payables.validation')
const { 
	getAccountPayablesListRepository,
  getAccountPayableByIdRepository,
  getAccountPayableByNumberRepository,
  postAccountPayableRepository,
  putAccountPayableRepository,
  deleteAccountPayableRepository
} = require('./accounts_payables.repository')

async function getAccountPayablesListService () {
	let methodName = 'getAccountPayablesListService'
	let accountPayablesList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_ACCOUNT_PAYABLES)
		accountPayablesList = await getAccountPayablesListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_ACCOUNT_PAYABLES)
	return accountPayablesList
}

async function getAccountPayableByIdService (id) {
	let methodName = 'getAccountPayableByIdService'
	let accountPayable
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_PAYABLES)
		accountPayable = await getAccountPayableByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, accountPayable, LOG_ACCOUNT_PAYABLES)
	return accountPayable
}

async function getAccountPayableByNumberService (number) {
	let methodName = 'getAccountPayableByNumberService'
	let accountPayable
	try {
		logInfo(`Entering ${methodName}`, `number = [${number}]`, LOG_ACCOUNT_PAYABLES)
		accountPayable = await getAccountPayableByNumberRepository(number)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, accountPayable, LOG_ACCOUNT_PAYABLES)
	return accountPayable
}


async function postAccountPayableService (number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) {
	let methodName = 'postAccountPayableService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `number = [${number}], issueDay = [${issueDay}], dueDay = [${dueDay}], installmentValue = [${installmentValue}], totalValue = [${totalValue}], historic = [${historic}], observations = [${observations}], id_fornecedor = [${id_fornecedor}], id_moeda = [${id_moeda}], id_conta_bancaria = [${id_conta_bancaria}], id_forma_pagamento = [${id_forma_pagamento}], id_condicao_pagamento = [${id_condicao_pagamento}]`, LOG_ACCOUNT_PAYABLES)

		await validateNewAccountPayable(number, issueDay, dueDay, installmentValue, totalValue, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)

		response = await postAccountPayableRepository(number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function putAccountPayableService (id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) {
	let methodName = 'putAccountPayableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}],number = [${number}], issueDay = [${issueDay}], dueDay = [${dueDay}], installmentValue = [${installmentValue}], totalValue = [${totalValue}], historic = [${historic}], observations = [${observations}], id_fornecedor = [${id_fornecedor}], id_moeda = [${id_moeda}], id_conta_bancaria = [${id_conta_bancaria}], id_forma_pagamento = [${id_forma_pagamento}], id_condicao_pagamento = [${id_condicao_pagamento}]`, LOG_ACCOUNT_PAYABLES)

		await validateUpdateAccountPayable(id, number, issueDay, dueDay, installmentValue, totalValue, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)

		response = await putAccountPayableRepository(id, number, issueDay, dueDay, installmentValue, totalValue, historic, observations, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function deleteAccountPayableService (id) {
	let methodName = 'deleteAccountPayableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_PAYABLES)
		response = await deleteAccountPayableRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

module.exports = {
	getAccountPayablesListService,
	getAccountPayableByIdService,
	getAccountPayableByNumberService,
	postAccountPayableService,
	putAccountPayableService,
	deleteAccountPayableService
}