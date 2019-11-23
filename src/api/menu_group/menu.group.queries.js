/* Tabela Pais */
const SELECT_MENU_GROUPS = `SELECT id, nome_grupo, status FROM grupo_cardapio;`

const SELECT_MENU_GROUP_BY_ID = `SELECT id, nome_grupo, status FROM grupo_cardapio WHERE id = ($1);`

const SELECT_MENU_GROUP_BY_NAME = `SELECT  id, nome_grupo, status FROM grupo_cardapio WHERE nome_grupo like ($1);`

const INSERT_NEW_MENU_GROUP = `INSERT INTO grupo_cardapio (nome_grupo, status) VALUES ($1, $2);`

const UPDATE_MENU_GROUP = `UPDATE grupo_cardapio 
												SET nome_grupo = ($2), status = ($3) 
												WHERE id = ($1);`

const DELETE_MENU_GROUP = `DELETE FROM grupo_cardapio WHERE id = ($1);`


module.exports = {
	SELECT_MENU_GROUPS,
	SELECT_MENU_GROUP_BY_ID,
	SELECT_MENU_GROUP_BY_NAME,
	INSERT_NEW_MENU_GROUP,
	UPDATE_MENU_GROUP,
	DELETE_MENU_GROUP
}
