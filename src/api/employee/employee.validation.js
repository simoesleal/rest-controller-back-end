const DefaultError = require('../../handlers/default-error.handler')

async function validateNewEmployee (name, lastName, birth, login, cpf, phone, id_endereco, id_funcao) {
  if (!name) throw new DefaultError(`Não identificamos o nome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!lastName) throw new DefaultError(`Não identificamos o sobrenome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'lastName nulo ou vazio')
  if (!birth) throw new DefaultError(`Não identificamos a data de nascimento do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'birth nulo ou vazio')
  if (!login) throw new DefaultError(`Não identificamos o login de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'login nulo ou vazio')
  if (!cpf) throw new DefaultError(`Não identificamos o CPF do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'cpf nulo ou vazio')
  if (!phone) throw new DefaultError(`Não identificamos o telefone do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'phone nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
  if (!id_funcao) throw new DefaultError(`Não identificamos a Função do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcao nulo ou vazio')
}

async function validateUpdateEmployee (id, name, lastName, birth, login, cpf, phone, id_endereco, id_funcao) {
  if (!id) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!lastName) throw new DefaultError(`Não identificamos o sobrenome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'lastName nulo ou vazio')
  if (!birth) throw new DefaultError(`Não identificamos a data de nascimento do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'birth nulo ou vazio')
  if (!login) throw new DefaultError(`Não identificamos o login de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'login nulo ou vazio')
  if (!cpf) throw new DefaultError(`Não identificamos o CPF do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'cpf nulo ou vazio')
  if (!phone) throw new DefaultError(`Não identificamos o telefone do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'phone nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
  if (!id_funcao) throw new DefaultError(`Não identificamos a Função do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcao nulo ou vazio')
}

async function validateUpdatePasswordEmployee(id, password) {
  if (!id) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!password) throw new DefaultError(`Não identificamos a senha de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'password nulo ou vazio')
}

module.exports = {
	validateNewEmployee,
  validateUpdateEmployee,
  validateUpdatePasswordEmployee
}