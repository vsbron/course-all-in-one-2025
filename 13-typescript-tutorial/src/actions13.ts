// Create function
export function sayHello13(name: string): void {
  console.log(`Hello ${name}`);
}

// Create person
export let person13 = "Susan";

// Can be set up in separate file (personally preferred)
// Create Student type
export type Student13 = {
  name: string;
  age: number;
};

// Create person of Student type
const newStudent13: Student13 = {
  name: "Peter",
  age: 24,
};

export default newStudent13;
