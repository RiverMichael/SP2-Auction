import { doFetch } from "../doFetch.js";
import { getData } from "../fetchOptions.js";
import { allListingsURL } from "../constants.js";

/**
 * Fetches an array of listings from the API.
 * The default number is 300 listings.
 * @param {Number} numberOfListings  - The number of listings to fetch. Defaults to 300.
 * @param {Number} excludeListings - The number of listings to exclude. Defaults to 0.
 * @returns {Promise<Array>} - Returns a Promise that resolves to an array of listings.
 * @example
 * ```js
 *  const numberOfListings = 100;
 *  const excludeListings = 0;
 *  const listings = await getListings(numberOfListings, excludeListings);
 * ```
 */
export async function getListings(numberOfListings = 300, excludeListings = 0) {
  let allListingsArray = [];
  const limit = 100;
  let offset = excludeListings;

  try {
    while (allListingsArray.length < numberOfListings) {
      const listings = await doFetch(
        `${allListingsURL}&limit=${limit}&offset=${offset}&sort=created&sortOrder=desc`,
        getData,
      );

      // Filtering out spam posts and test posts
      const filteredListings = listings.filter(
        (listing) =>
          !listing.title.toLowerCase().includes("test") &&
          !listing.seller.name.match("Travis_Scott") &&
          !listing.seller.name.match("RandomUser_5375304") &&
          !listing.seller.name.match("babee6") &&
          !listing.seller.name.match("yen") &&
          !listing.seller.name.match("nugget"),
      );

      allListingsArray = [...allListingsArray, ...filteredListings];

      if (listings.length === 0 || listings.length > limit) {
        break;
      }

      if (allListingsArray.length > numberOfListings) {
        allListingsArray = allListingsArray.slice(0, numberOfListings);
        break;
      }

      offset += limit;
    }
    return allListingsArray;
  } catch (error) {
    console.log(error);
  }
}
