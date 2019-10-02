const express = require('express')
const { 
	getBankList,
	getBankById,
	getBankByName,
	postBank,
	putBank,
	deleteBank
} = require('./bank.controller')

const router = express.Router()

router.get('/consultar/banco', getBankList)
router.get('/consultar/banco/:id', getBankById)
router.get('/consultar/banco/descricao/:name', getBankByName)
router.post('/cadastrar/banco/', postBank)
router.put('/atualizar/banco/', putBank)
router.delete('/deletar/banco/:id', deleteBank)

module.exports = router