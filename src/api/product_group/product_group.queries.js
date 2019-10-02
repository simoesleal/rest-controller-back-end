/* Tabela Pais */
const SELECT_PRODUCT_GROUPS = `SELECT id, nome_grupo, descricao, status FROM grupo_produto;`

const SELECT_PRODUCT_GROUP_BY_ID = `SELECT id, nome_grupo, descricao, status FROM grupo_produto WHERE id = ($1);`

const SELECT_PRODUCT_GROUP_BY_NAME = `SELECT  id, nome_grupo, descricao, status FROM grupo_produto WHERE nome_grupo like ($1);`

const INSERT_NEW_PRODUCT_GROUP = `INSERT INTO grupo_produto (nome_grupo, descricao, status) VALUES ($1, $2, $3);`

const UPDATE_PRODUCT_GROUP = `UPDATE grupo_produto 
												SET nome_grupo = ($2), descricao = ($3), status = ($4) 
												WHERE id = ($1);`

const DELETE_PRODUCT_GROUP = `DELETE FROM grupo_produto WHERE id = ($1);`


module.exports = {
	SELECT_PRODUCT_GROUPS,
	SELECT_PRODUCT_GROUP_BY_ID,
	SELECT_PRODUCT_GROUP_BY_NAME,
	INSERT_NEW_PRODUCT_GROUP,
	UPDATE_PRODUCT_GROUP,
	DELETE_PRODUCT_GROUP
}
