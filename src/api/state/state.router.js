const express = require('express')
const { 
	getStateList,
	getStateById,
	getStateByName,
	getStateByCountryId,
	postState,
	putState,
	deleteState
} = require('./state.controller')

const router = express.Router()

router.get('/consultar/estado', getStateList)
router.get('/consultar/estado/:id', getStateById)
router.get('/consultar/estado/descricao/:name', getStateByName)
router.get('/consultar/estado/pais/:id', getStateByCountryId)
router.post('/cadastrar/estado/', postState)
router.put('/atualizar/estado/', putState)
router.delete('/deletar/estado/:id', deleteState)

module.exports = router