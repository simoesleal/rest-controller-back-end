const express = require('express')
const { 
	getRegistrationInfo,
	createNewAccountReceivable,
	getAccountReceivablesList,
	getAccountReceivablesByIdentifier,
	putAccountReceivable,
	deleteAccountReceivable
} = require('./accounts.receivables.controller')

const router = express.Router()
router.get('/buscar/informacoes/cadastrais', getRegistrationInfo)
router.post('/nova-conta-receber', createNewAccountReceivable)
router.get('/consultar', getAccountReceivablesList)
router.get('/consultar/identificador/:identifier', getAccountReceivablesByIdentifier)
router.put('/atualizar/', putAccountReceivable)
router.delete('/deletar/:id', deleteAccountReceivable)
module.exports = router