const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getBankListService,
	getBankByIdService,
	getBankByNameService,
	postBankService,
	putBankService,
	deleteBankService
} = require('./bank.service')

async function getBankList (req, res, next) {
	let bankList
	try {
		bankList = await getBankListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de bancos realizada com sucesso.', bankList))
}

async function getBankById (req, res, next) {
	const { id } = req.params
	let bank
	try {
		bank = await getBankByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de banco realizada com sucesso.', bank))
}

async function getBankByName (req, res, next) {
	const { name } = req.params
	let bank
	try {
		bank = await getBankByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de banco realizada com sucesso.', bank))
}

async function postBank (req, res, next) {
	const { name } = req.body
	let response
	try {
		response = await postBankService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Banco cadastrado com sucesso.', response))
}

async function putBank (req, res, next) {
	const { id, name } = req.body
	let response
	try {
		response = await putBankService(id, name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Banco atualizado com sucesso.', response))
}

async function deleteBank (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteBankService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Banco excluído com sucesso.', response))
}

module.exports = {
	getBankList,
	getBankById,
	getBankByName,
	postBank,
	putBank,
	deleteBank
}