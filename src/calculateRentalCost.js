/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfTheDay = 40;
  const totalPrice = days * priceOfTheDay;
  const shortTerm = 3;
  const longTerm = 7;

  if (days >= shortTerm && days < longTerm) {
    return totalPrice - 20;
  }

  if (days >= longTerm) {
    return totalPrice - 50;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
