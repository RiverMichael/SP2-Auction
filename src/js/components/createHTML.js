/**
 * Creates HTML for a listing card and appends it to the parentElement.
 * @param {object} listing - The listing object.
 * @param {HTMLElement} parentElement - The parent element to append the listing card to.
 * @example
 * ```js
 * const listing = {
 *  id: 1,
 * title: "Listing Title",
 * };
 *
 * const parentElement = document.querySelector(".#listings");
 * createListingCardHTML(listing, parentElement);
 * ```
 */
export function createListingCardHTML(listing, parentElement) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-12", "col-sm-6", "col-md-3");

  const cardLink = document.createElement("a");
  cardLink.classList.add("link-light");
  cardLink.href = `/listings/listing.html?id=${listing.id}`;
  cardContainer.appendChild(cardLink);

  const card = document.createElement("div");
  card.classList.add("card", "bg-light", "rounded", "shadow", "border-0");
  cardLink.append(card);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "mb-2", "card-image");
  cardImage.alt = listing.title;
  const nonImageRegex =
    /^(https:\/\/unsplash\.com.*)(?<!\.(jpg|jpeg|png|gif|bmp|svg))$/;
  const noValidImage = nonImageRegex.test(listing.media[0]);
  if (listing.media.length === 0 || noValidImage) {
    cardImage.src = "https://fakeimg.pl/280x220?text=No image";
  } else {
    cardImage.src = listing.media[0];
  }
  card.append(cardImage);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.append(cardBody);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  if (listing.title.length > 20) {
    cardTitle.innerText = listing.title.slice(0, 20) + "...";
  } else {
    cardTitle.innerText = listing.title;
  }

  cardBody.append(cardTitle);

  const currentBid = document.createElement("p");
  currentBid.classList.add("card-text", "mb-0");
  currentBid.innerText = "Current Bid: ";
  cardBody.append(currentBid);

  const currentBidSpan = document.createElement("span");
  currentBidSpan.classList.add("ms-2", "fw-bold");
  if (listing.bids.length === 0) {
    currentBidSpan.innerText = `No bids`;
  } else {
    const bids = listing.bids.map((bid) => bid.amount).sort((a, b) => b - a);
    currentBidSpan.innerText = `${bids[0]} credits`;
  }
  currentBid.append(currentBidSpan);

  const listingEndsAt = document.createElement("p");
  listingEndsAt.classList.add("card-text");
  listingEndsAt.innerText = "Ending: ";
  cardBody.append(listingEndsAt);

  const listingEndsAtSpan = document.createElement("span");
  listingEndsAtSpan.classList.add("ms-2", "fw-bold");
  const endDate = new Date(listing.endsAt).toLocaleDateString("no-NO");
  const endTime = new Date(listing.endsAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  listingEndsAtSpan.innerText = endDate + " - " + endTime;
  listingEndsAt.append(listingEndsAtSpan);

  parentElement.append(cardContainer);
}
