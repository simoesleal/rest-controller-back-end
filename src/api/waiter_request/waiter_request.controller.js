const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	insertNewWaiterRequestService
} = require('./waiter_request.service')


async function insertNewWaiterRequest (req, res, next) {
	const { idMesa, idFuncionario, idContaCliente, valorTotal, produtos } = req.body
	let response
	try {
		response = await insertNewWaiterRequestService(idMesa, idFuncionario, idContaCliente, valorTotal, produtos)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Pedido realizado com sucesso.', response))
}


module.exports = {
	insertNewWaiterRequest
}