class DataHandler {
	constructor (status, mensagem, conteudo = {}) {
		this.status = status
		this.mensagem = mensagem
		this.conteudo = conteudo
	}
}

module.exports = DataHandler