import { FC } from "react";
import {
  DayForecast,
  ForecastPeriodAPIResponse,
} from "../../api/services/types";
import {
  Container,
  ShiftContainer,
  TemperatureContainer,
  TemperatureImage,
  TemperatureTitle,
} from "./DailyForecast.styles";

interface DailyForecastProps {
  dayForecast: DayForecast;
}

interface DayShiftForecastProps {
  title: string;
  forecast: ForecastPeriodAPIResponse;
}

const DayShiftForecast: FC<DayShiftForecastProps> = ({ title, forecast }) => (
  <div>
    <TemperatureContainer>
      <TemperatureImage src={forecast.icon} />
      <TemperatureTitle>{forecast.temperature}°</TemperatureTitle>
    </TemperatureContainer>
    <h6>{title}</h6>
    <p>
      <strong>{forecast.shortForecast}</strong>
    </p>
    <p>
      <small>{forecast.detailedForecast}</small>
    </p>
  </div>
);

export const DailyForecast: FC<DailyForecastProps> = ({ dayForecast }) => {
  return (
    <Container key={dayForecast.name}>
      <h3>
        {dayForecast.name}{" "}
        {dayForecast.day?.startTime
          ? new Date(dayForecast.day?.startTime).getDate()
          : ""}
      </h3>

      <ShiftContainer>
        {dayForecast.day && (
          <DayShiftForecast title="Day" forecast={dayForecast.day} />
        )}

        {dayForecast.night && (
          <DayShiftForecast title="Night" forecast={dayForecast.night} />
        )}
      </ShiftContainer>
    </Container>
  );
};
