// b. Dado um array de palavras, crie um novo array que contenha o comprimento de cada palavra.
module.exports = function wordsLength(array){
    return array.map((word) => word.nome.length)
}