const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { authenticateService } = require('./auth.service')

async function authenticate (req, res, next) {
	let profile
	const { login, password } = req.body
	try {
		profile = await authenticateService(login, password)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Perfil carregado com sucesso.', profile))
}

module.exports = { 
	authenticate 
}