const express = require('express')
const { 
	getAccountPayablesList,
	getAccountPayableById,
	getAccountPayableByNumber,
	postAccountPayable,
	putAccountPayable,
	deleteAccountPayable
} = require('./accounts_payables.controller')

const router = express.Router()
router.get('/consultar/', getAccountPayablesList)
router.get('/consultar/:id', getAccountPayableById)
router.get('/consultar/numeracao/:number', getAccountPayableByNumber)
router.post('/cadastrar/', postAccountPayable)
router.put('/atualizar/', putAccountPayable)
router.delete('/deletar/:id', deleteAccountPayable)

module.exports = router