const DefaultError = require('../../handlers/default-error.handler')

async function validateNewCashRegister (id_funcionario, saldo_inicial, fundo_real, fundo_dolar, fundo_peso, fundo_guarani) {
  if (!id_funcionario) throw new DefaultError(`Não identificamos o funcionário deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcionario nulo ou vazio')
  if (saldo_inicial) {
    if (saldo_inicial < 0) {
      throw new DefaultError(`O saldo inicial do caixa não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'new menor que 0')
    }
  }
  if (fundo_real) {
    if (fundo_real < 0) {
      throw new DefaultError(`O fundo de caixa em Real não pode ser menor que R$ 0.00. Por favor, tente novamente.`, 'fundo_real menor que 0')
    }
  }
  if (fundo_dolar) {
    if (fundo_dolar < 0) {
      throw new DefaultError(`O fundo de caixa em Dolar não pode ser menor que U$ 0.00. Por favor, tente novamente.`, 'fundo_dolar menor que 0')
    }
  }
  if (fundo_peso) {
    if (fundo_peso < 0) {
      throw new DefaultError(`O fundo de caixa em Peso não pode ser menor que P$ 0.00. Por favor, tente novamente.`, 'fundo_peso menor que 0')
    }
  }
  if (fundo_guarani) {
    if (fundo_guarani < 0) {
      throw new DefaultError(`O fundo de caixa em Guarani não pode ser menor que G$ 0.00. Por favor, tente novamente.`, 'fundo_guarani menor que 0')
    }
  }
  
  }

async function validateUpdateCashRegister (id, id_funcionario, id_cotacao, initialBalance, finalBalance, dateTimeBegining, dateTimeEnd) {
  if (!id) throw new DefaultError(`Não identificamos o código deste Caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!id_funcionario) throw new DefaultError(`Não identificamos o funcionário deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcionario nulo ou vazio')
  if (!id_cotacao) throw new DefaultError(`Não identificamos a cotação do caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'id_cotacao nulo ou vazio')
  if (!initialBalance) throw new DefaultError(`Não identificamos o saldo inicial deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'initialBalance nulo ou vazio')
  if (!finalBalance) throw new DefaultError(`Não identificamos o saldo final deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'finalBalance nulo ou vazio')
  if (!dateTimeBegining) throw new DefaultError(`Não identificamos a data de abertura deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeBegining nulo ou vazio')
  if (!dateTimeEnd) throw new DefaultError(`Não identificamos a data de fechamento deste caixa e este é um campo obrigatório. Por favor, tente novamente.`, 'dateTimeEnd nulo ou vazio')
}
module.exports = {
	validateNewCashRegister,
  validateUpdateCashRegister
}