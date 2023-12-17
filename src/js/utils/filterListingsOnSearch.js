/**
 * Filters an array of listings based on a search term.
 * It converts the search term and the listing titles to lowercase and trims them before comparing.
 * If the listing title includes the search term, it is included in the filtered listings.
 * @param {Array} listings - The array of listings to filter.
 * @param {String} term - The search term to filter by.
 * @returns {Array} - The filtered array of listings.
 * @example
 * ```js
 * const listings = [
 *  { title: "First listing", description: "This is the first listing" },
 *  { title: "Second listing", description: "This is the second listing" },
 * ];
 * const filteredListings = filterListingsOnSearch(listings, "first");
 * console.log(filteredListings);
 * // Output: [{ title: "First listing", description: "This is the first listing" }]
 * ```
 */
export function filterListingsOnSearch(listings, term) {
  const searchTerm = term.toLowerCase().trim();
  const filteredListings = listings.filter(({ title }) =>
    title.toLowerCase().trim().includes(searchTerm),
  );
  return filteredListings;
}
