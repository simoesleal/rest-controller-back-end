const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_TABLE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewTable,
	validateUpdateTable
} = require('./table.validation')
const { 
	getTableListRepository,
  getTableByIdRepository,
  getTableByNumberRepository,
  postTableRepository,
  putTableRepository,
  deleteTableRepository
} = require('./table.repository')

async function getTableListService () {
	let methodName = 'getTableListService'
	let tableList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_TABLE)
		tableList = await getTableListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, tableList, LOG_TABLE)
	return tableList
}

async function getTableByIdService (id) {
	let methodName = 'getTableByIdService'
	let table
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_TABLE)
		table = await getTableByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, table, LOG_TABLE)
	return table
}

async function getTableByNumberService (number) {
	let methodName = 'getTableByNumberService'
	let table
	try {
		logInfo(`Entering ${methodName}`, `number = [${number}]`, LOG_TABLE)
		table = await getTableByNumberRepository(number)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, table, LOG_TABLE)
	return table
}

async function postTableService (number, details, status) {
	let methodName = 'postTableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `number = [${number}], details = [${details}], status = [${status}]`, LOG_TABLE)
		await validateNewTable(number)
		response = await postTableRepository(number, details, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TABLE)
	return response
}

async function putTableService (id, number, details, status) {
	let methodName = 'putTableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], number = [${number}], details = [${details}], status = [${status}]`, LOG_TABLE)
		await validateUpdateTable(id, number)
		response = await putTableRepository(id, number, details, status)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TABLE)
	return response
}

async function deleteTableService (id) {
	let methodName = 'deleteTableService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_TABLE)
		response = await deleteTableRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_TABLE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_TABLE)
	return response
}

module.exports = {
	getTableListService,
	getTableByIdService,
	getTableByNumberService,
	postTableService,
	putTableService,
	deleteTableService
}