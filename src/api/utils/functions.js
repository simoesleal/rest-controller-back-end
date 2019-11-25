/**
 * @description Retorna um boolean "true" caso o campo não seja undefined ou nulo, e "false" caso ele seja
 * @param {json} param
 * @returns {boolean}
 */
async function validateParam (param) {
  return (param !== undefined && param !== null && param !== '')
}

module.exports = { 
	validateParam
}