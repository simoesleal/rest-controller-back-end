const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getUnityListService,
	getUnityByIdService,
	getUnityByNameService,
	postUnityService,
	putUnityService,
	deleteUnityService
} = require('./unity.service')

async function getUnityList (req, res, next) {
	let unityList
	try {
		unityList = await getUnityListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidades realizada com sucesso.', unityList))
}

async function getUnityById (req, res, next) {
	const { id } = req.params
	let unity
	try {
		unity = await getUnityByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidades realizada com sucesso.', unity))
}

async function getUnityByName (req, res, next) {
	const { name } = req.params
	let unity
	try {
		unity = await getUnityByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidades realizada com sucesso.', unity))
}

async function postUnity (req, res, next) {
	const { name, abbreviation } = req.body
	let response
	try {
		response = await postUnityService(name, abbreviation)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade cadastrada com sucesso.', response))
}

async function putUnity (req, res, next) {
	const { id, name, abbreviation } = req.body
	let response
	try {
		response = await putUnityService(id, name, abbreviation)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade atualizada com sucesso.', response))
}

async function deleteUnity (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteUnityService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade excluída com sucesso.', response))
}

module.exports = {
	getUnityList,
	getUnityById,
	getUnityByName,
	postUnity,
	putUnity,
	deleteUnity
}