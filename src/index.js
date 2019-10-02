const http = require('http')
const server = require('./server/server')
const config = require('./config/config')

const PORT = process.env.REST_CONTROLLER_API_PORT || config.api.port

global.Promise = require('bluebird')
const httpServer = http.createServer(server)
httpServer.listen(PORT, () => {
	console.log(`Server is running on PORT: ${PORT}`)
})