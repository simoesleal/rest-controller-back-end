const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_BANK_ACCOUNT } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewBankAccount,
  validateUpdateBankAccount
} = require('./bank_account.validation')
const { 
	getBankAccountListRepository,
  getBankAccountByIdRepository,
  getBankAccountByNumberAccountRepository,
  postBankAccountRepository,
  putBankAccountRepository,
  deleteBankAccountRepository
} = require('./bank_account.repository')

async function getBankAccountListService () {
	let methodName = 'getBankAccountListService'
	let bankAccountList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_BANK_ACCOUNT)
		bankAccountList = await getBankAccountListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, bankAccountList, LOG_BANK_ACCOUNT)
	return bankAccountList
}

async function getBankAccountByIdService (id) {
	let methodName = 'getBankAccountByIdService'
	let bankAccount
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_BANK_ACCOUNT)
		bankAccount = await getBankAccountByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, bankAccount, LOG_BANK_ACCOUNT)
	return bankAccount
}

async function getBankAccountByNumberAccountService (accountNumber) {
	let methodName = 'getBankAccountByNumberAccountService'
	let bankAccount
	try {
		logInfo(`Entering ${methodName}`, `accountNumber = [${accountNumber}]`, LOG_BANK_ACCOUNT)
		bankAccount = await getBankAccountByNumberAccountRepository(accountNumber)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, bankAccount, LOG_BANK_ACCOUNT)
	return bankAccount
}

async function postBankAccountService (id_banco, account, agency, agencyDigit, accountNumber, accountNumberDigit) {
	let methodName = 'postBankAccountService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id_banco = [${id_banco}], agency = [${agency}], account = [${account}],agencyDigit = [${agencyDigit}], accountNumber = [${accountNumber}], accountNumberDigit = [${accountNumberDigit}]`, LOG_BANK_ACCOUNT)
		await validateNewBankAccount(id_banco, agency, agencyDigit, accountNumber, accountNumberDigit)
		response = await postBankAccountRepository(id_banco, account, agency, agencyDigit, accountNumber, accountNumberDigit)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK_ACCOUNT)
	return response
}

async function putBankAccountService (id, id_banco, account, agency, agencyDigit, accountNumber, accountNumberDigit) {
	let methodName = 'putBankAccountService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], id_banco = [${id_banco}], account = [${account}], agency = [${agency}], agencyDigit = [${agencyDigit}], accountNumber = [${accountNumber}], accountNumberDigit = [${accountNumberDigit}]`, LOG_BANK_ACCOUNT)
		await validateUpdateBankAccount(id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit)
		response = await putBankAccountRepository(id, id_banco, account, agency, agencyDigit, accountNumber, accountNumberDigit)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK_ACCOUNT)
	return response
}

async function deleteBankAccountService (id) {
	let methodName = 'deleteBankAccountService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_BANK_ACCOUNT)
		response = await deleteBankAccountRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK_ACCOUNT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK_ACCOUNT)
	return response
}

module.exports = {
	getBankAccountListService,
	getBankAccountByIdService,
	getBankAccountByNumberAccountService,
	postBankAccountService,
	putBankAccountService,
	deleteBankAccountService
}