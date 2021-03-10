var Store = require('./Store');
var inventory = require('./inventory.json');

var skiShop = new Store('Steep and deep', inventory);

var searchItem = 'wax';
var results = skiShop.find(searchItem);

console.log(results);