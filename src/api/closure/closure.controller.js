const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	postNewClousureService,
	getClousuresByCashRegisterIdService
} = require('./closure.service')

async function postNewClousureControoler (req, res, next) {
	const { p_id_conta_cliente, p_id_mesa, json_fechamento } = req.body
	let response
	try {
		response = await postNewClousureService(p_id_conta_cliente, p_id_mesa, json_fechamento)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Mesa fechada com sucesso.', response))
}

async function getClousuresByCashRegisterId (req, res, next) {
	let response
	const { idCaixa } = req.params
	try {
		response = await getClousuresByCashRegisterIdService(idCaixa)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de fechamentos de mesa realizada com sucesso.', response))
}


module.exports = {
	postNewClousureControoler,
	getClousuresByCashRegisterId
}