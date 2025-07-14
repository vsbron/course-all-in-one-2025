export const slowFunction = () => {
  // Declare the value
  let value = 0;

  // Increase the value a number of times
  for (let i = 0; i < 5000000000; i++) {
    value += 1;
  }

  // Return the final value
  return value;
};
