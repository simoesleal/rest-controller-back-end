const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getOccupiedTableListService,
	getOrderFromCustomerService
} = require('./customer.account.service')


async function getOccupiedTableList (req, res, next) {
	let tableList
	try {
		tableList = await getOccupiedTableListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesas ocupadas realizada com sucesso.', tableList))
}


async function getOrderFromCustomer (req, res, next) {
	let orderList
	const { idMesa, numeroMesa } = req.params
	try {
		orderList = await getOrderFromCustomerService(idMesa, numeroMesa)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de mesas ocupadas realizada com sucesso.', orderList))
}

module.exports = {
	getOccupiedTableList,
	getOrderFromCustomer
}