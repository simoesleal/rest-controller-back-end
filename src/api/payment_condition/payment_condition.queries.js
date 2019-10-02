/* Tabela Pais */
const SELECT_PAYMENT_CONDITIONS = `SELECT condicao_pagamento.id, condicao_pagamento.condicao_pgto, condicao_pagamento.numero_parcelas, condicao_pagamento.dia_inicio, descricao, 
       forma_pagamento.id as id_forma_pagamento, forma_pagamento.forma as forma_pagamento 
FROM condicao_pagamento
INNER JOIN forma_pagamento ON condicao_pagamento.id_forma_pagamento=forma_pagamento.id;`

const SELECT_PAYMENT_CONDITION_BY_ID = `SELECT condicao_pagamento.id, condicao_pagamento.condicao_pgto, condicao_pagamento.numero_parcelas, condicao_pagamento.dia_inicio, descricao, 
       forma_pagamento.id as id_forma_pagamento, forma_pagamento.forma as forma_pagamento 
FROM condicao_pagamento
INNER JOIN forma_pagamento ON condicao_pagamento.id_forma_pagamento=forma_pagamento.id
where condicao_pagamento.id = ($1);`	

const INSERT_NEW_PAYMENT_CONDITION = `INSERT INTO condicao_pagamento (condicao_pgto, numero_parcelas, dia_inicio, descricao, id_forma_pagamento) VALUES ($1, $2, $3, $4, $5)`

const UPDATE_PAYMENT_CONDITION = `UPDATE condicao_pagamento 
												SET condicao_pgto = ($2), numero_parcelas = ($3), dia_inicio = ($4), descricao = ($5),  id_forma_pagamento = ($6)
												WHERE id = ($1);`

const DELETE_PAYMENT_CONDITION = `DELETE FROM condicao_pagamento WHERE id = ($1);`

module.exports = {
	SELECT_PAYMENT_CONDITIONS,
	SELECT_PAYMENT_CONDITION_BY_ID,
	INSERT_NEW_PAYMENT_CONDITION,
	UPDATE_PAYMENT_CONDITION,
	DELETE_PAYMENT_CONDITION
}