const express = require('express')
const { 
	getTableList,
	getTableById,
	getTableByNumber,
	postTable,
	putTable,
	deleteTable,
	getOccupiedTableList,
	occupyTable
} = require('./table.controller')

const router = express.Router()

router.get('/consultar/mesa', getTableList)
router.get('/consultar/mesa/:id', getTableById)
router.get('/consultar/mesa/numero/:number', getTableByNumber)
router.post('/cadastrar/mesa/', postTable)
router.put('/atualizar/mesa/', putTable)
router.delete('/deletar/mesa/:id', deleteTable)
router.get('/consultar/mesas/ocupadas', getOccupiedTableList)
router.put('/ocupar/mesa', occupyTable)

module.exports = router