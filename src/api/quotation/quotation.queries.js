/* Tabela Pais */
const SELECT_QUOTATIONS = `SELECT cotacao.id, cotacao.cotacao, moeda.id as id_moeda, moeda.nome_moeda, moeda.simbolo 
FROM cotacao
INNER JOIN moeda ON cotacao.id_moeda=moeda.id;`

const SELECT_QUOTATION = `SELECT id, cotacao, id_moeda FROM cotacao WHERE id = ($1);`

const INSERT_NEW_QUOTATION = `INSERT INTO cotacao (cotacao, id_moeda) VALUES ($1, $2);`

const UPDATE_QUOTATION = `UPDATE cotacao 
											SET cotacao = ($2), id_moeda = ($3)
											WHERE id = ($1);`

const DELETE_QUOTATION = `DELETE FROM cotacao WHERE id = ($1);`

const SELECT_QUOTATION_BY_COIN_ID = `
SELECT 
cotacao.id, cotacao.cotacao, moeda.id as id_moeda, moeda.nome_moeda, moeda.simbolo 
FROM cotacao
INNER JOIN moeda ON cotacao.id_moeda=moeda.id
where id_moeda = ($1);`

const UPDATE_QUOTATION_CASHIER = `
UPDATE cotacao  
SET cotacao = ($2)
WHERE id = ($1);`

module.exports = {
	SELECT_QUOTATIONS,
	SELECT_QUOTATION,
	INSERT_NEW_QUOTATION,
	UPDATE_QUOTATION,
	DELETE_QUOTATION,
	SELECT_QUOTATION_BY_COIN_ID,
	UPDATE_QUOTATION_CASHIER
}
