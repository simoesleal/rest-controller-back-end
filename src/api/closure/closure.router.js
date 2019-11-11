const express = require('express')
const { 
	postNewClousureControoler,
	getClousuresByCashRegisterId
} = require('./closure.controller')

const router = express.Router()

router.post('/novo-fechamento/', postNewClousureControoler)
router.get('/consultar/fechamentos/:idCaixa', getClousuresByCashRegisterId)
module.exports = router