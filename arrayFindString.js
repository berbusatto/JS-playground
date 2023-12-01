// b. Dado um array de strings, encontre o índice de uma string específica.

module.exports = function findString(array,target){
    return array.map(element => element.nome).indexOf(target)
}