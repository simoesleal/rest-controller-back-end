/* Tabela Pais */
const SELECT_COINS = `SELECT id, nome_moeda, nome_moeda_plural, simbolo FROM moeda;`

const SELECT_COIN = `SELECT id, nome_moeda, nome_moeda_plural, simbolo FROM moeda WHERE id = ($1);`

const SELECT_COIN_BY_NAME = `SELECT  id, nome_moeda, nome_moeda_plural, simbolo FROM moeda WHERE nome_moeda like ($1);`

const INSERT_NEW_COIN = `INSERT INTO moeda (nome_moeda, nome_moeda_plural, simbolo) VALUES ($1, $2, $3);`

const UPDATE_COIN = `UPDATE moeda 
											SET nome_moeda = ($2), nome_moeda_plural = ($3), simbolo = ($4)
											WHERE id = ($1);`

const DELETE_COIN = `DELETE FROM moeda WHERE id = ($1);`

module.exports = {
	SELECT_COINS,
	SELECT_COIN,
	SELECT_COIN_BY_NAME,
	INSERT_NEW_COIN,
	UPDATE_COIN,
	DELETE_COIN
}
