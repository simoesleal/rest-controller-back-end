const DefaultError = require('../../handlers/default-error.handler')

async function validateNewClosure(p_id_conta_cliente, p_id_mesa, json_fechamento) {
	console.log('validateNewClosure')
  if (!p_id_conta_cliente) throw new DefaultError(`Não identificamos o código do cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!p_id_mesa) throw new DefaultError(`Não identificamos a mesa a ser fechada e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
	if (!json_fechamento) {
		throw new DefaultError(`Não identificamos as informações do fechamento. Por favor, tente novamente.`, 'json_fechamento nulo ou vazio')
	} else {
		if (!json_fechamento[0].idCaixa) {
			throw new DefaultError(`Não identificamos o id do Caixa. Por favor, tente novamente.`, 'idCaixa nulo ou vazio')
		} else if (!json_fechamento[0].idFormaPagamento) {
			throw new DefaultError(`Não identificamos a forma de pagamento. Por favor, tente novamente.`, 'idFormaPagamento nulo ou vazio')
		} else if (json_fechamento[0].dinheiroReal < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, corriga o valor no campo Real R$ e tente novamente.`, 'dinheiroReal negativo')
		} else if (json_fechamento[0].dinheiroDolar < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, corriga o valor no campo Dolar U$ e tente novamente.`, 'dinheiroDolar negativo')
		} else if (json_fechamento[0].dinheiroPeso < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, corriga o valor no campo Peso U$ e tente novamente.`, 'dinheiroPeso negativo')
		} else if (json_fechamento[0].cartaoCredito < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, corriga o valor no campo Cartão de Crédito e tente novamente.`, 'cartaoCredito negativo')
		} else if (json_fechamento[0].cartaoDebito < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, corriga o valor no campo Cartão Débito e tente novamente.`, 'cartaoDebito negativo')
		} else if (json_fechamento[0].valorTotal < 0) {
			throw new DefaultError(`Valores negativos não são aceitos, o valor total da conta está negativo. Por favor, corriga os lançamentos e tente novamente.`, 'valorTotal negativo')
		}
	}
}

module.exports = {
	validateNewClosure
}