/* Tabela Pais */
const SELECT_PAYMENT_CONDITIONS = `SELECT condicao_pagamento.id,  forma_pagamento.id as id_forma_pagamento, forma_pagamento.forma as forma_pagamento,	condicao_pagamento.numero_parcela, condicao_pagamento.data_emissao, condicao_pagamento.data_vencimento, condicao_pagamento.valor_parcela 
FROM condicao_pagamento
INNER JOIN forma_pagamento ON condicao_pagamento.id_forma_pagamento=forma_pagamento.id;`

const SELECT_PAYMENT_CONDITION_BY_ID = `SELECT condicao_pagamento.id,  forma_pagamento.id as id_forma_pagamento, forma_pagamento.forma as forma_pagamento,	condicao_pagamento.numero_parcela, condicao_pagamento.data_emissao, condicao_pagamento.data_vencimento, condicao_pagamento.valor_parcela 
FROM condicao_pagamento
INNER JOIN forma_pagamento ON condicao_pagamento.id_forma_pagamento=forma_pagamento.id
where condicao_pagamento.id = ($1);`	

const INSERT_NEW_PAYMENT_CONDITION = `INSERT INTO condicao_pagamento (id_forma_pagamento, numero_parcela, data_emissao, data_vencimento, valor_parcela) VALUES ($1, $2, $3, $4, $5)`

const UPDATE_PAYMENT_CONDITION = `UPDATE condicao_pagamento 
												SET id_forma_pagamento = ($2), numero_parcela = ($3), data_emissao = ($4), data_vencimento = ($5),  valor_parcela = ($6)
												WHERE id = ($1);`

const DELETE_PAYMENT_CONDITION = `DELETE FROM condicao_pagamento WHERE id = ($1);`

module.exports = {
	SELECT_PAYMENT_CONDITIONS,
	SELECT_PAYMENT_CONDITION_BY_ID,
	INSERT_NEW_PAYMENT_CONDITION,
	UPDATE_PAYMENT_CONDITION,
	DELETE_PAYMENT_CONDITION
}