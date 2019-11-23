const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_MENU_GROUP } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewMenuGroup,
	validateUpdateMenuGroup
} = require('./menu.group.validation')
const { 
  getMenuGroupListRepository,
  getMenuGroupByIdRepository,
  getMenuGroupByNameRepository,
  postMenuGroupRepository,
  putMenuGroupRepository,
  deleteMenuGroupRepository
} = require('./menu.group.repository')

async function getMenuGroupListService () {
	let methodName = 'getMenuGroupListService'
	let response
	try {
		logInfo(`Entering ${methodName}`, '', LOG_MENU_GROUP)
		response = await getMenuGroupListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

async function getMenuGroupByIdService (id) {
	let methodName = 'getMenuGroupByIdService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_MENU_GROUP)
		response = await getMenuGroupByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

async function getMenuGroupByNameService (name) {
	let methodName = 'getMenuGroupByNameService'
	let response
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_MENU_GROUP)
		preparedName = `%${name}%`
		response = await getMenuGroupByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

async function postMenuGroupService (name, status) {
	let methodName = 'postMenuGroupervice'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], status = [${status}]`, LOG_MENU_GROUP)
		await validateNewMenuGroup(name)
		response = await postMenuGroupRepository(name, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

async function putMenuGroupService (id, name, status) {
	let methodName = 'putMenuGroupService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], status = [${status}]`, LOG_MENU_GROUP)
		await validateUpdateMenuGroup(id, name)
		response = await putMenuGroupRepository(id, name, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

async function deleteMenuGroupService (id) {
	let methodName = 'deleteMenuGroupService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_MENU_GROUP)
		response = await deleteMenuGroupRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_MENU_GROUP)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_MENU_GROUP)
	return response
}

module.exports = {
	getMenuGroupListService,
	getMenuGroupByIdService,
	getMenuGroupByNameService,
	postMenuGroupService,
	putMenuGroupService,
	deleteMenuGroupService
}