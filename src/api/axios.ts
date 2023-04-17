import axios from "axios";

export const geocodingApiClient = axios.create({
  baseURL: `/api/geocoder`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const weatherServiceApiClient = axios.create({
  baseURL: "https://api.weather.gov",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
