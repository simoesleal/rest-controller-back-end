const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getAddressByIdService,
	postAddressService,
	putAddressService
} = require('./address.service')

async function getAddressById (req, res, next) {
	const { id } = req.params
	let address
	try {
		address = await getAddressByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Endereço realizada com sucesso.', address))
}

async function postAddress (req, res, next) {
	const { zipcode, street, number, block, complement, country, state, city } = req.body
	let response
	try {
		response = await postAddressService(zipcode, street, number, block, complement, country, state, city)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Endereço cadastrado com sucesso.', response))
}

async function putAddress (req, res, next) {
	const { id, zipcode, street, number, block, complement, country, state, city } = req.body
	let response
	try {
		response = await putAddressService(id, zipcode, street, number, block, complement, country, state, city)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Endereço atualizado com sucesso.', response))
}


module.exports = {
	getAddressById,
	postAddress,
	putAddress
}