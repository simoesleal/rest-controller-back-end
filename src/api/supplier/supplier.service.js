const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_SUPPLIER } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewSupplier,
  validateUpdateSupplier,
} = require('./supplier.validation')
const { 
	getSupplierListRepository,
  getSupplierByIdRepository,
  getSupplierByRazaoSocialRepository,
  getSupplierByNomeFantasiaRepository,
  postSupplierRepository,
  putSupplierRepository,
  deleteSupplierRepository
} = require('./supplier.repository')
const { getCountryByIdService } = require('../country/country.service')
const { getStateByIdService } = require('../state/state.service')
const { getCityByIdService } = require('../city/city.service')
async function getSupplierListService () {
	let methodName = 'getSupplierListService'
	let supplierList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_SUPPLIER)
		supplierList = await getSupplierListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, supplierList, LOG_SUPPLIER)
	return supplierList
}

async function getSupplierByIdService (id) {
	let methodName = 'getSupplierByIdService'
	let supplier, country, state, city, payload
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_SUPPLIER)
		supplier = await getSupplierByIdRepository(id)
		country = await getCountryByIdService(supplier.pais)
		state = await getStateByIdService(supplier.estado)
		city = await getCityByIdService(supplier.cidade)
		payload = getPayloadSupplierInfo(supplier, country, state, city)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, supplier, LOG_SUPPLIER)
	return payload
}

function getPayloadSupplierInfo (supplier, country, state, city) {
	let supplierInfo = {
		supplier: {
			info: supplier,
			country,
			state,
			city
		}
	}
	return supplierInfo
}

async function getSupplierByRazaoSocialService (razaoSocial) {
	let methodName = 'getSupplierByRazaoSocial'
	let supplier
	let preparedRazaoSocial
	try {
		logInfo(`Entering ${methodName}`, `razaoSocial = [${razaoSocial}]`, LOG_SUPPLIER)
		preparedRazaoSocial = `%${razaoSocial}%`
		supplier = await getSupplierByRazaoSocialRepository(preparedRazaoSocial)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, supplier, LOG_SUPPLIER)
	return supplier
}

async function getSupplierByNomeFantasiaService (fakeName) {
	let methodName = 'getSupplierByNomeFantasia'
	let customer
	let preparedFakeName
	try {
		logInfo(`Entering ${methodName}`, `lastName = [${fakeName}]`, LOG_SUPPLIER)
		preparedFakeName = `%${fakeName}%`
		customer = await getSupplierByNomeFantasiaRepository(preparedFakeName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, customer, LOG_SUPPLIER)
	return customer
}


async function postSupplierService (nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco) {
	let methodName = 'postSupplierService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `nome_fantasia = [${nome_fantasia}], razao_social = [${razao_social}], cpf_cnpj = [${cpf_cnpj}], insc_municipal = [${insc_municipal}], insc_estadual = [${insc_estadual}], status = [${status}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], conta_corrente = [${conta_corrente}], id_endereco = [${id_endereco}]`, LOG_SUPPLIER)
		await validateNewSupplier(nome_fantasia, razao_social, cpf_cnpj, id_endereco)
		response = await postSupplierRepository(nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_SUPPLIER)
	return response
}

async function putSupplierService (id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco) {
	let methodName = 'putSupplierService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], nome_fantasia = [${nome_fantasia}], razao_social = [${razao_social}], cpf_cnpj = [${cpf_cnpj}], insc_municipal = [${insc_municipal}], insc_estadual = [${insc_estadual}], status = [${status}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], conta_corrente = [${conta_corrente}], id_endereco = [${id_endereco}]`, LOG_SUPPLIER)
		await validateUpdateSupplier(id, nome_fantasia, razao_social, cpf_cnpj, id_endereco)
		response = await putSupplierRepository(id, nome_fantasia, razao_social, cpf_cnpj, insc_municipal, insc_estadual, status, email, phone, cellphone, conta_corrente, id_endereco)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_SUPPLIER)
	return response
}

async function deleteSupplierService (id) {
	let methodName = 'deleteSupplierService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_SUPPLIER)
		response = await deleteSupplierRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_SUPPLIER)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_SUPPLIER)
	return response
}

module.exports = {
	getSupplierListService,
	getSupplierByIdService,
	getSupplierByRazaoSocialService,
	getSupplierByNomeFantasiaService,
	postSupplierService,
	putSupplierService,
	deleteSupplierService
}