const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_ACCOUNT_PAYABLES } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
  validateUpdateAccountPayable,
	validateCreateNewAccountPayable
} = require('./accounts_payables.validation')
const { 
	getAccountPayablesListRepository,
  getAccountPayableByIdRepository,
  getAccountPayableByIdentifierRepository,
  putAccountPayableRepository,
  deleteAccountPayableInstallmentsRepository,
	createNewAccountPayableRepository,
	getInstallmentsByAccountIdRepository,
	getInstallmentsRepository,
	deleteAccountInstallmentsRepository
} = require('./accounts_payables.repository')
const { getSupplierListService } = require('../supplier/supplier.service')
const { getTypeDocumentListService } = require('../type_document/type.document.service')
const { getBankAccountListService } = require('../bank_account/bank_account.service')
const { getCoinListService } = require('../coin/coin.service')

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

async function getAccountPayableByIdentifierService (number) {
	let methodName = 'getAccountPayableByIdentifierService'
	let accountPayable
	try {
		logInfo(`Entering ${methodName}`, `number = [${number}]`, LOG_ACCOUNT_PAYABLES)
		preparedName = `%${number}%`
		accountPayable = await getAccountPayableByIdentifierRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, accountPayable, LOG_ACCOUNT_PAYABLES)
	return accountPayable
}

async function putAccountPayableService (id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria) {
	let methodName = 'putAccountPayableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], idFornecedor = [${idFornecedor}], idMoeda = [${idMoeda}], idTipoDocumento = [${idTipoDocumento}], idContaBancaria = [${idContaBancaria}]`, LOG_ACCOUNT_PAYABLES)

		await validateUpdateAccountPayable(id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria)

		response = await putAccountPayableRepository(id, idFornecedor, idMoeda, idTipoDocumento, idContaBancaria)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function deleteAccountPayableInstallmentsService (id) {
	let methodName = 'deleteAccountPayableInstallmentsService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_PAYABLES)
		await deleteAccountInstallmentsService(id)
		response = await deleteAccountPayableInstallmentsRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function deleteAccountInstallmentsService (id) {
	let methodName = 'deleteAccountInstallmentsService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_PAYABLES)
		response = await deleteAccountInstallmentsRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function getRegistrationInfoService () {
	let supplierList, documentTypeList, bankAccountList, coinList
	try {
		supplierList = await getSupplierListService()
		documentTypeList = await getTypeDocumentListService()
		bankAccountList = await getBankAccountListService()
		coinList = await getCoinListService()
		payload = getPayloadAccountPayableInfo(supplierList, documentTypeList, bankAccountList, coinList)
	} catch (error) {
		return next(error)
	}
	return payload
}

function getPayloadAccountPayableInfo (supplierList, documentTypeList, bankAccountList, coinList) {
	let accountPayableInfo = {
		supplierList,
		documentTypeList,
		bankAccountList,
		coinList
	}
	return accountPayableInfo
}

async function createNewAccountPayableService (identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment) {
	let methodName = 'createNewAccountPayableService'
	let response
	try {


		logInfo(`Entering ${methodName}`, `identifier = [${identifier}], qtdInstallment = [${qtdInstallment}], totalValue = [${totalValue}],description = [${description}], idFornecedor = [${idFornecedor}], idTipoDocumento = [${idTipoDocumento}], idContaBancaria = [${idContaBancaria}], idMoeda = [${idMoeda}], Installment = [${JSON.stringify(Installment)}]`, LOG_ACCOUNT_PAYABLES)

		
		await validateCreateNewAccountPayable(identifier, qtdInstallment, totalValue, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment)

		response = await createNewAccountPayableRepository(identifier, qtdInstallment, totalValue, description, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, Installment)
		
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function getInstallmentsByAccountIdIdService (id) {
	let methodName = 'ggetInstallmentsByAccountIdIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_ACCOUNT_PAYABLES)
		response = await getInstallmentsByAccountIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_ACCOUNT_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_ACCOUNT_PAYABLES)
	return response
}

async function getInstallmentsService () {
	let methodName = 'getInstallmentsService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_ACCOUNT_PAYABLES)
		response = await getInstallmentsRepository()
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
	getAccountPayableByIdentifierService,
	putAccountPayableService,
	deleteAccountPayableInstallmentsService,
	getRegistrationInfoService,
	createNewAccountPayableService,
	getInstallmentsByAccountIdIdService,
	getInstallmentsService,
	deleteAccountInstallmentsService
}