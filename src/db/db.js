const config = require('../config/config')
const promise = require('bluebird')

const initOptions = {
	promiseLib: promise // overriding the default (ES6 Promise);
}
const pgp = require('pg-promise')(initOptions)

// Database connection details;
const cn = {
	host: config.db.host,
	port: config.db.port,
	user: config.db.user,
	password: config.db.pass,
	database: config.db.database,
}

const db = pgp(cn)

module.exports = db