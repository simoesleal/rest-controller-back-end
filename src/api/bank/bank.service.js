const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_BANK } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const { HIDDEN_BIG_RETURN } = require('../utils/constants')
const {
	validateNewBank,
	validateUpdateBank
} = require('./bank.validation')
const { 
	getBankListRepository,
  getBankByIdRepository,
  getBankByNameRepository,
  postBankRepository,
  putBankRepository,
  deleteBankRepository
} = require('./bank.repository')

async function getBankListService () {
	let methodName = 'getBankListService'
	let bankList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_BANK)
		bankList = await getBankListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, HIDDEN_BIG_RETURN, LOG_BANK)
	return bankList
}

async function getBankByIdService (id) {
	let methodName = 'getBankByIdService'
	let bank
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_BANK)
		bank = await getBankByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, bank, LOG_BANK)
	return bank
}

async function getBankByNameService (name) {
	let methodName = 'getBankByNameService'
	let bank
	const preparedName = `%${name}%`
	try {
		logInfo(`Entering ${methodName}`, `name = [${preparedName}]`, LOG_BANK)
		bank = await getBankByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, bank, LOG_BANK)
	return bank
}

async function postBankService (name) {
	let methodName = 'postBankService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_BANK)
		await validateNewBank(name)
		response = await postBankRepository(name)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK)
	return response
}

async function putBankService (id, name) {
	let methodName = 'putBankService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}]`, LOG_BANK)
		await validateUpdateBank(id, name)
		response = await putBankRepository(id, name)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK)
	return response
}

async function deleteBankService (id) {
	let methodName = 'deleteBankService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_BANK)
		response = await deleteBankRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_BANK)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_BANK)
	return response
}

module.exports = {
	getBankListService,
	getBankByIdService,
	getBankByNameService,
	postBankService,
	putBankService,
	deleteBankService
}