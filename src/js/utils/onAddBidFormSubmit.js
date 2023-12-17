import { handleCreateNewBid } from "../handlers/handleCreateNewBid.js";
import { createNewBid } from "./createNewBid.js";

export function onAddBidFormSubmit(event) {
  event.preventDefault();
  const bidDetails = createNewBid();
  handleCreateNewBid(bidDetails);
}
