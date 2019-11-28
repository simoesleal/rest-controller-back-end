const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_TYPE_DOCUMENT } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewTypeDocument,
	validateUpdateTypeDocument
} = require('./type.document.validation')
const { 
  getTypeDocumentListRepository,
  getTypeDocumentByIdRepository,
  getTypeDocumentByNameRepository,
  postTypeDocumentRepository,
  putTypeDocumentRepository,
  deleteTypeDocumentRepository
} = require('./type.document.repository')

async function getTypeDocumentListService () {
	let methodName = 'getTypeDocumentListService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_TYPE_DOCUMENT)
		response = await getTypeDocumentListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

async function getTypeDocumentByIdService (id) {
	let methodName = 'getTypeDocumentByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_TYPE_DOCUMENT)
		response = await getTypeDocumentByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

async function getTypeDocumentByNameService (typeDocument) {
	let methodName = 'getTypeDocumentByNameService'
	let response
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `typeDocument = [${typeDocument}]`, LOG_TYPE_DOCUMENT)
		preparedName = `%${typeDocument}%`
		response = await getTypeDocumentByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

async function postTypeDocumentService (typeDocument, description, status) {
	let methodName = 'postTypeDocumentService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `typeDocument = [${typeDocument}], description = [${description}], status = [${status}]`, LOG_TYPE_DOCUMENT)
		await validateNewTypeDocument(typeDocument)
		response = await postTypeDocumentRepository(typeDocument, description, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

async function putTypeDocumentService (id, typeDocument, description, status) {
	let methodName = 'putTypeDocumentService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], typeDocument = [${typeDocument}], description = [${description}], status = [${status}]`, LOG_TYPE_DOCUMENT)
		await validateUpdateTypeDocument(id, typeDocument)
		response = await putTypeDocumentRepository(id, typeDocument, description, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

async function deleteTypeDocumentService (id) {
	let methodName = 'deleteTypeDocumentService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_TYPE_DOCUMENT)
		response = await deleteTypeDocumentRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TYPE_DOCUMENT)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TYPE_DOCUMENT)
	return response
}

module.exports = {
	getTypeDocumentListService,
	getTypeDocumentByIdService,
	getTypeDocumentByNameService,
	postTypeDocumentService,
	putTypeDocumentService,
	deleteTypeDocumentService
}