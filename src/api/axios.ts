import axios from "axios";

export const geocodingApiClient = axios.create({
  baseURL: `/api/geocoder`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
