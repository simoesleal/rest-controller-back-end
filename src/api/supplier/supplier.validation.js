const DefaultError = require('../../handlers/default-error.handler')

async function validateNewSupplier (nome_fantasia, tipo_fornecedor, razao_social, cpf_cnpj, id_endereco) {
  if (!razao_social) throw new DefaultError(`Não identificamos a Razão Social do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'razao_social nulo ou vazio')
  if (!tipo_fornecedor) throw new DefaultError(`Não identificamos o Tipo do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'tipo_fornecedor nulo ou vazio')
  if (!nome_fantasia) throw new DefaultError(`Não identificamos o Nome Fantasia do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'nome_fantasia nulo ou vazio')
  if (!cpf_cnpj) throw new DefaultError(`Não identificamos o CPF ou CNPJ do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'razao_social nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
}

async function validateUpdateSupplier(id, nome_fantasia, tipo_fornecedor, razao_social, cpf_cnpj, id_endereco) {
  if (!id) throw new DefaultError(`Não identificamos o código do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!tipo_fornecedor) throw new DefaultError(`Não identificamos o Tipo do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'tipo_fornecedor nulo ou vazio')
  if (!razao_social) throw new DefaultError(`Não identificamos a Razão Social do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'razao_social nulo ou vazio')
  if (!nome_fantasia) throw new DefaultError(`Não identificamos o Nome Fantasia do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'nome_fantasia nulo ou vazio')
  if (!cpf_cnpj) throw new DefaultError(`Não identificamos o CPF ou CNPJ do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'razao_social nulo ou vazio')
  if (!id_endereco) throw new DefaultError(`Não identificamos o Endereço do Fornecedor e este é um campo obrigatório. Por favor, tente novamente.`, 'id_endereco nulo ou vazio')
}

module.exports = {
	validateNewSupplier,
  validateUpdateSupplier
}
