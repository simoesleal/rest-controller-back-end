const express = require('express')
const { 
	getAccountPayablesList,
	getAccountPayableById,
	getAccountPayableByIdentifier,
	putAccountPayable,
	deleteAccountPayableInstallments,
	getRegistrationInfo,
	createNewAccountPayable,
	getInstallmentsByAccountId,
	getInstallments
} = require('./accounts_payables.controller')

const router = express.Router()
router.get('/consultar/', getAccountPayablesList)
router.get('/consultar/:id', getAccountPayableById)
router.get('/consultar/numeracao/:number', getAccountPayableByIdentifier)
router.put('/atualizar/', putAccountPayable)
router.delete('/deletar/:id', deleteAccountPayableInstallments)
router.get('/buscar/informacoes/cadastrais', getRegistrationInfo)
router.post('/nova-conta-pagar', createNewAccountPayable)
router.get('/detalhes-conta-pagar/:id', getInstallmentsByAccountId)
router.get('/parcelas', getInstallments)


module.exports = router