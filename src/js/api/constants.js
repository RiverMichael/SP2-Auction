import { API_BASE_URL } from "./apiBase.js";

export const allListingsURL = `${API_BASE_URL}listings?_active=true&_bids=true`;
export const singleListingURL = `${API_BASE_URL}listings/`;
export const authURL = `${API_BASE_URL}auth/`;
export const profilesURL = `${API_BASE_URL}profiles/`;
