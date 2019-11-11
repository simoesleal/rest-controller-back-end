const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	postNewClousureService
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


module.exports = {
	postNewClousureControoler
}