const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const router = require('../routes/router')

const NODE_ENV = process.env.NODE_ENV
const server = express()

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  server.use(morgan('combined'))
}

server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(bodyParser.json())
server.use(cors())
server.use(helmet())
server.use('/api/v1', router)
server.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

module.exports = server