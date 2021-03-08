var scout_prototype = require("./scout_prototype");

var alex = scout_prototype.clone();
alex.name = "Alex Banks";
alex.addItemToList('Slingshot');

var eve = scout_prototype.clone();
eve.name = "Eve porcell";
eve.addItemToList('Light red');


console.log(`${alex.name} : ${alex.shoppingList}`);
console.log(`${eve.name} : ${eve.shoppingList}`);
