const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getTableListService,
	getTableByIdService,
	getTableByNumberService,
	postTableService,
	putTableService,
	deleteTableService,
	getOccupiedTableListService,
	occupyTableService
} = require('./table.service')

async function getTableList (req, res, next) {
	let tableList
	try {
		tableList = await getTableListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesas realizada com sucesso.', tableList))
}

async function getTableById (req, res, next) {
	const { id } = req.params
	let table
	try {
		table = await getTableByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesa realizada com sucesso.', table))
}

async function getTableByNumber (req, res, next) {
	const { number } = req.params
	let table
	try {
		table = await getTableByNumberService(number)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesa realizada com sucesso.', table))
}

async function postTable (req, res, next) {
	const { number, details, status } = req.body
	let response
	try {
		response = await postTableService(number, details, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Mesa cadastrada com sucesso.', response))
}

async function putTable (req, res, next) {
	const { id, number, details, status } = req.body
	let response
	try {
		response = await putTableService(id, number, details, status)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Mesa atualizada com sucesso.', response))
}

async function deleteTable (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteTableService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Mesa excluído com sucesso.', response))
}

async function getOccupiedTableList (req, res, next) {
	let tableList
	try {
		tableList = await getOccupiedTableListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesas realizada com sucesso.', tableList))
}

async function occupyTable (req, res, next) {
	const { id } = req.body
	let response
	try {
		response = await occupyTableService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Mesa atualizada com sucesso.', response))
}

module.exports = {
	getTableList,
	getTableById,
	getTableByNumber,
	postTable,
	putTable,
	deleteTable,
	getOccupiedTableList,
	occupyTable
}