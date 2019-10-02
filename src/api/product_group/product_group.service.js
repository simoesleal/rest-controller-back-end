const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_PRODUCT_GROUP } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewProductGroup,
	validateUpdateProductGroup
} = require('./product_group.validation')
const { 
	getProductGroupListRepository,
	getProductGroupByIdRepository,
	getProductGroupByNameRepository,
	postProductGroupRepository,
	putProductGroupRepository,
	deleteProductGroupRepository
} = require('./product_group.repository')

async function getProductGroupListService () {
	let methodName = 'getProductGroupListService'
	let productGroupList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_PRODUCT_GROUP)
		productGroupList = await getProductGroupListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, productGroupList, LOG_PRODUCT_GROUP)
	return productGroupList
}

async function getProductGroupByIdService (id) {
	let methodName = 'getProductGroupByIdService'
	let productGroup
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PRODUCT_GROUP)
		productGroup = await getProductGroupByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, productGroup, LOG_PRODUCT_GROUP)
	return productGroup
}

async function getProductGroupByNameService (name) {
	let methodName = 'getProductGroupByNameService'
	let productGroup
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_PRODUCT_GROUP)
		preparedName = `%${name}%`
		productGroup = await getProductGroupByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, productGroup, LOG_PRODUCT_GROUP)
	return productGroup
}

async function postProductGroupService (name, details, status) {
	let methodName = 'postProductGroupService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], details = [${details}], status = [${status}]`, LOG_PRODUCT_GROUP)
		await validateNewProductGroup(name)
		response = await postProductGroupRepository(name, details, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT_GROUP)
	return response
}

async function putProductGroupService (id, name, details, status) {
	let methodName = 'putProductGroupService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], details = [${details}], status = [${status}]`, LOG_PRODUCT_GROUP)
		await validateUpdateProductGroup(id, name)
		response = await putProductGroupRepository(id, name, details, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT_GROUP)
	return response
}

async function deleteProductGroupService (id) {
	let methodName = 'deleteProductGroupService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_PRODUCT_GROUP)
		response = await deleteProductGroupRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_PRODUCT_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_PRODUCT_GROUP)
	return response
}

module.exports = {
	getProductGroupListService,
	getProductGroupByIdService,
	getProductGroupByNameService,
	postProductGroupService,
	putProductGroupService,
	deleteProductGroupService
}