const express = require('express')
const { 
	getCoinList,
	getCoinById,
	getCoinByName,
	postCoin,
	putCoin,
	deleteCoin
} = require('./coin.controller')

const router = express.Router()

router.get('/consultar/', getCoinList)
router.get('/consultar/:id', getCoinById)
router.get('/consultar/nome/:name', getCoinByName)
router.post('/cadastrar/', postCoin)
router.put('/atualizar/', putCoin)
router.delete('/deletar/:id', deleteCoin)

module.exports = router