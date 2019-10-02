const SELECT_ACCOUNTS_PAYABLES = `select cp.id, cp.numero, cp.data_emissao, cp.data_vencimento, cp.valor_parcela, cp.valor_liquido, cp.historico, cp.observacoes,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta,
	   forma_pagamento.id as id_fp, forma_pagamento.forma as forma_pagamento,
	   condicao_pagamento.id as id_mp, condicao_pagamento.numero_parcela as numero_parcela 
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join forma_pagamento on cp.id_forma_pagamento=forma_pagamento.id
inner join condicao_pagamento on cp.id_condicao_pagamento=condicao_pagamento.id;`

const SELECT_ACCOUNT_PAYABLE_BY_ID = `select cp.id, cp.numero, cp.data_emissao, cp.data_vencimento, cp.valor_parcela, cp.valor_liquido, cp.historico, cp.observacoes,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta,
	   forma_pagamento.id as id_fp, forma_pagamento.forma as forma_pagamento,
	   condicao_pagamento.id as id_mp, condicao_pagamento.numero_parcela as numero_parcela 
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join forma_pagamento on cp.id_forma_pagamento=forma_pagamento.id
inner join condicao_pagamento on cp.id_condicao_pagamento=condicao_pagamento.id
where cp.id = ($1);`

const SELECT_ACCOUNT_PAYABLE_BY_NUMBER = `select cp.id, cp.numero, cp.data_emissao, cp.data_vencimento, cp.valor_parcela, cp.valor_liquido, cp.historico, cp.observacoes,
	   fornecedor.id as id_fornecedor, fornecedor.razao_social as rs_fornecedor,
	   moeda.id as id_moeda, moeda.nome_moeda as moeda,
	   conta_bancaria.id as id_cb, conta_bancaria.conta_bancaria as conta,
	   forma_pagamento.id as id_fp, forma_pagamento.forma as forma_pagamento,
	   condicao_pagamento.id as id_mp, condicao_pagamento.numero_parcela as numero_parcela 
from contas_a_pagar as cp
inner join fornecedor on cp.id_fornecedor=fornecedor.id
inner join moeda on cp.id_moeda=moeda.id
inner join conta_bancaria on cp.id_conta_bancaria=conta_bancaria.id
inner join forma_pagamento on cp.id_forma_pagamento=forma_pagamento.id
inner join condicao_pagamento on cp.id_condicao_pagamento=condicao_pagamento.id
where cp.numero like ($1);`

const INSERT_NEW_ACCOUNT_PAYABLE = `INSERT INTO contas_a_pagar (numero, data_emissao, data_vencimento, valor_parcela, valor_liquido, historico, observacoes, id_fornecedor, id_moeda, id_conta_bancaria, id_forma_pagamento, id_condicao_pagamento) 
VALUES ($1, $2, $3, $4, 5, $6, $7, $8, $9, $10, $11, $12) RETURNING id;`

const UPDATE_NEW_ACCOUNT_PAYABLE = `UPDATE contas_a_pagar SET numero = ($2), data_emissao = ($3), data_vencimento = ($4), valor_parcela = ($5), valor_liquido = ($6), historico = ($7), observacoes = ($8), id_fornecedor = ($9), id_moeda = ($10), id_conta_bancaria = ($11), id_forma_pagamento = ($12), id_condicao_pagamento = ($13) 
	WHERE id = ($1);`

const DELETE_ACCOUNT_PAYABLE = `DELETE FROM contas_a_pagar WHERE id = ($1);`

module.exports = {
	SELECT_ACCOUNTS_PAYABLES,
	SELECT_ACCOUNT_PAYABLE_BY_ID,
	SELECT_ACCOUNT_PAYABLE_BY_NUMBER,
	INSERT_NEW_ACCOUNT_PAYABLE,
	UPDATE_NEW_ACCOUNT_PAYABLE,
	DELETE_ACCOUNT_PAYABLE
}