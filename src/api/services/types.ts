export interface MatchedAddress {
  coordinates: {
    x: number;
    y: number;
  };
  matchedAddress: string;
}

export interface GeoCodeLocationAddressReponse {
  result: {
    addressMatches: MatchedAddress[];
  };
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
