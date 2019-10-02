/* Tabela Pais */
const SELECT_PAYMENT_TYPES = `SELECT id, forma, status FROM forma_pagamento order by criado_em desc;`
const SELECT_PAYMENT_BY_ID_TYPE = `SELECT id, forma, status FROM forma_pagamento WHERE id = ($1);`
const INSERT_NEW_PAYMENT_TYPE = `INSERT INTO forma_pagamento (forma, status) VALUES ($1, $2)`
const UPDATE_PAYMENT_TYPE = `UPDATE forma_pagamento SET forma = ($2), status = ($3) WHERE id = ($1);`
const DELETE_PAYMENT_TYPE = `DELETE FROM forma_pagamento WHERE id = ($1);`


module.exports = {
	SELECT_PAYMENT_TYPES,
	SELECT_PAYMENT_BY_ID_TYPE,
	INSERT_NEW_PAYMENT_TYPE,
	UPDATE_PAYMENT_TYPE,
	DELETE_PAYMENT_TYPE
}