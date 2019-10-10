const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewCashRegister (id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd) {
  if (!await validateParam(id_funcionario)) throw new DefaultError(`Não identificamos o funcionário deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcionario nulo ou vazio')
  if (!await validateParam(id_cotacao)) throw new DefaultError(`Não identificamos a cotação do caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_cotacao nulo ou vazio')
  if (!await validateParam(initialBalance)) throw new DefaultError(`Não identificamos o saldo inicial deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'initialBalance nulo ou vazio')
  if (!await validateParam(finalBalance)) throw new DefaultError(`Não identificamos o saldo final deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'finalBalance nulo ou vazio')
  if (!await validateParam(dateTimeBegining)) throw new DefaultError(`Não identificamos a data de abertura deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeBegining nulo ou vazio')
  if (!await validateParam(dateTimeEnd)) throw new DefaultError(`Não identificamos a data de fechamento deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeEnd nulo ou vazio')
  }

async function validateUpdateCashRegister (id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código deste Caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(id_funcionario)) throw new DefaultError(`Não identificamos o funcionário deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcionario nulo ou vazio')
  if (!await validateParam(id_cotacao)) throw new DefaultError(`Não identificamos a cotação do caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_cotacao nulo ou vazio')
  if (!await validateParam(initialBalance)) throw new DefaultError(`Não identificamos o saldo inicial deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'initialBalance nulo ou vazio')
  if (!await validateParam(finalBalance)) throw new DefaultError(`Não identificamos o saldo final deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'finalBalance nulo ou vazio')
  if (!await validateParam(dateTimeBegining)) throw new DefaultError(`Não identificamos a data de abertura deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeBegining nulo ou vazio')
  if (!await validateParam(dateTimeEnd)) throw new DefaultError(`Não identificamos a data de fechamento deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeEnd nulo ou vazio')
}
module.exports = {
	validateNewCashRegister,
  validateUpdateCashRegister
}