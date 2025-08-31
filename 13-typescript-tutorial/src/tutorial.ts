// Testing log
console.log("typescript tutorial");
/* ---------------------------------------- */

// 13. Modules
console.log(" ");
console.log("SECTION 13");
console.log("-----------------------------------");

import newStudent13, {
  sayHello13,
  person13,
  type Student13,
} from "./actions13";

sayHello13("TypeScript");
console.log(newStudent13);
console.log(person13);

const anotherStudent13: Student13 = {
  name: "Bob",
  age: 23,
};
console.log(anotherStudent13);

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

/* ---------------------------------------- */

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

// 9. Interfaces
console.log(" ");
console.log("SECTION 9");
console.log("-----------------------------------");

// Creating interface
interface IBook9 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // methods
  printAuthor(): void;
  printTitle(message: string): string;
}

// Create an object based on an interface
const deepWork9: IBook9 = {
  isbn: 123,
  title: "Deep work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};

// Call the methods
deepWork9.printAuthor();
console.log(deepWork9.printTitle("is awesome book"));

// CHALLENGE
interface IComputer9 {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const newPC9: IComputer9 = {
  id: 123,
  brand: "IBM",
  ram: 32,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

console.log(newPC9.ram);
newPC9.upgradeRam(32);
newPC9.storage = 512;
console.log(newPC9);

/* ---------------------------------------- */

// 10. Advanced Interfaces
console.log(" ");
console.log("SECTION 10");
console.log("-----------------------------------");

// Create some interfaces
interface IPerson10 {
  name: string;
  getDetails(): string;
}
// Adds up to existing interface
interface IPerson10 {
  age: number;
}
interface IDogOwner10 {
  dogName: string;
  getDogDetails(): string;
}

// Create objects
const person10: IPerson10 = {
  name: "John",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age ${this.age}`;
  },
};

// Create extending interface
interface IEmployee10 extends IPerson10 {
  employeeId: number;
}
// Create object based on new interface
const employee10: IEmployee10 = {
  name: "Jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

// Extending multiple interfaces
interface IManager10 extends IPerson10, IDogOwner10 {
  managePeople(): void;
}
// Create manager object with new interface
const manager10: IManager10 = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people");
  },
};
console.log(employee10.getDetails());
manager10.managePeople();

// CHALLENGE
function getEmployee(): IPerson10CH | IDogOwner10CH | IManager10CH {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return { name: "John" };
  }
  if (randomNumber <= 0.67) {
    return { name: "Jake", dogName: "Rex" };
  }
  return {
    name: "Bob",
    managePeople() {
      console.log("Managing people...");
    },
    delegateTasks() {
      console.log("Delegating tasks...");
    },
  };
}

interface IPerson10CH {
  name: string;
}
interface IDogOwner10CH extends IPerson10CH {
  dogName: string;
}
interface IManager10CH extends IPerson10CH {
  managePeople(): void;
  delegateTasks(): void;
}

// Get the person from the function and log it
const employee10CH: IPerson10CH | IDogOwner10CH | IManager10CH = getEmployee();
console.log(employee10CH);

// Function that returns boolean on whether the object we passed is Manager
function isManager10(
  obj: IPerson10CH | IDogOwner10CH | IManager10CH
): obj is IManager10CH {
  return "managePeople" in obj;
}

if (isManager10(employee10CH)) {
  employee10CH.delegateTasks();
}

/* ---------------------------------------- */

// 11. Tuples and Enums
console.log(" ");
console.log("SECTION 11");
console.log("-----------------------------------");

// TUPLES
// Create objects with Tuple types
let person11: [string, number] = ["John", 25];
let date11: readonly [number, number, number] = [31, 8, 2025];
// date11.push(34);  Still works if no "readonly" parameter above

// Creating function with Tuple type
function getPerson11(): [string, number] {
  return ["Jake", 25];
}

let randomPerson11 = getPerson11();
console.log(randomPerson11[0]);
console.log(randomPerson11[1]);

// Tuple with optional value
let susan11: [string, number?] = ["Susan"];

// ENUMS
// enum ServerResponseStatus11 {
//   Success,
//   Error,
// }

// interface IServerResponse11 {
//   result: ServerResponseStatus11;
//   data: string[];
// }

// function getServerResponse11(): IServerResponse11 {
//   return {
//     result: ServerResponseStatus11.Success,
//     data: ["first item", "second item"],
//   };
// }

// const response: IServerResponse11 = getServerResponse11();
// console.log(response);

/* ---------------------------------------- */

// 12. Type Assertion
console.log(" ");
console.log("SECTION 12");
console.log("-----------------------------------");

// Create value of any type, then use it with type assertion
let someValue12: any = "This is a string";
let strLength12: number = (someValue12 as string).length;

// Create Bird type
type Bird12 = {
  name: string;
};
// Assume we have a JSON string from an API or local file
let birdString12 = '{"name": "Eagle"}';
let dogString12 = '{"breed": "Poodle"}';

let birdObject12 = JSON.parse(birdString12) as Bird12;
let dogObject12 = JSON.parse(dogString12) as Bird12; // Careful, as it's allowed, but dog doesn't have name property

// TYPE - UNKNOWN
let unknownValue12: unknown;

unknownValue12 = "Hello World";
unknownValue12 = [1, 2, 3];
unknownValue12 = 42.334455;

// unknownValue12.toFixed(2);  Causes error because of Unknown type
if (typeof unknownValue12 === "number") {
  unknownValue12.toFixed(2);
}

try {
  throw new Error("There was an error");
  // Error is Unknown type
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else console.log(error);
}

// TYPE - NEVER

// let someNewValue12: never = 0; Cannot assign value to NEVER

type Theme = "light" | "dark";
function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("Light theme");
    return;
  }
  if (theme === "dark") {
    console.log("Dark theme");
    return;
  }
  // This one gets NEVER type cause all available options are run down
  theme;
}

// enum Color12 {
//   Red,
//   Blue,
//   Green,
// }

// function getColorName12(color: Color12) {
//   switch (color) {
//     case Color12.Red:
//       return "Red";
//     case Color12.Blue:
//       return "Blue";
//     // default:
//     //   throw new Error(`Unexpected color value: ${color}`);
//   }
// }

// console.log(getColorName12(Color12.Red));
// console.log(getColorName12(Color12.Blue));
// console.log(getColorName12(Color12.Green)); // Fails silently because it's not in the switch case and there's no Default case
