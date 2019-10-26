const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCustomerListService,
	getCustomerByIdService,
	getCustomerByNameService,
	getCustomerByLastNameService,
	getCustomerByPhoneService,
	getCustomerByCellphoneService,
	postCustomerService,
	putCustomerService,
	deleteCustomerService
} = require('./customer.service')

async function getCustomerList (req, res, next) {
	let customerList
	try {
		customerList = await getCustomerListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Clientes realizada com sucesso.', customerList))
}

async function getCustomerById (req, res, next) {
	const { id } = req.params
	let customer
	try {
		customer = await getCustomerByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cliente realizada com sucesso.', customer))
}

async function getCustomerByName (req, res, next) {
	const { name } = req.params
	let customer
	try {
		customer = await getCustomerByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cliente realizada com sucesso.', customer))
}

async function getCustomerByLastName (req, res, next) {
	const { lastName } = req.params
	let customer
	try {
		customer = await getCustomerByLastNameService(lastName)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cliente realizada com sucesso.', customer))
}

async function getCustomerByPhone (req, res, next) {
	const { phone } = req.params
	let customer
	try {
		customer = await getCustomerByPhoneService(phone)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cliente realizada com sucesso.', customer))
}

async function getCustomerByCellphone (req, res, next) {
	const { cellphone } = req.params
	let customer
	try {
		customer = await getCustomerByCellphoneService(cellphone)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cliente realizada com sucesso.', customer))
}

async function postCustomer (req, res, next) {
	const { name, lastName, birth, sex, status, docs, docType, orgExp, email, phone, cellphone, preferences, id_endereco } = req.body
	let response
	try {
		response = await postCustomerService(name, lastName, birth, sex, status, docs, docType, orgExp, email, phone, cellphone, preferences, id_endereco)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cliente cadastrado com sucesso.', response))
}

async function putCustomer (req, res, next) {
	const { id, name, lastName, birth, sex, status, docs, docType, orgExp, email, phone, cellphone, preferences, id_endereco } = req.body
	let response
	try {
		response = await putCustomerService(id, name, lastName, birth, sex, status, docs, docType, orgExp, email, phone, cellphone, preferences, id_endereco)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cliente atualizado com sucesso.', response))
}

async function deleteCustomer (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteCustomerService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cliente excluído com sucesso.', response))
}

module.exports = {
	getCustomerList,
	getCustomerById,
	getCustomerByName,
	getCustomerByLastName,
	getCustomerByPhone,
	getCustomerByCellphone,
	postCustomer,
	putCustomer,
	deleteCustomer
}