const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_INSTALLMENTS_PAYABLES } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { 
	getInstallmentsRepository,	
	getInstallmentsByAccountIdRepository,
	getInstallmentsByIdentifierRepository,
	putInstallmetByIdRepository,
	setInstallmetPaidByIdRepository,
	setInstallmetCanceledByIdRepository
} = require('./installment.payables.repository')
const { validateUpdateInstallment } = require('./installment.payables.validation')

async function getInstallmentsService () {
	let methodName = 'getInstallmentsService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_INSTALLMENTS_PAYABLES)
		response = await getInstallmentsRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

async function getInstallmentsByAccountIdService (id) {
	let methodName = 'ggetInstallmentsByAccountIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_INSTALLMENTS_PAYABLES)
		response = await getInstallmentsByAccountIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

async function getInstallmentsByIdentifierService (identifier) {
	let methodName = 'ggetInstallmentsByIdentifierService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `identifier = [${identifier}]`, LOG_INSTALLMENTS_PAYABLES)
		preparedName = `%${identifier}%`
		response = await getInstallmentsByIdentifierRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

async function putInstallmetByIdService (id, dataEmissao, dataVencimento, dataApropriacao, descricao) {
	let methodName = 'putInstallmetByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], dataEmissao = [${dataEmissao}], dataVencimento = [${dataVencimento}], dataApropriacao = [${dataApropriacao}], descricao = [${descricao}]`, LOG_INSTALLMENTS_PAYABLES)

		await validateUpdateInstallment(id, dataEmissao, dataVencimento)

		response = await putInstallmetByIdRepository(id, dataEmissao, dataVencimento, dataApropriacao, descricao)

	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

async function setInstallmetPaidByIdService (id) {
	let methodName = 'setInstallmetPaidByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_INSTALLMENTS_PAYABLES)
		response = await setInstallmetPaidByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

async function setInstallmetCanceledByIdService (id) {
	let methodName = 'setInstallmetCanceledByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_INSTALLMENTS_PAYABLES)
		response = await setInstallmetCanceledByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_INSTALLMENTS_PAYABLES)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_INSTALLMENTS_PAYABLES)
	return response
}

module.exports = {
	getInstallmentsService,
	getInstallmentsByAccountIdService,
	getInstallmentsByIdentifierService,
	putInstallmetByIdService,
	setInstallmetPaidByIdService,
	setInstallmetCanceledByIdService
}