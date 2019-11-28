const DefaultError = require('../../handlers/default-error.handler')

async function validateNewPurchaseEntry (numeroNota, serieNota, totalValue, dataEmissao, dataVencimento, idFornecedor, idTipoDocumento, idContaBancaria, idMoeda, products) {
  if (!numeroNota) throw new DefaultError(`Não identificamos o número da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'numeroNota nulo ou vazio')
  if (!serieNota) throw new DefaultError(`Não identificamos a série da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'serieNota nulo ou vazio')
  if (!totalValue) throw new DefaultError(`Não identificamos o valor total da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'totalValue nulo ou vazio')
  if (!dataEmissao) throw new DefaultError(`Não identificamos a data de emissão da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'dataEmissao nulo ou vazio')
  if (!dataVencimento) throw new DefaultError(`Não identificamos a data de vencimento da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'dataVencimento nulo ou vazio')
  if (!idFornecedor) throw new DefaultError(`Não identificamos o fornecedor da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'idFornecedor nulo ou vazio')
  if (!idTipoDocumento) throw new DefaultError(`Não identificamos o tipo de documento da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'idTipoDocumento nulo ou vazio')
  if (!idContaBancaria) throw new DefaultError(`Não identificamos a conta bancária da nota e este é um campo obrigatório. Por favor, tente novamente.`, 'idContaBancaria nulo ou vazio')
  if (!idMoeda) throw new DefaultError(`Não identificamos a moeda utilizada para pagar a nota e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio')
  if (!products) { 
		throw new DefaultError(`Não identificamos nenhum produto na na nota e este é um campo obrigatório. Por favor, tente novamente.`, 'idMoeda nulo ou vazio') 
	} else {
		for (let i = 0; i < products.length; i++) {
			if (!products[i].qtdCompra) {
				throw new DefaultError(`Não identificamos a quantidade em um dos produtos da lista. Por favor, tente novamente.`, 'qtdCompra nulo ou vazio') 
			} else if (products[i].qtdCompra <= 0) {
				throw new DefaultError(`Quantidade comprada do produto inválida. Por favor, tente novamente.`, 'qtdCompra negativa') 
			} else if (!products[i].valorUnitarioCompra) {
				throw new DefaultError(`Não identificamos o valor unitário em um dos produtos da lista. Por favor, tente novamente.`, 'idMoeda nulo ou vazio') 
			} else if (products[i].valorUnitarioCompra <= 0) {
				throw new DefaultError(`Valor únitário do produto inválido. Por favor, tente novamente.`, 'valorUnitarioCompra negativo') 
			}
		}
	}
}

module.exports = {
	validateNewPurchaseEntry
}