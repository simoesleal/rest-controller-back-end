const SELECT_CASH_REGISTERS = `select 
caixa.id, caixa.saldo_inicial, caixa.saldo_final, caixa.fundo_real, caixa.fundo_dolar, caixa.fundo_peso, caixa.fundo_guarani,
caixa.fechamentos_real, caixa.fechamentos_dolar, caixa.fechamentos_peso, caixa.fechamentos_guarani, caixa.fechamentos_cartao_cred, caixa.fechamentos_cartao_deb,
caixa.valor_total_fechamentos, caixa.data_hora_inicio, caixa.status,
funcionario.id as id_funcionario, funcionario.nome as nomeFunc, funcionario.sobrenome as sobreFunc
from caixa
inner join funcionario on caixa.id_funcionario=funcionario.id where caixa.status = true;`

const SELECT_CASH_REGISTER_BY_ID = `select caixa.id, caixa.saldo_inicial, caixa.saldo_final, caixa.data_hora_inicio, caixa.data_hora_fim,
	   funcionario.id as id_func, funcionario.nome as nome_func, funcionario.sobrenome as sobre_func, 
	   cotacao.id as id_cotacao, cotacao.cotacao
	   from caixa
	   inner join funcionario on caixa.id_funcionario=funcionario.id
	   inner join cotacao on caixa.id_cotacao=cotacao.id
	   where caixa.id = ($1);`


const INSERT_NEW_CASH_REGISTER = `INSERT INTO caixa
(id_funcionario, saldo_inicial, saldo_final, fundo_real, fundo_dolar, fundo_peso, fundo_guarani, fechamentos_real, fechamentos_dolar, fechamentos_peso, fechamentos_guarani, fechamentos_cartao_cred, fechamentos_cartao_deb, valor_total_fechamentos)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) 
RETURNING id;`

const UPDATE_CASH_REGISTER = `UPDATE caixa SET id_funcionario = ($2), id_cotacao = ($3), saldo_inicial = ($4), saldo_final = ($5), data_hora_inicio = ($6), data_hora_fim = ($7) WHERE id = ($1);`

const DELETE_CASH_REGISTER = `DELETE FROM caixa WHERE id = ($1);`

const CLOSE_CASH_REGISTER = `UPDATE caixa
SET saldo_final = ($2), fechamentos_real = ($3), fechamentos_dolar= ($4), fechamentos_peso= ($5),  fechamentos_guarani = ($6), fechamentos_cartao_cred = ($7), fechamentos_cartao_deb = ($8), valor_total_fechamentos = ($9), data_hora_fim=($10), status=($11)
WHERE id = ($1);`

const INSERT_NEW_CASH_QUOTATION = `INSERT INTO caixa_cotacao
(id_caixa, id_cotacao)
VALUES($1, $2);`


module.exports = {
	SELECT_CASH_REGISTERS,
	SELECT_CASH_REGISTER_BY_ID,
	INSERT_NEW_CASH_REGISTER,
	UPDATE_CASH_REGISTER,
	DELETE_CASH_REGISTER,
	CLOSE_CASH_REGISTER,
	INSERT_NEW_CASH_QUOTATION
}