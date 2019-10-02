const DataHandler = require('../../handlers/data.handler')
const httpStatus = require('http-status')
const { 
	getBankAccountListService,
	getBankAccountByIdService,
	getBankAccountByNumberAccountService,
	postBankAccountService,
	putBankAccountService,
	deleteBankAccountService
} = require('./bank_account.service')

async function getBankAccountList (req, res, next) {
	let bankAccountList
	try {
		bankAccountList = await getBankAccountListService()
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta de Contas Bancárias realizada com sucesso.', bankAccountList))
}

async function getBankAccountById (req, res, next) {
	const { id } = req.params
	let bankAccount
	try {
		bankAccount = await getBankAccountByIdService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Conta Bancária realizada com sucesso.', bankAccount))
}

async function getBankAccountByNumberAccount (req, res, next) {
	const { accountNumber } = req.params
	let bankAccount
	try {
		bankAccount = await getBankAccountByNumberAccountService(accountNumber)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Consulta do Conta Bancária realizada com sucesso.', bankAccount))
}

async function postBankAccount (req, res, next) {
	const { id_banco, agency, agencyDigit, accountNumber, accountNumberDigit } = req.body
	let response
	try {
		response = await postBankAccountService(id_banco, agency, agencyDigit, accountNumber, accountNumberDigit)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta Bancária cadastrada com sucesso.', response))
}

async function putBankAccount (req, res, next) {
	const { id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit } = req.body
	let response
	try {
		response = await putBankAccountService(id, id_banco, agency, agencyDigit, accountNumber, accountNumberDigit)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta Bancária atualizada com sucesso.', response))
}

async function deleteBankAccount (req, res, next) {
	const { id } = req.params
	let response
	try {
		response = await deleteBankAccountService(id)
	} catch (error) {
		return next(error)
	}
	return res.json(new DataHandler(httpStatus.OK, 'Conta Bancária excluída com sucesso.', response))
}

module.exports = {
	getBankAccountList,
	getBankAccountById,
	getBankAccountByNumberAccount,
	postBankAccount,
	putBankAccount,
	deleteBankAccount
}