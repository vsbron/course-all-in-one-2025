// Testing log
console.log("typescript tutorial");

// 3. Unions and any type
// Unions
let tax: number | string = 10;
tax = 100;
tax = "1000";

// Literal values
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random"; Not allowed because its possible values are literal

// Type: any (not recommended to use. Only as a last resort)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Books example
const books = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook: string | undefined; // Will be any by default if we're not gonna assign the type

// Loop through the books, look for 1984
for (let book of books) {
  if ((book = "1984")) {
    foundBook = book;
    break;
  }
}
console.log(foundBook);

// Discount example
let discount: number | string = 20;
discount = "20%";
// discount = true; Not allowed because type is NUMBER or STRING

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

orderStatus = "shipped";
// orderStatus = "cancelled";  Not allowed because its possible values are literal

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

/* ---------------------------------------- */

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
