// Testing log
console.log("typescript tutorial");

// 2. Assigning types with annotations
// String
let awesomeName2: string = "shakeAndBake";
awesomeName2 = "something";
awesomeName2 = awesomeName2.toUpperCase();
// awesomeName2 = 20; Not allowed because type is STRING
console.log(awesomeName2);

// Number
let amount2: number = 20;
amount2 = 20 - 1;
// amount = "pants"; Not allowed because type is NUMBER
console.log(amount2);

// Boolean
let isAwesome2: boolean = true;
isAwesome2 = false;
// isAwesome2 = "shakeAndBake"; Not allowed because type is BOOLEAN
console.log(isAwesome2);

/* ---------------------------------------- */

// 1. Basics
// Declare interface
interface someValue1 {
  name: string;
  id: number;
}

// Create object with assigned interface
let someObj1: someValue1 = {
  name: "random",
  id: 123,
};

// Log the object
console.log(someObj1);
