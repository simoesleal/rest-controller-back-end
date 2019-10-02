const express = require('express')
const { 
	getCountryList,
	getCountryById,
	getCountryByName,
	postCountry,
	putCountry,
	deleteCountry
} = require('./country.controller')

const router = express.Router()

router.get('/consultar/pais', getCountryList)
router.get('/consultar/pais/:id', getCountryById)
router.get('/consultar/pais/descricao/:name', getCountryByName)
router.post('/cadastrar/pais/', postCountry)
router.put('/atualizar/pais/', putCountry)
router.delete('/deletar/pais/:id', deleteCountry)

module.exports = router