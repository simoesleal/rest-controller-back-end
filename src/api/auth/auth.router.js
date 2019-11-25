const express = require('express')

const { authenticate } = require('./auth.controller')

const router = express.Router()

router.post('/', authenticate)

module.exports = router