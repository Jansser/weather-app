import { geocodingApiClient } from "../axios";
import { Coordinates, GeoCodeLocationAddressAPIReponse } from "./types";

export const getCoordinatesFromAddress = async (
  query: string
): Promise<Coordinates> => {
  const response =
    await geocodingApiClient.get<GeoCodeLocationAddressAPIReponse>(
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

  if (result.addressMatches && result.addressMatches.length) {
    const address = result.addressMatches[0];
    const { coordinates } = address;

    return {
      latitude: coordinates.y,
      longitude: coordinates.x,
    };
  } else {
    throw new Error(`No address match found to "${query}".`);
  }
};
