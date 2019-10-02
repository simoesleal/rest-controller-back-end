const httpStatus = require('http-status')
const { logError, logInfo } =  require('../utils/log-config')
const {	LOG_EMPLOYEE } = require('../utils/log-categories')
const ErrorHandler = require('../../handlers/error.handler')
const {
	validateNewEmployee,
  validateUpdateEmployee,
	validateUpdatePasswordEmployee
} = require('./employee.validation')
const { 
	getEmployeeListRepository,
  getEmployeeByIdRepository,
  getEmployeeByNameRepository,
  postEmployeeRepository,
  putEmployeeRepository,
  putEmployeePasswordRepository,
  deleteEmployeeRepository
} = require('./employee.repository')

async function getEmployeeListService () {
	let methodName = 'getEmployeeListService'
	let employeeList
	try {
		logInfo(`Entering ${methodName}`, '', LOG_EMPLOYEE)
		employeeList = await getEmployeeListRepository()
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, employeeList, LOG_EMPLOYEE)
	return employeeList
}

async function getEmployeeByIdService (id) {
	let methodName = 'getEmployeeByIdService'
	let employee
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_EMPLOYEE)
		employee = await getEmployeeByIdRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, employee, LOG_EMPLOYEE)
	return employee
}

async function getEmployeeByNameService (name) {
	let methodName = 'getEmployeeByNameService'
	let employee
	let preparedName
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}]`, LOG_EMPLOYEE)
		preparedName = `%${name}%`
		employee = await getEmployeeByNameRepository(preparedName)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, employee, LOG_EMPLOYEE)
	return employee
}

async function postEmployeeService (name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao) {
	let methodName = 'postEmployeeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `name = [${name}], lastName = [${lastName}], birth = [${birth}], login = [${login}], status = [${status}], cpf = [${cpf}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], id_endereco = [${id_endereco}], id_funcao = [${id_funcao}]`, LOG_EMPLOYEE)
		await validateNewEmployee(name, lastName, birth, login, password, cpf, phone, id_endereco, id_funcao)
		response = await postEmployeeRepository(name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_EMPLOYEE)
	return response
}

async function putEmployeeService (id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao) {
	let methodName = 'putEmployeeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], name = [${name}], lastName = [${lastName}], birth = [${birth}], login = [${login}], status = [${status}], cpf = [${cpf}], email = [${email}], phone = [${phone}], cellphone = [${cellphone}], id_endereco = [${id_endereco}], id_funcao = [${id_funcao}]`, LOG_EMPLOYEE)
		await validateUpdateEmployee(id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao)
		response = await putEmployeeRepository(id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_EMPLOYEE)
	return response
}

async function putEmployeePasswordService (id, password) {
	let methodName = 'putEmployeePasswordService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}], password = [${password}]`, LOG_EMPLOYEE)
		await validateUpdatePasswordEmployee(id, password)
		response = await putEmployeePasswordRepository(id, password)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_EMPLOYEE)
	return response
}

async function deleteEmployeeService (id) {
	let methodName = 'deleteEmployeeService'
	let response
	try {
		logInfo(`Entering ${methodName}`, `id = [${id}]`, LOG_EMPLOYEE)
		response = await deleteEmployeeRepository(id)
	} catch (error) {
		logError(`Error ${methodName}`, `exception.mensagemLog = [ ${JSON.stringify(error.mensagemLog)} ]`, LOG_EMPLOYEE)
		throw new ErrorHandler(error.mensagem, httpStatus.BAD_REQUEST, false)
	}
	logInfo(`Returning ${methodName}`, response, LOG_EMPLOYEE)
	return response
}

module.exports = {
	getEmployeeListService,
	getEmployeeByIdService,
	getEmployeeByNameService,
	postEmployeeService,
	putEmployeeService,
	putEmployeePasswordService,
	deleteEmployeeService
}