import { geocodingApiClient } from "../axios";
import { Coordinates, GeoCodeLocationAddressReponse } from "./types";

export const getCoordinatesFromAddress = async (
  query: string
): Promise<Coordinates> => {
  try {
    const response =
      await geocodingApiClient.get<GeoCodeLocationAddressReponse>(
        "/locations/onelineaddress",
        {
          params: {
            address: query,
            benchmark: "Public_AR_Current",
            format: "json",
          },
        }
      );

    const { result } = response.data;

    if (result.addressMatches) {
      const address = result.addressMatches[0];
      const { coordinates } = address;

      return {
        latitude: coordinates.y,
        longitude: coordinates.x,
      };
    } else {
      throw new Error(`No address found to ${query}.`);
    }
  } catch (error) {
    throw error;
  }
};
