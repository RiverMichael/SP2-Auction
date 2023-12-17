/**
 * Creates a new bid object from the value of the "addBidAmount" input field in the "addBidForm" form.
 * @returns {Object} An object with the new bid amount.
 * @example
 * ```js
 * const newBid = createNewBid();
 * ```
 */
export function createNewBid() {
  const form = document.querySelector("#addBidForm");
  const formInputValue = form.addBidAmount.value;
  const bidAmount = parseInt(formInputValue);

  const bid = {
    amount: bidAmount,
  };

  return bid;
}
