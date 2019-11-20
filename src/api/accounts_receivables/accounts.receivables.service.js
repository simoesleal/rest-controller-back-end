const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_ACCOUNT_RECEIVABLES } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateUpdateAccountReceivable,
	validateCreateNewAccountReceivable
} = require('./accounts.receivables.validation')
const { 
	createNewAccountReceivablesRepository,
	getAccountReceivablesListRepository,
  getAccountReceivablesByIdentifierRepository,
	putAccountReceivableRepository,
  deleteAccountReceivableRepository,
  deleteAccountInstallmentsRepository,
} = require('./accounts.receivables.repository')

const { getCustomerListService } = require('../customer/customer.service')
const { getTypeDocumentListService } = require('../type_document/type.document.service')
const { getBankAccountListService } = require('../bank_account/bank_account.service')
const { getCoinListService } = require('../coin/coin.service')


async function getAccountReceivablesListService () {
	let methodName = 'getAccountReceivablesListService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_ACCOUNT_RECEIVABLES)
		response = await getAccountReceivablesListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)}]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

async function getAccountReceivablesByIdentifierService (identifier) {
	let methodName = 'getAccountReceivablesByIdentifierService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `identifier = [${identifier}]`, LOG_ACCOUNT_RECEIVABLES)
		preparedName = `%${identifier}%`
		response = await getAccountReceivablesByIdentifierRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

async function getRegistrationInfoService () {
	let customerList, documentTypeList, bankAccountList, coinList
	try {
		customerList = await getCustomerListService()
		documentTypeList = await getTypeDocumentListService()
		bankAccountList = await getBankAccountListService()
		coinList = await getCoinListService()
		payload = getPayloadAccountPayableInfo(customerList, documentTypeList, bankAccountList, coinList)
	} catch (error) {
		return next(error)
	}
	return payload
}

function getPayloadAccountPayableInfo (customerList, documentTypeList, bankAccountList, coinList) {
	let accountPayableInfo = {
		customerList,
		documentTypeList,
		bankAccountList,
		coinList
	}
	return accountPayableInfo
}

async function createNewAccountReceivableService (identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment) {
	let methodName = 'createNewAccountReceivableService'
	let response
	try {

		logInfo(`Entering ${methodName}`, `identifier = [${identifier}], qtdInstallment = [${qtdInstallment}], totalValue = [${totalValue}],description = [${description}], idCliente = [${idCliente}], idTipoDocumento = [${idTipoDocumento}], idContaBancaria = [${idContaBancaria}], idMoeda = [${idMoeda}], Installment = [${JSON.stringify(Installment)}]`, LOG_ACCOUNT_RECEIVABLES)

		
		await validateCreateNewAccountReceivable(identifier, qtdInstallment, totalValue, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment)

		response = await createNewAccountReceivablesRepository(identifier, qtdInstallment, totalValue, description, idCliente, idTipoDocumento, idContaBancaria, idMoeda, Installment)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

async function putAccountReceivableService (id, idCliente, idMoeda, idTipoDocumento, idContaBancaria) {
	let methodName = 'putAccountReceivableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], idCliente = [${idCliente}], idMoeda = [${idMoeda}], idTipoDocumento = [${idTipoDocumento}], idContaBancaria = [${idContaBancaria}]`, LOG_ACCOUNT_RECEIVABLES)

		await validateUpdateAccountReceivable(id, idCliente, idMoeda, idTipoDocumento, idContaBancaria)

		response = await putAccountReceivableRepository(id, idCliente, idMoeda, idTipoDocumento, idContaBancaria)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

async function deleteAccountReceivableService (id) {
	let methodName = 'deleteAccountReceivableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_RECEIVABLES)
		await deleteAccountInstallmentsService(id)
		response = await deleteAccountReceivableRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

async function deleteAccountInstallmentsService (id) {
	let methodName = 'deleteAccountInstallmentsService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_RECEIVABLES)
		response = await deleteAccountInstallmentsRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_RECEIVABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_RECEIVABLES)
	return response
}

module.exports = {
	getRegistrationInfoService,
	createNewAccountReceivableService,
	getAccountReceivablesListService,
	getAccountReceivablesByIdentifierService,
	putAccountReceivableService,
	deleteAccountReceivableService
}