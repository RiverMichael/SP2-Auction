export function createNewBid() {
  const form = document.querySelector("#addBidForm");
  const formInputValue = form.addBidAmount.value;
  const bidAmount = parseInt(formInputValue);

  const bid = {
    amount: bidAmount,
  };

  return bid;
}
