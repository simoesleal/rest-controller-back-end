const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_QUOTATION } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewQuotation,
	validateUpdateQuotation
} = require('./quotation.validation')
const { 
  getQuotationListRepository,
  postQuotationRepository,
  putQuotationRepository,
  deleteQuotationRepository
} = require('./quotation.repository')

async function getQuotationListService () {
	let methodName = 'getQuotationListService'
	let quotationList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_QUOTATION)
		quotationList = await getQuotationListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_QUOTATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, quotationList, LOG_QUOTATION)
	return quotationList
}

async function postQuotationService (quotation, id_coin) {
	let methodName = 'postQuotationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `quotation = [${quotation}], id_coin = [${id_coin}]`, LOG_QUOTATION)
		await validateNewQuotation(quotation, id_coin)
		response = await postQuotationRepository(quotation, id_coin)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_QUOTATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_QUOTATION)
	return response
}

async function putQuotationService (id, quotation, id_coin) {
	let methodName = 'putQuotationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], quotation = [${quotation}], id_coin = [${id_coin}]`, LOG_QUOTATION)
		await validateUpdateQuotation(id, quotation, id_coin)
		response = await putQuotationRepository(id, quotation, id_coin)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_QUOTATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_QUOTATION)
	return response
}

async function deleteQuotationService (id) {
	let methodName = 'deleteQuotationService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_QUOTATION)
		response = await deleteQuotationRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_QUOTATION)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_QUOTATION)
	return response
}

module.exports = {
	getQuotationListService,
	postQuotationService,
	putQuotationService,
	deleteQuotationService
}