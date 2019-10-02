const express = require('express')
const { 
	getUnityList,
	getUnityById,
	getUnityByName,
	postUnity,
	putUnity,
	deleteUnity
} = require('./unity.controller')

const router = express.Router()

router.get('/consultar/', getUnityList)
router.get('/consultar/:id', getUnityById)
router.get('/consultar/nome/:name', getUnityByName)
router.post('/cadastrar/', postUnity)
router.put('/atualizar/', putUnity)
router.delete('/deletar/:id', deleteUnity)

module.exports = router