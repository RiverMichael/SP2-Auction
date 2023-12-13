import { API_BASE_URL } from "./apiBase.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const allListingsURL = `${API_BASE_URL}listings?_active=true&_bids=true`;
export const listingDetailsURL = `${API_BASE_URL}listings/${id}?_seller=true&_bids=true`;
export const bidsURL = `${API_BASE_URL}listings/${id}/bids/`;
export const authURL = `${API_BASE_URL}auth/`;
export const profilesURL = `${API_BASE_URL}profiles/`;
