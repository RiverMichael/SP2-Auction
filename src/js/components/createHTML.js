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
  cardContainer.classList.add("col-12", "col-sm-6", "col-lg-3");

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

/**
 * Creates HTML for a listing details page and appends it to the parentElement.
 * @param {Object} listing - The listing object.
 * @param {HTMLElement} parentElement - The parent element to append the listing details to.
 * @example
 * ```js
 * const listing = {
 * title: "Listing Title",
 * description: "Listing description",
 * };
 *
 * const parentElement = document.querySelector("#listing");
 * createListingDetailsHTML(listing, parentElement);
 * ```
 */
export function createListingDetailsHTML(listing, parentElement) {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add(
    "row",
    "p-3",
    "gap-4",
    "justify-content-center",
  );

  // left column
  const imagesContainer = document.createElement("div");
  imagesContainer.id = "imagesContainer";
  imagesContainer.classList.add(
    "col-12",
    "col-md-5",
    "d-flex",
    "flex-column",
    "gap-2",
  );
  listingContainer.append(imagesContainer);

  const listingImage = document.createElement("img");
  listingImage.classList.add(
    "img-fluid",
    "details-image",
    "border",
    "border-secondary",
    "rounded",
    "shadow",
    "details-image",
  );
  listingImage.alt = listing.title;
  listingImage.style.cursor = "pointer";
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
        "details-image",
      );
      imageThumbnail.src = listing.media[i];
      imageThumbnail.alt = listing.title;
      imageThumbnail.style.cursor = "pointer";
      thumbnailDiv.append(imageThumbnail);
      imageThumbnailsContainer.append(thumbnailDiv);
    }
  }

  // right column
  const rightColumn = document.createElement("div");
  rightColumn.classList.add(
    "col-12",
    "col-md-auto",
    "d-flex",
    "flex-column",
    "gap-5",
  );
  listingContainer.append(rightColumn);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("d-flex", "flex-column", "gap-1");
  rightColumn.append(detailsContainer);

  const listingTitle = document.createElement("h1");
  listingTitle.classList.add("text-secondary", "m-0");
  listingTitle.innerText = listing.title;
  detailsContainer.append(listingTitle);

  const updateListingButtonContainer = document.createElement("div");
  updateListingButtonContainer.classList.add("mb-2");
  detailsContainer.append(updateListingButtonContainer);

  const updateListingButton = document.createElement("button");
  updateListingButton.type = "button";
  updateListingButton.classList.add(
    "btn",
    "btn-sm",
    "btn-dark",
    "rounded-1",
    "text-uppercase",
    "collapsed",
    "visually-hidden",
  );
  updateListingButton.id = "updateListingButton";
  updateListingButton.setAttribute("data-bs-toggle", "collapse");
  updateListingButton.setAttribute("data-bs-target", "#update-collapse");
  updateListingButton.setAttribute("aria-expanded", "false");
  updateListingButton.setAttribute("aria-controls", "update-collapse");
  updateListingButton.innerText = "edit listing";
  updateListingButtonContainer.append(updateListingButton);

  const currentBidContainer = document.createElement("div");
  currentBidContainer.classList.add("d-flex", "gap-2", "align-items-center");
  detailsContainer.append(currentBidContainer);

  const currentBid = document.createElement("p");
  currentBid.classList.add("fw-bold", "mb-0");
  currentBid.innerText = "Current Bid: ";
  currentBidContainer.append(currentBid);

  const currentBidSpan = document.createElement("span");
  if (listing.bids.length > 0) {
    const bids = listing.bids.map((bid) => bid.amount).sort((a, b) => b - a);
    currentBidSpan.innerText = `${bids[0]} credits`;
  } else {
    currentBidSpan.innerText = `No bids`;
  }
  currentBidContainer.append(currentBidSpan);

  const bidsContainer = document.createElement("div");
  bidsContainer.classList.add("d-flex", "gap-2", "align-items-center");
  detailsContainer.append(bidsContainer);

  const bids = document.createElement("p");
  bids.classList.add("fw-bold", "mb-0");
  bids.innerText = "Bids: ";
  bidsContainer.append(bids);

  const bidsAccordion = document.createElement("div");
  bidsAccordion.classList.add("accordion", "accordion-flush");
  bidsContainer.append(bidsAccordion);

  const bidsAccordionItem = document.createElement("div");
  bidsAccordionItem.classList.add("accordion-item");
  bidsAccordion.append(bidsAccordionItem);

  const bidsAccordionHeader = document.createElement("div");
  bidsAccordionHeader.classList.add("accordion-header", "border-0");
  bidsAccordionItem.append(bidsAccordionHeader);

  const bidsAccordionButton = document.createElement("button");
  bidsAccordionButton.id = "allBidsButton";
  bidsAccordionButton.classList.add(
    "accordion-button",
    "collapsed",
    "text-secondary",
    "border-0",
    "p-0",
    "gap-2",
  );
  bidsAccordionButton.type = "button";
  bidsAccordionButton.setAttribute("data-bs-toggle", "collapse");
  bidsAccordionButton.setAttribute("data-bs-target", "#bidsAccordionCollapse");
  bidsAccordionButton.setAttribute("aria-expanded", "false");
  bidsAccordionButton.setAttribute("aria-controls", "bidsAccordionCollapse");
  bidsAccordionButton.disabled = true;
  bidsAccordionButton.innerText = listing.bids.length;
  bidsAccordionHeader.append(bidsAccordionButton);

  const bidsAccordionCollapse = document.createElement("div");
  bidsAccordionCollapse.id = "bidsAccordionCollapse";
  bidsAccordionCollapse.classList.add(
    "accordion-collapse",
    "collapse",
    "border-0",
    "w-100",
  );
  bidsAccordionCollapse.setAttribute("aria-labelledby", "bidsAccordionHeader");
  bidsAccordionCollapse.setAttribute("data-bs-parent", "#bidsAccordion");
  detailsContainer.append(bidsAccordionCollapse);

  const bidsAccordionBody = document.createElement("div");
  bidsAccordionBody.classList.add("accordion-body");
  bidsAccordionCollapse.append(bidsAccordionBody);

  const allBidsText = document.createElement("p");
  allBidsText.classList.add("text-danger", "fs-6");
  allBidsText.id = "allBidsText";
  allBidsText.innerText = "You must be logged in to see all bids.";
  bidsAccordionBody.append(allBidsText);

  const allBidsList = document.createElement("ul");
  allBidsList.id = "allBidsList";
  allBidsList.classList.add(
    "list-group",
    "list-group-flush",
    "border-0",
    "justify-content-start",
    "d-none",
  );
  bidsAccordionBody.append(allBidsList);

  if (listing.bids.length > 0) {
    bidsAccordionButton.disabled = false;
    const listingBids = listing.bids.sort((a, b) => b.amount - a.amount);

    listingBids.forEach((bid) => {
      const bidsListItem = document.createElement("li");
      bidsListItem.classList.add(
        "list-group-item",
        "d-flex",
        "gap-3",
        "px-0",
        "py-2",
      );
      bidsListItem.innerText = `${bid.amount} credits`;
      allBidsList.append(bidsListItem);

      const bidsListItemSpan = document.createElement("a");
      bidsListItemSpan.classList.add(
        "link-underline-secondary",
        "link-offset-2",
        "ms-auto",
      );
      bidsListItemSpan.href = `/profile/index.html?name=${bid.bidderName}`;
      bidsListItemSpan.innerText = bid.bidderName;
      bidsListItem.append(bidsListItemSpan);
    });
  }

  const endingContainer = document.createElement("div");
  endingContainer.classList.add("d-flex", "gap-2", "align-items-center");
  detailsContainer.append(endingContainer);

  const ending = document.createElement("p");
  ending.classList.add("fw-bold", "mb-0");
  ending.innerText = "Ending: ";
  endingContainer.append(ending);

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
  endingContainer.append(endingSpan);

  const createdContainer = document.createElement("div");
  createdContainer.classList.add("d-flex", "gap-2", "align-items-center");
  detailsContainer.append(createdContainer);

  const created = document.createElement("p");
  created.classList.add("fw-bold", "mb-0");
  created.innerText = "Created: ";
  createdContainer.append(created);

  const createdSpan = document.createElement("span");
  const createdDate = new Date(listing.created).toLocaleDateString("no-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const createdTime = new Date(listing.created).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  createdSpan.innerText = createdDate + " - " + createdTime;
  createdContainer.append(createdSpan);

  if (listing.created !== listing.updated) {
    const updatedContainer = document.createElement("div");
    updatedContainer.classList.add("d-flex", "gap-2", "align-items-center");
    detailsContainer.append(updatedContainer);

    const updated = document.createElement("p");
    updated.classList.add("fw-bold", "mb-0");
    updated.innerText = "Updated: ";
    updatedContainer.append(updated);

    const updatedSpan = document.createElement("span");
    const updatedDate = new Date(listing.updated).toLocaleDateString("no-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const updatedTime = new Date(listing.updated).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    updatedSpan.innerText = updatedDate + " - " + updatedTime;
    updatedContainer.append(updatedSpan);
  }

  const sellerContainer = document.createElement("div");
  sellerContainer.classList.add("d-flex", "gap-2", "align-items-center");
  detailsContainer.append(sellerContainer);

  const seller = document.createElement("p");
  seller.classList.add("fw-bold", "mb-0");
  seller.innerText = "Seller: ";
  sellerContainer.append(seller);

  const sellerLink = document.createElement("a");
  sellerLink.id = "sellerDetailsLink";
  sellerLink.classList.add(
    "link-underline-secondary",
    "link-offset-2",
    "d-none",
  );
  sellerLink.href = `/profile/index.html?name=${listing.seller.name}`;
  sellerLink.innerText = listing.seller.name;
  sellerContainer.append(sellerLink);

  const sellerSpan = document.createElement("span");
  sellerSpan.id = "sellerDetailsText";
  sellerSpan.classList.add("fw-normal", "mb-0");
  sellerSpan.innerText = listing.seller.name;
  sellerContainer.append(sellerSpan);

  const addBidButtonContainer = document.createElement("div");
  addBidButtonContainer.classList.add("mt-3");
  detailsContainer.append(addBidButtonContainer);

  const addBidButton = document.createElement("button");
  addBidButton.disabled = true;
  addBidButton.id = "addBidButton";
  addBidButton.setAttribute("data-bs-toggle", "modal");
  addBidButton.setAttribute("data-bs-target", "#bidModal");
  addBidButton.classList.add(
    "btn",
    "btn-primary",
    "px-5",
    "rounded-1",
    "text-uppercase",
  );
  addBidButton.innerText = "add bid";
  addBidButtonContainer.append(addBidButton);

  const addBidText = document.createElement("p");
  addBidText.classList.add("text-danger", "fs-6");
  addBidText.id = "addBidText";
  addBidText.innerText = "You must be logged in to bid on this listing.";
  addBidButtonContainer.append(addBidText);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("d-flex", "flex-column");
  rightColumn.append(descriptionContainer);

  const descriptionTitle = document.createElement("h2");
  descriptionTitle.classList.add("fs-5", "fw-bold");
  descriptionTitle.innerText = "Description";
  descriptionContainer.append(descriptionTitle);

  const listingDescription = document.createElement("p");
  listingDescription.id = "listingDescription";
  if (listing.description) {
    listingDescription.innerText = listing.description;
  } else {
    listingDescription.innerText = "No description added by seller.";
  }
  descriptionContainer.append(listingDescription);

  parentElement.append(listingContainer);
}

export function createBidFormModalHTML(
  listing,
  credits,
  modalTitleContainer,
  modalDetailsContainer,
) {
  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("mb-0");
  modalTitle.innerText = "Bid on ";
  modalTitleContainer.append(modalTitle);

  const titleSpan = document.createElement("span");
  titleSpan.classList.add("text-secondary");
  titleSpan.innerText = listing.title;
  modalTitle.append(titleSpan);

  const CurrentBid = document.createElement("p");
  CurrentBid.classList.add("fw-bold", "mb-0");
  CurrentBid.innerText = "Current Bid: ";
  modalDetailsContainer.append(CurrentBid);

  const CurrentBidSpan = document.createElement("span");
  CurrentBidSpan.classList.add("fw-normal", "ms-2");
  if (listing.bids.length > 0) {
    const bids = listing.bids.map((bid) => bid.amount).sort((a, b) => b - a);
    CurrentBidSpan.innerText = `${bids[0]} credits`;
  } else {
    CurrentBidSpan.innerText = `No bids`;
  }
  CurrentBid.append(CurrentBidSpan);

  const showCredits = document.createElement("p");
  showCredits.classList.add("mb-0");
  showCredits.innerText = `You have ${credits} credits`;
  modalDetailsContainer.append(showCredits);
}

export function createNewImageInput(parentElement) {
  const addImageButton = document.getElementById("addListingImageButton");
  const newImageInput = document.createElement("input");
  newImageInput.classList.add("form-control", "mb-1");
  newImageInput.type = "url";
  newImageInput.name = "media";
  newImageInput.placeholder = "https://example.com/image.jpg";

  parentElement.appendChild(newImageInput).after(addImageButton);
}

export function createProfileDetailsHTML(profileDetails, parentElement) {
  const profile = document.createElement("section");
  profile.classList.add(
    "row",
    "align-items-center",
    "justify-content-start",
    "py-4",
    "border-bottom",
    "border-secondary",
    "border-5",
  );

  const profileAvatarContainer = document.createElement("div");
  profileAvatarContainer.classList.add(
    "col-auto",
    "d-flex",
    "flex-column",
    "align-items-center",
    "gap-1",
  );
  profile.append(profileAvatarContainer);

  const profileAvatar = document.createElement("img");
  profileAvatar.classList.add(
    "img-fluid",
    "rounded-circle",
    "shadow",
    "profile-avatar",
  );
  if (profileDetails.avatar) {
    profileAvatar.alt = profileDetails.name;
    profileAvatar.src = profileDetails.avatar;
    profileAvatarContainer.append(profileAvatar);
  } else {
    profileAvatar.alt = "No avatar";
    profileAvatar.src = "https://fakeimg.pl/150x150?text=No avatar";
    profileAvatarContainer.append(profileAvatar);
  }

  const changeAvatarButton = document.createElement("button");
  changeAvatarButton.classList.add(
    "btn",
    "text-secondary",
    "border-0",
    "fw-light",
    "p-0",
  );
  changeAvatarButton.id = "changeAvatarButton";
  changeAvatarButton.setAttribute("data-bs-toggle", "modal");
  changeAvatarButton.setAttribute("data-bs-target", "#changeAvatarModal");
  changeAvatarButton.innerText = "Change avatar";
  profileAvatarContainer.append(changeAvatarButton);

  const profileDetailsContainer = document.createElement("div");
  profileDetailsContainer.classList.add(
    "col-auto",
    "d-flex",
    "flex-column",
    "align-items-start",
  );
  profile.append(profileDetailsContainer);

  const profileName = document.createElement("h1");
  profileName.classList.add("text-secondary");
  profileName.innerText = profileDetails.name;
  profileDetailsContainer.append(profileName);

  const credits = document.createElement("p");
  credits.id = "profileCredits";
  credits.classList.add("fw-bold", "m-0");
  credits.innerText = `Credits: `;
  profileDetailsContainer.append(credits);

  const creditsSpan = document.createElement("span");
  creditsSpan.classList.add("fw-normal", "mb-0");
  creditsSpan.innerText = profileDetails.credits;
  credits.append(creditsSpan);

  parentElement.append(profile);
}

export function createProfileBidCardHTML(bid, parentElement) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-12", "col-sm-6", "col-lg-3");

  const cardLink = document.createElement("a");
  cardLink.classList.add("link-light");
  cardLink.href = `/listings/listing.html?id=${bid.listing.id}`;
  cardContainer.appendChild(cardLink);

  const card = document.createElement("div");
  card.classList.add("card", "bg-light", "rounded", "shadow", "border-0");
  cardLink.append(card);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top", "mb-2", "card-image");
  cardImage.alt = bid.listing.title;
  const nonImageRegex =
    /^(https:\/\/unsplash\.com.*)(?<!\.(jpg|jpeg|png|gif|bmp|svg))$/;
  const noValidImage = nonImageRegex.test(bid.listing.media[0]);
  if (bid.listing.media.length === 0 || noValidImage) {
    cardImage.src = "https://fakeimg.pl/280x220?text=No image";
  } else {
    cardImage.src = bid.listing.media[0];
  }
  card.append(cardImage);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.append(cardBody);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  if (bid.listing.title.length > 20) {
    cardTitle.innerText = bid.listing.title.slice(0, 20) + "...";
  } else {
    cardTitle.innerText = bid.listing.title;
  }
  cardBody.append(cardTitle);

  const yourBid = document.createElement("p");
  yourBid.classList.add("card-text", "mb-0");
  yourBid.innerText = "Your Bid: ";
  cardBody.append(yourBid);

  const yourBidSpan = document.createElement("span");
  yourBidSpan.classList.add("ms-2", "fw-bold");
  yourBidSpan.innerText = `${bid.amount} credits`;
  yourBid.append(yourBidSpan);

  const listingEndsAt = document.createElement("p");
  listingEndsAt.classList.add("card-text");
  listingEndsAt.innerText = "Ending: ";
  cardBody.append(listingEndsAt);

  const listingEndsAtSpan = document.createElement("span");
  listingEndsAtSpan.classList.add("ms-2", "fw-bold");
  const endDate = new Date(bid.listing.endsAt).toLocaleDateString("no-NO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const endTime = new Date(bid.listing.endsAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  listingEndsAtSpan.innerText = endDate + " - " + endTime;
  listingEndsAt.append(listingEndsAtSpan);

  parentElement.append(cardContainer);
}
