const httpStatus = require('http-status')

class ErrorHandler extends Error {
	constructor (mensagem, status = httpStatus.INTERNAL_SERVER_ERROR, conteudo = {}) {
		super(mensagem)
		this.mensagem = mensagem
		this.status = status
		this.conteudo = conteudo
	}
}


module.exports = ErrorHandler
