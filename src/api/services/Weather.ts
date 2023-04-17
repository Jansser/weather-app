import { groupForecastByDay } from "../../utils/utils";
import { weatherServiceApiClient } from "../axios";
import { getCoordinatesFromAddress } from "./Geocoding";
import { Coordinates, Forecast, WeatherPointsUrlAPIResponse } from "./types";

export const getForecastUrl = async (
  coordinates: Coordinates
): Promise<string> => {
  const response =
    await weatherServiceApiClient.get<WeatherPointsUrlAPIResponse>(
      `/points/${coordinates.latitude},${coordinates.longitude}`
    );

  return response.data.properties.forecast;
};

export const getWeatherForecast = async (
  fullAddress: string
): Promise<Forecast> => {
  const coordinates = await getCoordinatesFromAddress(fullAddress);
  const forecastUrl = await getForecastUrl(coordinates);

  const forecast = await weatherServiceApiClient.get(forecastUrl);
  const { generatedAt, periods } = forecast.data.properties;

  const dailyForecast = groupForecastByDay(periods);

  return {
    generatedAt,
    dailyForecast,
  };
};
