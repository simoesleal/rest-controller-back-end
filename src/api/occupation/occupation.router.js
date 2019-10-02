const express = require('express')
const { 
	getOccupationList,
	getOccupationById,
	getOccupationByName,
	postOccupation,
	putOccupation,
	deleteOccupation
} = require('./occupation.controller')

const router = express.Router()

router.get('/consultar/funcao', getOccupationList)
router.get('/consultar/funcao/:id', getOccupationById)
router.get('/consultar/funcao/descricao/:name', getOccupationByName)
router.post('/cadastrar/funcao/', postOccupation)
router.put('/atualizar/funcao/', putOccupation)
router.delete('/deletar/funcao/:id', deleteOccupation)

module.exports = router