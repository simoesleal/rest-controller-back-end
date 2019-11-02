const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getUnitMeasurementListService,
	getUnitMeasurementByIdService,
	getUnitMeasurementByNameService,
	postUnitMeasurementService,
	putUnitMeasurementService,
	deleteUnitMeasurementService
} = require('./unit_measurement.service')

async function getUnitMeasurementList (req, res, next) {
	let response
	try {
		response = await getUnitMeasurementListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidades de medida realizada com sucesso.', response))
}

async function getUnitMeasurementById (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await getUnitMeasurementByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidades de medida realizada com sucesso.', response))
}

async function getUnitMeasurementByName (req, res, next) {
	const { name } = req.params
	let response
	try {
		response = await getUnitMeasurementByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de unidade de medida realizada com sucesso.', response))
}

async function postUnitMeasurement (req, res, next) {
	const { name, abbreviation, status } = req.body
	let response
	try {
		response = await postUnitMeasurementService(name, abbreviation, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade de medida cadastrada com sucesso.', response))
}

async function putUnitMeasurement (req, res, next) {
	const { id, name, abbreviation, status } = req.body
	let response
	try {
		response = await putUnitMeasurementService(id, name, abbreviation, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade de medida atualizada com sucesso.', response))
}

async function deleteUnitMeasurement (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteUnitMeasurementService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Unidade de medida excluída com sucesso.', response))
}

module.exports = {
	getUnitMeasurementList,
	getUnitMeasurementById,
	getUnitMeasurementByName,
	postUnitMeasurement,
	putUnitMeasurement,
	deleteUnitMeasurement
}