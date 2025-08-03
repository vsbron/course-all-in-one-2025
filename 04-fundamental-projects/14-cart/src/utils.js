// Crate function that calculates cart's total cost
export const getTotals = (cart) => {
  // Declaring the consts for amount and cost
  let totalAmount = 0;
  let totalCost = 0;

  // Going through the cart and calculating values
  for (let { amount, price } of cart.values()) {
    totalCost += amount * price;
    totalAmount += totalAmount + amount;
  }

  // Return the amount and cost
  return { totalAmount, totalCost };
};
