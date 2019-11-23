const POST_NEW_CLOUSURE = `select f_fechamento_conta_cliente($1, $2, $3);`

const GET_CLOUSURES_BY_CASH_REGISTER_ID = `select fechamentos.id, fechamentos.valor_pago_real as realbr, fechamentos.valor_pago_dolar dolar, fechamentos.valor_pago_peso as peso, 
		fechamentos.valor_pago_cartao_cred as cc, fechamentos.valor_pago_cartao_deb as cb, 
		fechamentos.valor_desconto as desconto, fechamentos.valor_troco as troco,
		fechamentos.valor_total_fechamento as valor_total,
		forma_pagamento.id as id_forma_pagamento, forma_pagamento.forma as forma_pagamento,
		fechamentos.id_caixa,
		conta_cliente.id as id_conta_cliente, conta_cliente.status, 
	   	mesa.id as id_mesa, mesa.numero as numero_mesa, mesa.status 
from fechamentos
inner join forma_pagamento on fechamentos.id_forma_pagamento=forma_pagamento.id
inner join conta_cliente on fechamentos.id_conta_cliente=conta_cliente.id
INNER JOIN mesa ON conta_cliente.id_mesa=mesa.id
where id_caixa = ($1);`

module.exports = {
	POST_NEW_CLOUSURE,
	GET_CLOUSURES_BY_CASH_REGISTER_ID
}