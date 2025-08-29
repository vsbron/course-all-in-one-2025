// Testing log
console.log("typescript tutorial");

// 4. Arrays and Objects
// Arrays
let prices4: number[] = [100, 75, 42, 34];
prices4.push(3);
// prices4.push("Hello"); Not allowed because type is NUMBERS ARRAY

let fruit4: string[] = ["apple", "orange"];
fruit4.push("lemon");
// fruit4.push(3); Not allowed because type is STRING ARRAY

// let randomValues4: [] = ["hello"]; Not allowed because type is EMPTY ARRAY
let emptyValues4 = []; // Assigns type of any[]

let names4 = ["Peters", "Susan", 1]; // Assigns (string | number)[] type automatically
let array4: (string | boolean)[] = ["apple", true, "orange", false]; // Same thing but manually

// Challenge
let temperatures4: number[] = [20, 25, 30];
let colors4: string[] = ["red", "green", "blue"];
let mixedArray4: (number | string)[] = [1, "two", 3];

// Objects
let car4: { brand: string; year: number } = { brand: "Toyota", year: 2020 };
car4.brand = "ford";
// car4.color = "blue"; Not allowed because there is no such property

let newCar4: { brand: string; year: number } = { brand: "Audi", year: 2022 }; // Another instance

// Arrays + Objects

// Create the object
let book4 = { title: "book", cost: 20 };
let pen4 = { title: "pen", cost: 10 };
let notebook4 = { title: "notebook" };

// Add them to the array (cost is optional, title is readonly)
let items4: { readonly title: string; cost?: number }[] = [
  book4,
  pen4,
  notebook4,
];

// Challenge
let bike4: { brand: string; year: number } = { brand: "Yamaha", year: 2010 };
let laptop4: { brand: string; year: number } = { brand: "Dell", year: 2020 };

let product41 = { title: "shirt", price: 20 };
let product42 = { title: "panths" };

let products4: { title: string; price?: number }[] = [product41, product42];

console.log(products4);

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

/* ---------------------------------------- */

// 3. Unions and any type
// Unions
let tax3: number | string = 10;
tax3 = 100;
tax3 = "1000";

// Literal values
let requestStatus3: "pending" | "success" | "error" = "pending";
requestStatus3 = "success";
requestStatus3 = "error";
// requestStatus = "random"; Not allowed because its possible values are literal

// Type: any (not recommended to use. Only as a last resort)
let notSure3: any = 4;
notSure3 = "maybe a string instead";
notSure3 = false;

// Books example
const books3 = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook3: string | undefined; // Will be any by default if we're not gonna assign the type

// Loop through the books, look for 1984
for (let book of books3) {
  if ((book = "1984")) {
    foundBook3 = book;
    break;
  }
}
console.log(foundBook3);

// Discount example
let discount3: number | string = 20;
discount3 = "20%";
// discount = true; Not allowed because type is NUMBER or STRING

let orderStatus3: "processing" | "shipped" | "delivered" = "processing";
orderStatus3 = "shipped";
// orderStatus = "cancelled";  Not allowed because its possible values are literal
