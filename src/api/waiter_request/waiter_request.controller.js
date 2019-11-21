const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	insertNewWaiterRequestService,
	deleteWaiterRequestService
} = require('./waiter_request.service')


async function insertNewWaiterRequest (req, res, next) {
	const { idMesa, idFuncionario, idContaCliente, produtos } = req.body
	let response
	try {
		response = await insertNewWaiterRequestService(idMesa, idFuncionario, idContaCliente, produtos)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Pedido realizado com sucesso.', response))
}

async function deleteWaiterRequest (req, res, next) {
	const { idProdutoPedido, idProduto, quantity } = req.body
	let response
	try {
		response = await deleteWaiterRequestService(idProdutoPedido, idProduto, quantity)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Pedido excluído com sucesso.', response))
}

module.exports = {
	insertNewWaiterRequest,
	deleteWaiterRequest
}