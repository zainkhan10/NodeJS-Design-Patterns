var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

var catAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

catAndThings.subscribe(alex);
catAndThings.subscribe(eve);
catAndThings.subscribe(mike);
catAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales);
