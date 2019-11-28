const DefaultError = require('../../handlers/default-error.handler')

async function validateNewAddress (zipcode, street, number, block, country, state, city) {
  if (!street) throw new DefaultError(`Não identificamos a Rua e este é um campo obrigatório. Por favor, tente novamente.`, 'street nulo ou vazio')
  if (!number) throw new DefaultError(`Não identificamos o Número do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
  if (!block) throw new DefaultError(`Não identificamos o Bairro e este é um campo obrigatório. Por favor, tente novamente.`, 'block nulo ou vazio')
  if (!zipcode) {
    throw new DefaultError(`Não identificamos o CEP e este é um campo obrigatório. Por favor, tente novamente.`, 'zipcode nulo ou vazio')
  } else {
    if (zipcode.length !== 8) {
      throw new DefaultError(`O CEP informado não está no formato correto. Por favor, preencha corretamente.`, 'zipcode invalido')
    }
  }
  if (!country) throw new DefaultError(`Não identificamos o País do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'country nulo ou vazio')
  if (!state) throw new DefaultError(`Não identificamos o Estado do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'state nulo ou vazio')
  if (!city) throw new DefaultError(`Não identificamos a Cidade do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'city nulo ou vazio')
  
}

async function validateUpdateAddress (id, zipcode, street, number, block, country, state, city) {
  if (!id) throw new DefaultError(`Não identificamos o código do endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'id nulo ou vazio')
  if (!street) throw new DefaultError(`Não identificamos a Rua e este é um campo obrigatório. Por favor, tente novamente.`, 'street nulo ou vazio')
  if (!number) throw new DefaultError(`Não identificamos o Número do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'number nulo ou vazio')
  if (!block) throw new DefaultError(`Não identificamos o Bairro e este é um campo obrigatório. Por favor, tente novamente.`, 'block nulo ou vazio')
  if (!zipcode) throw new DefaultError(`Não identificamos o CEP e este é um campo obrigatório. Por favor, tente novamente.`, 'zipcode nulo ou vazio')
  if (!country) throw new DefaultError(`Não identificamos o País do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'country nulo ou vazio')
  if (!state) throw new DefaultError(`Não identificamos o Estado do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'state nulo ou vazio')
  if (!city) throw new DefaultError(`Não identificamos a Cidade do Endereço e este é um campo obrigatório. Por favor, tente novamente.`, 'city nulo ou vazio')
}

module.exports = {
	validateNewAddress,
  validateUpdateAddress
}