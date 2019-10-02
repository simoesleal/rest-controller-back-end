const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getOccupationListService,
	getOccupationByIdService,
	getOccupationByNameService,
	postOccupationService,
	putOccupationService,
	deleteOccupationService
} = require('./occupation.service')

async function getOccupationList (req, res, next) {
	let occupationList
	try {
		occupationList = await getOccupationListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de funções realizada com sucesso.', occupationList))
}

async function getOccupationById (req, res, next) {
	const { id } = req.params
	let occupation
	try {
		occupation = await getOccupationByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de função realizada com sucesso.', occupation))
}

async function getOccupationByName (req, res, next) {
	const { name } = req.params
	let occupation
	try {
		occupation = await getOccupationByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de função realizada com sucesso.', occupation))
}

async function postOccupation (req, res, next) {
	const { name, details } = req.body
	let response
	try {
		response = await postOccupationService(name, details)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Função cadastrado com sucesso.', response))
}

async function putOccupation (req, res, next) {
	const { id, name, details } = req.body
	let response
	try {
		response = await putOccupationService(id, name, details)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Função atualizado com sucesso.', response))
}

async function deleteOccupation (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteOccupationService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Função excluída com sucesso.', response))
}

module.exports = {
	getOccupationList,
	getOccupationById,
	getOccupationByName,
	postOccupation,
	putOccupation,
	deleteOccupation
}