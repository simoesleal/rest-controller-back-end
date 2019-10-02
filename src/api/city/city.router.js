const express = require('express')
const { 
	getCityList,
	getCityById,
	getCityByName,
	postCity,
	putCity,
	deleteCity
} = require('./city.controller')

const router = express.Router()

router.get('/consultar/cidade', getCityList)
router.get('/consultar/cidade/:id', getCityById)
router.get('/consultar/cidade/descricao/:name', getCityByName)
router.post('/cadastrar/cidade/', postCity)
router.put('/atualizar/cidade/', putCity)
router.delete('/deletar/cidade/:id', deleteCity)

module.exports = router