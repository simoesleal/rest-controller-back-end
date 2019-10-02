const dotenv = require('dotenv')

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'development' || NODE_ENV === 'test') dotenv.config()

const config = {
	db: {
		user: process.env.REST_CONTROLLER_DATABASE_USER || 'postgres',
		pass: process.env.REST_CONTROLLER_DATABASE_PASS || 'admin',
		host: process.env.REST_CONTROLLER_DATABASE_HOST || 'localhost',
		port: process.env.REST_CONTROLLER_DATABASE_PORT || 5432,
		database: (NODE_ENV === 'production') ? process.env.REST_CONTROLLER_DATABASE_DATABASE : (NODE_ENV === 'development') ? process.env.REST_CONTROLLER_DATABASE_DEV : (NODE_ENV === 'homolog') ? process.env.REST_CONTROLLER_DATABASE_HOMOLOG : process.env.REST_CONTROLLER_DATABASE_TEST
	},
	auth: {
		secret: process.env.REST_CONTROLLER_JWT_SECRET || 'secret'
	},
	api: {
		port: (NODE_ENV === 'production') ? process.env.API_PORT : 9000,
		upload_directory: process.env.REST_CONTROLLER_UPLOAD_DIRECTORY || '/tmp/'
	},
	upload: {
		path: process.env.REST_CONTROLLER_UPLOAD_DIRECTORY || '/users/anton/tmp'
	}
}

module.exports = config