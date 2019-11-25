/* Tabela Pais */
const AUTH_LOGIN = `SELECT 
 perfil.id as id_perfil, perfil.login, perfil.status, perfil.id_funcionario, perfil.status, funcionario.nome as nome_funcionario, funcionario.sobrenome as sobrenome_funcionario,  perfil.id_permissao, permissao.nome as permissao
FROM perfil
inner join funcionario on perfil.id_funcionario=funcionario.id
inner join permissao on perfil.id_permissao=permissao.id
where perfil.login = ($1) and perfil.senha = ($2);`

module.exports = {
	AUTH_LOGIN
}