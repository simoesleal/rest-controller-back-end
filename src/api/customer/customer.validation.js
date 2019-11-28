const DefaultError = require('../../handlers/default-error.handler')

async function validateNewCustomer (name, lastName, sex, phone, id_endereco) {
  if (!name) throw new DefaultError(`Não identificamos o Nome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!lastName) throw new DefaultError(`Não identificamos o Sobrenome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!sex) throw new DefaultError(`Não identificamos o Sexo do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!phone) throw new DefaultError(`Não identificamos o Telefone do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
}

async function validateUpdateCustomer(id, name, lastName, sex, phone, id_endereco) {
  if (!id) throw new DefaultError(`Não identificamos o código do Funcionário e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!name) throw new DefaultError(`Não identificamos o nome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!lastName) throw new DefaultError(`Não identificamos o Sobrenome do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!sex) throw new DefaultError(`Não identificamos o Sexo do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!phone) throw new DefaultError(`Não identificamos o Telefone do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'name nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Cliente e este é um campo obrigatório. Por favor, tente novamente.`, 'password nulo ou vazio')
}

module.exports = {
	validateNewCustomer,
  validateUpdateCustomer
}