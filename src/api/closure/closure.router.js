const express = require('express')
const { 
	postNewClousureControoler
} = require('./closure.controller')

const router = express.Router()

router.post('/fechamento-mesa/', postNewClousureControoler)

module.exports = router