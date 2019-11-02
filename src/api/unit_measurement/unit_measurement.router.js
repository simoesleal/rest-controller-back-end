const express = require('express')
const { 
	getUnitMeasurementList,
	getUnitMeasurementById,
	getUnitMeasurementByName,
	postUnitMeasurement,
	putUnitMeasurement,
	deleteUnitMeasurement
} = require('./unit_measurement.controller')

const router = express.Router()

router.get('/consultar/', getUnitMeasurementList)
router.get('/consultar/:id', getUnitMeasurementById)
router.get('/consultar/nome/:name', getUnitMeasurementByName)
router.post('/cadastrar/', postUnitMeasurement)
router.put('/atualizar/', putUnitMeasurement)
router.delete('/deletar/:id', deleteUnitMeasurement)

module.exports = router