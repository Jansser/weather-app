export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface MatchedAddress {
  coordinates: {
    x: number;
    y: number;
  };
  matchedAddress: string;
}

export interface Forecast {
  generatedAt: string;
  dailyForecast: DayForecast[];
}

export interface DayForecast {
  name: string;
  day?: ForecastPeriodAPIResponse;
  night?: ForecastPeriodAPIResponse;
}

export interface ForecastPeriodAPIResponse {
  number: number;
  startTime: string;
  name: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface GeoCodeLocationAddressAPIReponse {
  result: {
    addressMatches: MatchedAddress[];
  };
}

export interface WeatherPointsUrlAPIResponse {
  properties: {
    forecast: string;
  };
}

export interface WeatherForecastAPIResponse {
  properties: {
    periods: ForecastPeriodAPIResponse[];
  };
}
