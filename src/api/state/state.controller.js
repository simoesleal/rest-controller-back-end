const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getStateListService,
	getStateByIdService,
	getStateByNameService,
	getStateByCountryIdService,
	postStateService,
	putStateService,
	deleteStateService
} = require('./state.service')

async function getStateList (req, res, next) {
	let stateList
	try {
		stateList = await getStateListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Estados realizada com sucesso.', stateList))
}

async function getStateById (req, res, next) {
	const { id } = req.params
	let state
	try {
		state = await getStateByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Estado realizada com sucesso.', state))
}

async function getStateByName (req, res, next) {
	const { name } = req.params
	let state
	try {
		state = await getStateByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Estado realizada com sucesso.', state))
}

async function getStateByCountryId (req, res, next) {
	const { id } = req.params
	let state
	try {
		state = await getStateByCountryIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Estado realizada com sucesso.', state))
}

async function postState (req, res, next) {
	const { name, uf, ibge, pais } = req.body
	let response
	try {
		response = await postStateService(name, uf, ibge, pais)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Estado cadastrado com sucesso.', response))
}

async function putState (req, res, next) {
	const { id, name, uf, ibge, pais } = req.body
	let response
	try {
		response = await putStateService(id, name, uf, ibge, pais)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Estado atualizado com sucesso.', response))
}

async function deleteState (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteStateService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Estado excluído com sucesso.', response))
}

module.exports = {
	getStateList,
	getStateById,
	getStateByName,
	getStateByCountryId,
	postState,
	putState,
	deleteState
}