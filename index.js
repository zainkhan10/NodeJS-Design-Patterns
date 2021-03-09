var CatalogItem = require("./CatalogItem");
var CatalogGroup = require("./CatalogGroup");

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California wook boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and such", [
  boots,
  sneakers,
  flipFlops,
]);

var group_food = new CatalogGroup("Food for while you try for clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99),
]);

var keychain = new CatalogItem("Key Chain", 0.99);

var catalog = new CatalogGroup("Clothes and food", [
  keychain,
  group_shoes,
  group_food,
]);

console.log(`$${catalog.total}`);

catalog.print();
