const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCountryListService,
	getCountryByIdService,
	getCountryByNameService,
	postCountryService,
	putCountryService,
	deleteCountryService
} = require('./country.service')

async function getCountryList (req, res, next) {
	let countryList
	try {
		countryList = await getCountryListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de países realizada com sucesso.', countryList))
}

async function getCountryById (req, res, next) {
	const { id } = req.params
	let country
	try {
		country = await getCountryByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de país realizada com sucesso.', country))
}

async function getCountryByName (req, res, next) {
	const { name } = req.params
	let country
	try {
		country = await getCountryByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de país realizada com sucesso.', country))
}

async function postCountry (req, res, next) {
	const { name, initials } = req.body
	const namePt = name
	let response
	try {
		response = await postCountryService(name, namePt, initials)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'País cadastrado com sucesso.', response))
}

async function putCountry (req, res, next) {
	const { id, name, initials } = req.body
	const namePt = name
	let response
	try {
		response = await putCountryService(id, name, namePt, initials)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'País atualizado com sucesso.', response))
}

async function deleteCountry (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteCountryService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'País excluído com sucesso.', response))
}

module.exports = {
	getCountryList,
	getCountryById,
	getCountryByName,
	postCountry,
	putCountry,
	deleteCountry
}