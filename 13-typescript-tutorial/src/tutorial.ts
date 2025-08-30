// Testing log
console.log("typescript tutorial");

// 8. Type aliases
console.log(" ");
console.log("SECTION 8");
console.log("-----------------------------------");

// Declare type
type User8 = { id: number; name: string; isActive: boolean };

// Users objects
const john8: User8 = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan8: User8 = {
  id: 1,
  name: "susan",
  isActive: false,
};

// User function
function createUser8(user: User8): User8 {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

// CHALLENGE

// Declare Employee, Manager type and Union
type Employee8 = { id: number; name: string; department: string };
type Manager8 = { id: number; name: string; employees: Employee8[] };
type Staff8 = Employee8 | Manager8;

// Create some workers
const alice8: Employee8 = { id: 1, name: "Alice", department: "Sales" };
const steve8: Employee8 = { id: 2, name: "Steve", department: "HR" };
const bob8: Manager8 = { id: 3, name: "Bob", employees: [alice8, steve8] };

function printStaffDetails8(staff: Staff8): void {
  console.log(
    "employees" in staff // Checking the needed property in the object
      ? `${staff.name} is a manager and he manages ${staff.employees.length} employees`
      : `${staff.name} is an employee in the ${staff.department} department`
  );
}

printStaffDetails8(alice8);
printStaffDetails8(steve8);
printStaffDetails8(bob8);

// INTERSECTION TYPE
type Book8 = { id: number; name: string; price: number };
type DiscountedBook8 = Book8 & { discount: number };

const book18: Book8 = {
  id: 2,
  name: "How to Cook a Dragon",
  price: 15,
};
const book28: Book8 = {
  id: 3,
  name: "The Secret Life of Unicorns",
  price: 18,
};

const discountedBook8: DiscountedBook8 = {
  id: 4,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

/* ---------------------------------------- */

// 1. Basics
console.log(" ");
console.log("SECTION 1");
console.log("-----------------------------------");

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
console.log(" ");
console.log("SECTION 2");
console.log("-----------------------------------");

// STRING
let awesomeName2: string = "shakeAndBake";
awesomeName2 = "something";
awesomeName2 = awesomeName2.toUpperCase();
// awesomeName2 = 20; Not allowed because type is STRING
console.log(awesomeName2);

// NUMBER
let amount2: number = 20;
amount2 = 20 - 1;
// amount = "pants"; Not allowed because type is NUMBER
console.log(amount2);

// BOOLEAN
let isAwesome2: boolean = true;
isAwesome2 = false;
// isAwesome2 = "shakeAndBake"; Not allowed because type is BOOLEAN
console.log(isAwesome2);

/* ---------------------------------------- */

// 3. Unions and any type
console.log(" ");
console.log("SECTION 3");
console.log("-----------------------------------");

// UNIONS
let tax3: number | string = 10;
tax3 = 100;
tax3 = "1000";

// LITERAL VALUES
let requestStatus3: "pending" | "success" | "error" = "pending";
requestStatus3 = "success";
requestStatus3 = "error";
// requestStatus = "random"; Not allowed because its possible values are literal

// TYPE: ANY (not recommended to use. Only as a last resort)
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

/* ---------------------------------------- */

// 4. Arrays and Objects
console.log(" ");
console.log("SECTION 4");
console.log("-----------------------------------");

// ARRAYS
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

// CHALLENGE
let temperatures4: number[] = [20, 25, 30];
let colors4: string[] = ["red", "green", "blue"];
let mixedArray4: (number | string)[] = [1, "two", 3];

// OBJECTS
let car4: { brand: string; year: number } = { brand: "Toyota", year: 2020 };
car4.brand = "ford";
// car4.color = "blue"; Not allowed because there is no such property

let newCar4: { brand: string; year: number } = { brand: "Audi", year: 2022 }; // Another instance

// ARRAYS + OBJECTS
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

// CHALLENGE
let bike4: { brand: string; year: number } = { brand: "Yamaha", year: 2010 };
let laptop4: { brand: string; year: number } = { brand: "Dell", year: 2020 };

let product41 = { title: "shirt", price: 20 };
let product42 = { title: "pants" };

let products4: { title: string; price?: number }[] = [product41, product42];

console.log(products4);

/* ---------------------------------------- */

// 5. Functions
console.log(" ");
console.log("SECTION 5");
console.log("-----------------------------------");

// ARGUMENTS
function sayHi5(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi5("John");
// sayHi(33);  Not allowed because type is STRING

// RETURNS
function calculateDiscount5(price: number): number {
  const newPrice = price * 0.9;
  console.log(newPrice);
  return newPrice;
}
calculateDiscount5(200);

// CHALLENGE
const namesArray5: string[] = ["John", "Jack", "Jake"];

// Function that checks if name is present in the names array
function checkName5(name: string): boolean {
  const isThere = namesArray5.includes(name);
  console.log((isThere ? "Found " : "Did not find ") + name);
  return isThere;
}

checkName5("John");
checkName5("Will");
checkName5("Jake");

/* ---------------------------------------- */

// 6. Optional and Default values
console.log(" ");
console.log("SECTION 6");
console.log("-----------------------------------");

// OPTIONAL PARAMETER (with fallback of 0)
function calculatePrice6(price: number, discount?: number): number {
  return price - (discount || 0);
}
// Logging the function result
console.log(calculatePrice6(100, 20));

// DEFAULT VALUES
function calculateScore6(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

// Calling the function with and without the penalty
let scoreAfterPenalty6 = calculateScore6(100, 20);
let scoreWithoutPenalty6 = calculateScore6(300);
console.log(scoreAfterPenalty6);
console.log(scoreWithoutPenalty6);

// Rest operator
function sum6(message: string, ...numbers: number[]): string {
  const total = numbers.reduce((acc, cur) => (acc += cur), 0);
  return `${message} ${total}`;
}
console.log(sum6("The total is:", 1, 2, 3, 4));

// VOID
function logMessage(message: string): void {
  console.log(message);
  // return message;  ERROR. Should not return anything because of VOID return type
}

// CHALLENGE - UNIONS
function processInput(input: string | number): void {
  console.log(typeof input === "number" ? input * 2 : input.toUpperCase());
}
processInput(5);
processInput("hello");

/* ---------------------------------------- */

// 7. Objects as parameters
console.log(" ");
console.log("SECTION 7");
console.log("-----------------------------------");

function createEmployee7({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first7 = createEmployee7({ id: 1 });
const second7 = createEmployee7({ id: 2 });
console.log(first7);
console.log(second7);

// Alternative
function createStudent7(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

createStudent7({ id: 3, name: "John" });

// CHALLENGE
function processData7(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): number | string {
  if (typeof input === "number") return input * input;
  return config.reverse
    ? input.split("").reverse().join("").toUpperCase()
    : input.toUpperCase();
}

console.log(processData7(3));
console.log(processData7("Main"));
console.log(processData7("Jeez", { reverse: true }));
