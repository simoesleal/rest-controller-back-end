const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getEmployeeListService,
	getEmployeeByIdService,
	getEmployeeByNameService,
	postEmployeeService,
	putEmployeeService,
	putEmployeePasswordService,
	deleteEmployeeService
} = require('./employee.service')

async function getEmployeeList (req, res, next) {
	let employeeList
	try {
		employeeList = await getEmployeeListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Funcionários realizada com sucesso.', employeeList))
}

async function getEmployeeById (req, res, next) {
	const { id } = req.params
	let employee
	try {
		employee = await getEmployeeByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Funcionário realizada com sucesso.', employee))
}

async function getEmployeeByName (req, res, next) {
	const { name } = req.params
	let employee
	try {
		employee = await getEmployeeByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Funcionário realizada com sucesso.', employee))
}

async function postEmployee (req, res, next) {
	const { name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao } = req.body
	let response
	try {
		response = await postEmployeeService(name, lastName, birth, login, password, status, cpf, email, phone, cellphone, id_endereco, id_funcao)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Funcionário cadastrado com sucesso.', response))
}

async function putEmployee (req, res, next) {
	const { id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao } = req.body
	let response
	try {
		response = await putEmployeeService(id, name, lastName, birth, login, status, cpf, email, phone, cellphone, id_endereco, id_funcao)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Funcionário atualizado com sucesso.', response))
}

async function putEmployeePassword (req, res, next) {
	const { id, password } = req.body
	let response
	try {
		response = await putEmployeePasswordService(id, password)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Senha do funcionário atualizada com sucesso.', response))
}

async function deleteEmployee (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteEmployeeService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Funcionário excluído com sucesso.', response))
}

module.exports = {
	getEmployeeList,
	getEmployeeById,
	getEmployeeByName,
	postEmployee,
	putEmployee,
	putEmployeePassword,
	deleteEmployee

}