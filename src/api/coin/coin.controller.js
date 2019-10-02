const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getCoinListService,
	getCoinByIdService,
	getCoinByNameService,
	postCoinService,
	putCoinService,
	deleteCoinService
} = require('./coin.service')

async function getCoinList (req, res, next) {
	let coinList
	try {
		coinList = await getCoinListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de moedas realizada com sucesso.', coinList))
}

async function getCoinById (req, res, next) {
	const { id } = req.params
	let coin
	try {
		coin = await getCoinByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de moedas realizada com sucesso.', coin))
}

async function getCoinByName (req, res, next) {
	const { name } = req.params
	let coin
	try {
		coin = await getCoinByNameService(name)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de moedas realizada com sucesso.', coin))
}

async function postCoin (req, res, next) {
	const { name, pluralName, symbol } = req.body
	let response
	try {
		response = await postCoinService(name, pluralName, symbol)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Moeda cadastrada com sucesso.', response))
}

async function putCoin (req, res, next) {
	const { id, name, pluralName, symbol } = req.body
	let response
	try {
		response = await putCoinService(id, name, pluralName, symbol)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Moeda atualizada com sucesso.', response))
}

async function deleteCoin (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteCoinService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Moeda excluída com sucesso.', response))
}

module.exports = {
	getCoinList,
	getCoinById,
	getCoinByName,
	postCoin,
	putCoin,
	deleteCoin
}