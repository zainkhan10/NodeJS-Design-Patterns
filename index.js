var Shopper = require("./Shopper");
var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem,
} = require("./InventoryItem");

var alex = new Shopper("alex", 4000);

var walkman = new InventoryItem("Walkman", 29.99);
var neclace = new InventoryItem("Neclace", 9.99);

var gold_neclace = new GoldenInventoryItem(neclace);
var diamond_gold_neclace = new DiamondInventoryItem(gold_neclace);

var diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_neclace);
alex.purchase(diamond_walkman);

alex.printStatus();
