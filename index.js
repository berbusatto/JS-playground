const arraySum = require('./arraySum');
const arrayInvert = require('./arrayInvert');
const checkNumber = require('./arrayCheckNumber');
const findString = require('./arrayFindString');
const findEven = require('./arrayFindEven');
const wordsLength = require('./arrayWordsLength');
const arrayConcat = require('./arrayConcat');
const arrayInsert = require('./arrayInsert');
const removeLast = require('./arrayRemoveLast');


const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const produtos = [
    {id: 1, nome: 'detergente', valor: 3.50, categoria: 'limpeza'},
    {id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    {id: 3, nome: 'pão', valor: 5.00, categoria: 'alimento'},
    {id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    {id: 5, nome: 'leite', valor: 4.00, categoria: 'alimento'}
]

console.log('Somatória do array');
console.log(arraySum(arr), '\n');

console.log('Inversão do array');
console.log(arrayInvert(arr), '\n');

console.log('Checar número no array');
console.log(checkNumber(arr, 12), '\n');

console.log('Checar string no array');
console.log(findString(produtos, 'queijo'), '\n');

console.log('Buscar números pares');
console.log(findEven(arr));

console.log('Tamanho de cada palavra (nome do produto)');
console.log(wordsLength(produtos))

console.log('Concatenando arrays');
console.log(arrayConcat(arr, produtos));

console.log('Inserindo array na ultima posição');
console.log(arrayInsert(produtos, arr));

console.log('Retirando elemento na ultima posição');
console.log(removeLast(arr));


