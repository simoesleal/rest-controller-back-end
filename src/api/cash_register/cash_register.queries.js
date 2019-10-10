const SELECT_CASH_REGISTERS = `select caixa.id, caixa.saldo_inicial, caixa.saldo_final, caixa.data_hora_inicio, caixa.data_hora_fim,
	   funcionario.id as id_func, funcionario.nome as nome_func, funcionario.sobrenome as sobre_func, 
	   cotacao.id as id_cotacao, cotacao.cotacao
	   from caixa
	   inner join funcionario on caixa.id_funcionario=funcionario.id
	   inner join cotacao on caixa.id_cotacao=cotacao.id;`

const SELECT_CASH_REGISTER_BY_ID = `select caixa.id, caixa.saldo_inicial, caixa.saldo_final, caixa.data_hora_inicio, caixa.data_hora_fim,
	   funcionario.id as id_func, funcionario.nome as nome_func, funcionario.sobrenome as sobre_func, 
	   cotacao.id as id_cotacao, cotacao.cotacao
	   from caixa
	   inner join funcionario on caixa.id_funcionario=funcionario.id
	   inner join cotacao on caixa.id_cotacao=cotacao.id
	   where caixa.id = ($1);`


const INSERT_NEW_CASH_REGISTER = `INSERT INTO caixa (id_funcionario, id_cotacao, saldo_inicial, saldo_final, data_hora_inicio, data_hora_fim) VALUES  ($1, $2, $3, $4, $5, $6) RETURNING id;`

const UPDATE_CASH_REGISTER = `UPDATE caixa SET id_funcionario = ($2), id_cotacao = ($3), saldo_inicial = ($4), saldo_final = ($5), data_hora_inicio = ($6), data_hora_fim = ($7) WHERE id = ($1);`

const DELETE_CASH_REGISTER = `DELETE FROM caixa WHERE id = ($1);`

module.exports = {
	SELECT_CASH_REGISTERS,
	SELECT_CASH_REGISTER_BY_ID,
	INSERT_NEW_CASH_REGISTER,
	UPDATE_CASH_REGISTER,
	DELETE_CASH_REGISTER
}