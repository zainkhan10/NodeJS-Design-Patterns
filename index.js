var PersonBuilder = require("./PersonBuilder");

var sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
var bill = new PersonBuilder("Bill").makeEmployee().makePartTime().build();
var phil = new PersonBuilder("Phil").makeEmployee().build();

var charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["Jeans", "Sunglasses"])
  .build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(sue.toString());
console.log(charles.toString());