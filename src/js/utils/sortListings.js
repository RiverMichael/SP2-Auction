export function sortListings(listings, terms) {
  const arrayToSort = [...listings];
  const sortedListings = arrayToSort.sort((a, b) => {
    if (terms.includes("created")) {
      return new Date(b.created) - new Date(a.created);
    } else if (terms.includes("endsAt")) {
      return new Date(a.endsAt) - new Date(b.endsAt);
    } else if (terms.includes("mostPopular")) {
      return b.bids.length - a.bids.length;
    }
  });

  return sortedListings;
}
