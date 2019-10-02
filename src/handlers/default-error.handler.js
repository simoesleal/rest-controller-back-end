class DefaultError extends Error {
	constructor (mensagem, mensagemLog = mensagem) {
		super(mensagem)
		this.mensagem = mensagem
		this.mensagemLog = mensagemLog
	}
}

module.exports = DefaultError