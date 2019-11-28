const express = require('express')
const { 
	postNewPurchaseEntryController
} = require('./storage.controller')

const router = express.Router()

router.post('/nova-entrada-compra/', postNewPurchaseEntryController)

module.exports = router