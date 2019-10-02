const express = require('express')
const { 
	getBankAccountList,
	getBankAccountById,
	getBankAccountByNumberAccount,
	postBankAccount,
	putBankAccount,
	deleteBankAccount
} = require('./bank_account.controller')

const router = express.Router()

router.get('/consultar/conta-bancaria', getBankAccountList)
router.get('/consultar/conta-bancaria/:id', getBankAccountById)
router.get('/consultar/conta-bancaria/descricao/:name', getBankAccountByNumberAccount)
router.post('/cadastrar/conta-bancaria/', postBankAccount)
router.put('/atualizar/conta-bancaria/', putBankAccount)
router.delete('/deletar/conta-bancaria/:id', deleteBankAccount)

module.exports = router