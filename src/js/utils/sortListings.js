/**
 * Sorts an array of listings based on the provided terms.
 * It creates a copy of the listings array and sorts it based on whether the terms include "created", "endsAt", or "mostPopular".
 * If "created" is included, it sorts the listings by their creation date in descending order.
 * If "endsAt" is included, it sorts the listings by their end date in ascending order.
 * If "mostPopular" is included, it sorts the listings by the length of their bids array in descending order.
 * @param {Array} listings - The listings to sort.
 * @param {Array} terms - The terms to sort by.
 * @returns {Array} The sorted listings.
 * @example
 * ```js
 * const listings = [
 *   { id: 1, created: '2022-01-01', endsAt: '2022-02-01', bids: [1, 2, 3] },
 *   { id: 2, created: '2022-01-02', endsAt: '2022-02-02', bids: [1, 2] }
 * ];
 * const terms = ['created'];
 * const sortedListings = sortListings(listings, terms);
 * ```
 */
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
