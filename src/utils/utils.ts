import { DayForecast, ForecastPeriodAPIResponse } from "../api/services/types";

export const groupForecastByDay = (periods: ForecastPeriodAPIResponse[]) => {
  return periods.reduce(
    (groupedByDay: DayForecast[], periodItem: ForecastPeriodAPIResponse) => {
      const dayName = periodItem.name.split(" ")[0];
      const dayTime = periodItem.isDaytime ? "day" : "night";

      const dayIndex = groupedByDay.findIndex(
        (day: DayForecast) => day.name === dayName
      );

      const dayAlreadyExists = dayIndex >= 0;

      if (dayAlreadyExists) {
        return groupedByDay.map((day: DayForecast, index: number) =>
          index === dayIndex
            ? {
                ...day,
                [dayTime]: {
                  ...periodItem,
                },
              }
            : day
        );
      }

      return [
        ...groupedByDay,
        {
          name: dayName,
          [dayTime]: {
            ...periodItem,
          },
        },
      ];
    },
    []
  );
};
