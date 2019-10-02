const DefaultError = require('../../handlers/default-error.handler')
const { validateParam } = require('../utils/functions')

async function validateNewEmployee (name, lastName, birth, login, password, cpf, phone, id_endereco, id_funcao) {
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(lastName)) throw new DefaultError(`Não identificamos o sobrenome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'lastName nulo ou vazio')
  if (!await validateParam(birth)) throw new DefaultError(`Não identificamos a data de nascimento do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'birth nulo ou vazio')
  if (!await validateParam(login)) throw new DefaultError(`Não identificamos o login de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'login nulo ou vazio')
  if (!await validateParam(password)) throw new DefaultError(`Não identificamos a senha de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'password nulo ou vazio')
  if (!await validateParam(cpf)) throw new DefaultError(`Não identificamos o CPF do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'cpf nulo ou vazio')
  if (!await validateParam(phone)) throw new DefaultError(`Não identificamos o telefone do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'phone nulo ou vazio')
  if (!await validateParam(id_endereco)) throw new DefaultError(`Não identificamos o Endereço do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
  if (!await validateParam(id_funcao)) throw new DefaultError(`Não identificamos a Função do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcao nulo ou vazio')
}

async function validateUpdateEmployee (id, name, lastName, birth, login, cpf, phone, id_endereco, id_funcao) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(name)) throw new DefaultError(`Não identificamos o nome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!await validateParam(lastName)) throw new DefaultError(`Não identificamos o sobrenome do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'lastName nulo ou vazio')
  if (!await validateParam(birth)) throw new DefaultError(`Não identificamos a data de nascimento do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'birth nulo ou vazio')
  if (!await validateParam(login)) throw new DefaultError(`Não identificamos o login de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'login nulo ou vazio')
  if (!await validateParam(cpf)) throw new DefaultError(`Não identificamos o CPF do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'cpf nulo ou vazio')
  if (!await validateParam(phone)) throw new DefaultError(`Não identificamos o telefone do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'phone nulo ou vazio')
  if (!await validateParam(id_endereco)) throw new DefaultError(`Não identificamos o E-mail do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
  if (!await validateParam(id_funcao)) throw new DefaultError(`Não identificamos a Função do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id_funcao nulo ou vazio')
}

async function validateUpdatePasswordEmployee(id, password) {
  if (!await validateParam(id)) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!await validateParam(password)) throw new DefaultError(`Não identificamos a senha de acesso do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'password nulo ou vazio')
}

module.exports = {
	validateNewEmployee,
  validateUpdateEmployee,
  validateUpdatePasswordEmployee
}