import { doFetch } from "../api/doFetch.js";
import { getData } from "../api/fetchOptions.js";
import { allListingsURL } from "../api/constants.js";

/**
 * Fetches an array of listings from the API. Default is 300 listings.
 * @param {Number} numberOfListings  - The number of listings to fetch.
 * @param {Number} excludeListings - The number of listings to exclude.
 * @returns {Promise<Array>} - An array of listings.
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
          !listing.seller.name.match("RandomUser_5375304"),
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
