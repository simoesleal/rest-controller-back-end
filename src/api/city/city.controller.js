const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCityListService,
	getCityByIdService,
	getCityByNameService,
	getCityByStateIdService,
	postCityService,
	putCityService,
	deleteCityService
} = require('./city.service')

async function getCityList (req, res, next) {
	let cityList
	try {
		cityList = await getCityListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cidades realizada com sucesso.', cityList))
}

async function getCityById (req, res, next) {
	const { id } = req.params
	let city
	try {
		city = await getCityByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cidade realizada com sucesso.', city))
}

async function getCityByName (req, res, next) {
	const { name } = req.params
	let city
	try {
		city = await getCityByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Cidade realizada com sucesso.', city))
}

async function getCityByStateId (req, res, next) {
	const { id } = req.params
	let state
	try {
		state = await getCityByStateIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Cidades realizada com sucesso.', state))
}

async function postCity (req, res, next) {
	const { name, state } = req.body
	let response
	try {
		response = await postCityService(name, state)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cidade cadastrada com sucesso.', response))
}

async function putCity (req, res, next) {
	const { id, name, state } = req.body
	let response
	try {
		response = await putCityService(id, name, state)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cidade atualizado com sucesso.', response))
}

async function deleteCity (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteCityService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Cidade excluída com sucesso.', response))
}

module.exports = {
	getCityList,
	getCityById,
	getCityByName,
	getCityByStateId,
	postCity,
	putCity,
	deleteCity
}