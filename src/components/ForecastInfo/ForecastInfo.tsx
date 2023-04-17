import { FC } from "react";
import { Forecast } from "../../api/services/types";
import { Card } from "../Card/Card";
import { DailyForecast } from "../DailyForecast/DailyForecast";

interface ForecastInfoProps {
  forecast: Forecast;
}

export const ForecastInfo: FC<ForecastInfoProps> = ({ forecast }) => {
  return (
    <Card>
      <h3>7 days weather forecast</h3>
      {forecast.generatedAt && (
        <small>
          generated at: {new Date(forecast.generatedAt).toLocaleString()}
        </small>
      )}

      {forecast.dailyForecast.map((forecast) => (
        <DailyForecast key={forecast.name} dayForecast={forecast} />
      ))}
    </Card>
  );
};
