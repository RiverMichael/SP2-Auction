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
  const endDate = new Date(listing.endsAt).toLocaleDateString("no-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const endTime = new Date(listing.endsAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  listingEndsAtSpan.innerText = endDate + " - " + endTime;
  listingEndsAt.append(listingEndsAtSpan);

  parentElement.append(cardContainer);
}

export function createListingDetailsHTML(listing, parentElement) {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add(
    "row",
    "p-3",
    "gap-5",
    "justify-content-center",
  );

  // left column
  const leftColumn = document.createElement("div");
  leftColumn.classList.add(
    "col-12",
    "col-md-4",
    "d-flex",
    "flex-column",
    "gap-4",
  );
  listingContainer.append(leftColumn);

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("d-flex", "flex-column", "gap-2");
  leftColumn.append(imagesContainer);

  const listingImage = document.createElement("img");
  listingImage.classList.add(
    "img-fluid",
    "details-image",
    "border",
    "border-secondary",
    "rounded",
    "shadow",
  );
  listingImage.alt = listing.title;
  const nonImageRegex =
    /^(https:\/\/unsplash\.com.*)(?<!\.(jpg|jpeg|png|gif|bmp|svg))$/;
  const noValidImage = nonImageRegex.test(listing.media[0]);
  if (listing.media.length === 0 || noValidImage) {
    listingImage.src = "https://fakeimg.pl/280x220?text=No image";
  } else {
    listingImage.src = listing.media[0];
  }
  imagesContainer.append(listingImage);

  if (listing.media.length > 1) {
    const imageThumbnailsContainer = document.createElement("div");
    imageThumbnailsContainer.classList.add("d-flex", "flex-wrap", "gap-2");
    imagesContainer.append(imageThumbnailsContainer);

    for (let i = 1; i < listing.media.length; i++) {
      const thumbnailDiv = document.createElement("div");
      const imageThumbnail = document.createElement("img");
      imageThumbnail.classList.add(
        "img-fluid",
        "thumbnail-image",
        "border",
        "border-secondary",
        "rounded",
      );
      imageThumbnail.src = listing.media[i];
      imageThumbnail.alt = listing.title;
      thumbnailDiv.append(imageThumbnail);
      imageThumbnailsContainer.append(thumbnailDiv);
    }
  }

  const listingDetailsContainer = document.createElement("div");
  listingDetailsContainer.classList.add("d-flex", "flex-column", "gap-1");
  leftColumn.append(listingDetailsContainer);

  const sellerDiv = document.createElement("div");
  sellerDiv.classList.add("d-flex", "gap-2", "align-items-center");
  listingDetailsContainer.append(sellerDiv);

  const seller = document.createElement("p");
  seller.classList.add("fw-bold", "mb-0");
  seller.innerText = "Seller: ";
  sellerDiv.append(seller);

  const sellerLink = document.createElement("a");
  sellerLink.classList.add("link-underline-secondary", "link-offset-2");
  sellerLink.href = `/profile/index.html?name=${listing.seller.name}`;
  sellerLink.innerText = listing.seller.name;
  sellerDiv.append(sellerLink);

  const bidsDiv = document.createElement("div");
  bidsDiv.classList.add("d-flex", "gap-2", "align-items-center");
  listingDetailsContainer.append(bidsDiv);

  const bids = document.createElement("p");
  bids.classList.add("fw-bold", "mb-0");
  bids.innerText = "Bids: ";
  bidsDiv.append(bids);

  const bidsLink = document.createElement("a");
  bidsLink.id = "bidsLink";
  bidsLink.classList.add("link-underline-secondary", "link-offset-2");
  bidsLink.innerText = listing.bids.length;
  bidsDiv.append(bidsLink);

  const createdDiv = document.createElement("div");
  createdDiv.classList.add("d-flex", "gap-2", "align-items-center");
  listingDetailsContainer.append(createdDiv);

  const created = document.createElement("p");
  created.classList.add("fw-bold", "mb-0");
  created.innerText = "Created: ";
  createdDiv.append(created);

  const createdSpan = document.createElement("span");
  createdSpan.innerText = new Date(listing.created).toLocaleDateString(
    "no-NO",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  );
  createdDiv.append(createdSpan);

  if (listing.created !== listing.updated) {
    const updatedDiv = document.createElement("div");
    updatedDiv.classList.add("d-flex", "gap-2", "align-items-center");
    listingDetailsContainer.append(updatedDiv);

    const updated = document.createElement("p");
    updated.classList.add("fw-bold", "mb-0");
    updated.innerText = "Updated: ";
    updatedDiv.append(updated);

    const updatedSpan = document.createElement("span");
    updatedSpan.innerText = new Date(listing.updated).toLocaleDateString(
      "no-NO",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      },
    );
    updatedDiv.append(updatedSpan);
  }

  // right column
  const rightColumn = document.createElement("div");
  rightColumn.classList.add(
    "col-12",
    "col-md-4",
    "d-flex",
    "flex-column",
    "gap-5",
  );
  listingContainer.append(rightColumn);

  const rightColumnDetails = document.createElement("div");
  rightColumnDetails.classList.add("d-flex", "flex-column", "gap-1");
  rightColumn.append(rightColumnDetails);

  const listingTitle = document.createElement("h1");
  listingTitle.classList.add("text-secondary");
  listingTitle.innerText = listing.title;
  rightColumnDetails.append(listingTitle);

  const currentBidDiv = document.createElement("div");
  currentBidDiv.classList.add("d-flex", "gap-2", "align-items-center");
  rightColumnDetails.append(currentBidDiv);

  const currentBid = document.createElement("p");
  currentBid.classList.add("fw-bold", "mb-0");
  currentBid.innerText = "Current Bid: ";
  currentBidDiv.append(currentBid);

  const currentBidSpan = document.createElement("span");
  if (listing.bids.length > 0) {
    const bids = listing.bids.map((bid) => bid.amount).sort((a, b) => b - a);
    currentBidSpan.innerText = `${bids[0]} credits`;
  } else {
    currentBidSpan.innerText = `No bids`;
  }
  currentBidDiv.append(currentBidSpan);

  const endingDiv = document.createElement("div");
  endingDiv.classList.add("d-flex", "gap-2", "align-items-center");
  rightColumnDetails.append(endingDiv);

  const ending = document.createElement("p");
  ending.classList.add("fw-bold", "mb-0");
  ending.innerText = "Ending: ";
  endingDiv.append(ending);

  const endingSpan = document.createElement("span");
  const endDate = new Date(listing.endsAt).toLocaleDateString("no-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const endTime = new Date(listing.endsAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  endingSpan.innerText = endDate + " - " + endTime;
  endingDiv.append(endingSpan);

  const addBidDiv = document.createElement("div");
  addBidDiv.classList.add("mt-3");
  rightColumnDetails.append(addBidDiv);

  const addBidButton = document.createElement("button");
  addBidButton.disabled = true;
  addBidButton.id = "addBidButton";
  addBidButton.classList.add(
    "btn",
    "btn-primary",
    "px-5",
    "rounded-1",
    "text-uppercase",
  );
  addBidButton.innerText = "add bid";
  addBidDiv.append(addBidButton);

  const addBidText = document.createElement("p");
  addBidText.classList.add("text-danger", "fs-6");
  addBidText.id = "addBidText";
  addBidText.innerText = "You must be logged in to bid on this listing.";
  addBidDiv.append(addBidText);

  const listingDescriptionDiv = document.createElement("div");
  listingDescriptionDiv.classList.add("d-flex", "flex-column");
  rightColumn.append(listingDescriptionDiv);

  const listingDescriptionTitle = document.createElement("h2");
  listingDescriptionTitle.classList.add("fs-5", "fw-bold");
  listingDescriptionTitle.innerText = "Description";
  listingDescriptionDiv.append(listingDescriptionTitle);

  const listingDescription = document.createElement("p");
  if (listing.description) {
    listingDescription.innerText = listing.description;
  } else {
    listingDescription.innerText = "No description added by seller.";
  }
  listingDescriptionDiv.append(listingDescription);

  parentElement.append(listingContainer);
}
