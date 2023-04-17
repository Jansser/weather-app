import { rest } from "msw";

const getCoordinatesFromAddress = () => {
  const url = "api/geocoder/locations/onelineaddress";

  return rest.get(url, (req, res, ctx) => {
    const addressParam = req.url.searchParams.get("address");

    if (addressParam === "Invalid Address") {
      return res(
        ctx.status(200),
        ctx.json({
          result: {
            addressMatches: [],
          },
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          result: {
            input: {
              address: { address: "105 Cedarhurst Ave, Cedarhurst, NY 11516" },
              benchmark: {
                isDefault: true,
                benchmarkDescription:
                  "Public Address Ranges - Current Benchmark",
                id: "4",
                benchmarkName: "Public_AR_Current",
              },
            },
            addressMatches: [
              {
                tigerLine: { side: "L", tigerLineId: "147677954" },
                coordinates: { x: -73.72377550555058, y: 40.621920002758976 },
                addressComponents: {
                  zip: "11516",
                  streetName: "CEDARHURST",
                  preType: "",
                  city: "CEDARHURST",
                  preDirection: "",
                  suffixDirection: "",
                  fromAddress: "101",
                  state: "NY",
                  suffixType: "AVE",
                  toAddress: "123",
                  suffixQualifier: "",
                  preQualifier: "",
                },
                matchedAddress: "105 CEDARHURST AVE, CEDARHURST, NY, 11516",
              },
            ],
          },
        })
      );
    }
  });
};

const getForecastUrl = () => {
  const url =
    "https://api.weather.gov/points/40.621920002758976,-73.72377550555058";

  return rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "https://api.weather.gov/points/40.6218999,-73.7238",
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.7238, 40.6218999],
        },
        properties: {
          "@id": "https://api.weather.gov/points/40.6218999,-73.7238",
          "@type": "wx:Point",
          cwa: "OKX",
          forecastOffice: "https://api.weather.gov/offices/OKX",
          gridId: "OKX",
          gridX: 44,
          gridY: 32,
          forecast: "https://api.weather.gov/gridpoints/OKX/44,32/forecast",
          forecastHourly:
            "https://api.weather.gov/gridpoints/OKX/44,32/forecast/hourly",
          forecastGridData: "https://api.weather.gov/gridpoints/OKX/44,32",
          observationStations:
            "https://api.weather.gov/gridpoints/OKX/44,32/stations",
          relativeLocation: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-73.727833, 40.6252039],
            },
            properties: {
              city: "Cedarhurst",
              state: "NY",
              distance: {
                unitCode: "wmoUnit:m",
                value: 500.82884138644,
              },
              bearing: {
                unitCode: "wmoUnit:degree_(angle)",
                value: 137,
              },
            },
          },
          forecastZone: "https://api.weather.gov/zones/forecast/NYZ179",
          county: "https://api.weather.gov/zones/county/NYC059",
          fireWeatherZone: "https://api.weather.gov/zones/fire/NYZ213",
          timeZone: "America/New_York",
          radarStation: "KOKX",
        },
      })
    );
  });
};

const getWeatherForecast = () => {
  const url = "https://api.weather.gov/gridpoints/OKX/44,32/forecast";
  return rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "@context": [
          "https://geojson.org/geojson-ld/geojson-context.jsonld",
          {
            "@version": "1.1",
            wx: "https://api.weather.gov/ontology#",
            geo: "http://www.opengis.net/ont/geosparql#",
            unit: "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#",
          },
        ],
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.7240806, 40.6245186],
              [-73.7286005, 40.6028321],
              [-73.7000267, 40.5993976],
              [-73.6955009, 40.6210838],
              [-73.7240806, 40.6245186],
            ],
          ],
        },
        properties: {
          updated: "2023-04-17T01:32:53+00:00",
          units: "us",
          forecastGenerator: "BaselineForecastGenerator",
          generatedAt: "2023-04-17T04:37:20+00:00",
          updateTime: "2023-04-17T01:32:53+00:00",
          validTimes: "2023-04-16T19:00:00+00:00/P7DT12H",
          elevation: {
            unitCode: "wmoUnit:m",
            value: 7.0104,
          },
          periods: [
            {
              number: 1,
              name: "Overnight",
              startTime: "2023-04-17T00:00:00-04:00",
              endTime: "2023-04-17T06:00:00-04:00",
              isDaytime: false,
              temperature: 53,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 50,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 11.11111111111111,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 93,
              },
              windSpeed: "9 mph",
              windDirection: "E",
              icon: "https://api.weather.gov/icons/land/night/rain_showers,50?size=medium",
              shortForecast: "Areas Of Fog",
              detailedForecast:
                "Areas of fog before 2am, then areas of fog and a chance of rain showers. Cloudy, with a low around 53. East wind around 9 mph. Chance of precipitation is 50%. New rainfall amounts less than a tenth of an inch possible.",
            },
            {
              number: 2,
              name: "Monday",
              startTime: "2023-04-17T06:00:00-04:00",
              endTime: "2023-04-17T18:00:00-04:00",
              isDaytime: true,
              temperature: 66,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 50,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 11.11111111111111,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 93,
              },
              windSpeed: "9 to 14 mph",
              windDirection: "SE",
              icon: "https://api.weather.gov/icons/land/day/rain_showers,50/rain_showers,40?size=medium",
              shortForecast: "Areas Of Fog",
              detailedForecast:
                "Areas of fog and a chance of rain showers before 2pm. Partly sunny, with a high near 66. Southeast wind 9 to 14 mph. Chance of precipitation is 50%. New rainfall amounts between a tenth and quarter of an inch possible.",
            },
            {
              number: 3,
              name: "Monday Night",
              startTime: "2023-04-17T18:00:00-04:00",
              endTime: "2023-04-18T06:00:00-04:00",
              isDaytime: false,
              temperature: 50,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 6.111111111111111,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 61,
              },
              windSpeed: "15 mph",
              windDirection: "SW",
              icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
              shortForecast: "Partly Cloudy",
              detailedForecast:
                "Partly cloudy, with a low around 50. Southwest wind around 15 mph.",
            },
            {
              number: 4,
              name: "Tuesday",
              startTime: "2023-04-18T06:00:00-04:00",
              endTime: "2023-04-18T18:00:00-04:00",
              isDaytime: true,
              temperature: 60,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 2.7777777777777777,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 61,
              },
              windSpeed: "14 to 17 mph",
              windDirection: "W",
              icon: "https://api.weather.gov/icons/land/day/sct?size=medium",
              shortForecast: "Mostly Sunny",
              detailedForecast:
                "Mostly sunny, with a high near 60. West wind 14 to 17 mph.",
            },
            {
              number: 5,
              name: "Tuesday Night",
              startTime: "2023-04-18T18:00:00-04:00",
              endTime: "2023-04-19T06:00:00-04:00",
              isDaytime: false,
              temperature: 45,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 0.5555555555555556,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 58,
              },
              windSpeed: "12 to 17 mph",
              windDirection: "W",
              icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
              shortForecast: "Partly Cloudy",
              detailedForecast:
                "Partly cloudy, with a low around 45. West wind 12 to 17 mph.",
            },
            {
              number: 6,
              name: "Wednesday",
              startTime: "2023-04-19T06:00:00-04:00",
              endTime: "2023-04-19T18:00:00-04:00",
              isDaytime: true,
              temperature: 60,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 0,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 60,
              },
              windSpeed: "14 mph",
              windDirection: "W",
              icon: "https://api.weather.gov/icons/land/day/few?size=medium",
              shortForecast: "Sunny",
              detailedForecast: "Sunny, with a high near 60.",
            },
            {
              number: 7,
              name: "Wednesday Night",
              startTime: "2023-04-19T18:00:00-04:00",
              endTime: "2023-04-20T06:00:00-04:00",
              isDaytime: false,
              temperature: 45,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 1.1111111111111112,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 60,
              },
              windSpeed: "7 to 14 mph",
              windDirection: "NW",
              icon: "https://api.weather.gov/icons/land/night/few?size=medium",
              shortForecast: "Mostly Clear",
              detailedForecast: "Mostly clear, with a low around 45.",
            },
            {
              number: 8,
              name: "Thursday",
              startTime: "2023-04-20T06:00:00-04:00",
              endTime: "2023-04-20T18:00:00-04:00",
              isDaytime: true,
              temperature: 64,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 4.444444444444445,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 62,
              },
              windSpeed: "9 mph",
              windDirection: "W",
              icon: "https://api.weather.gov/icons/land/day/sct?size=medium",
              shortForecast: "Mostly Sunny",
              detailedForecast: "Mostly sunny, with a high near 64.",
            },
            {
              number: 9,
              name: "Thursday Night",
              startTime: "2023-04-20T18:00:00-04:00",
              endTime: "2023-04-21T06:00:00-04:00",
              isDaytime: false,
              temperature: 52,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 6.666666666666667,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 74,
              },
              windSpeed: "5 to 10 mph",
              windDirection: "S",
              icon: "https://api.weather.gov/icons/land/night/sct?size=medium",
              shortForecast: "Partly Cloudy",
              detailedForecast: "Partly cloudy, with a low around 52.",
            },
            {
              number: 10,
              name: "Friday",
              startTime: "2023-04-21T06:00:00-04:00",
              endTime: "2023-04-21T18:00:00-04:00",
              isDaytime: true,
              temperature: 64,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: null,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 8.333333333333334,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 71,
              },
              windSpeed: "5 to 13 mph",
              windDirection: "SE",
              icon: "https://api.weather.gov/icons/land/day/bkn?size=medium",
              shortForecast: "Partly Sunny",
              detailedForecast: "Partly sunny, with a high near 64.",
            },
            {
              number: 11,
              name: "Friday Night",
              startTime: "2023-04-21T18:00:00-04:00",
              endTime: "2023-04-22T06:00:00-04:00",
              isDaytime: false,
              temperature: 54,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 40,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 10,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 86,
              },
              windSpeed: "13 mph",
              windDirection: "SE",
              icon: "https://api.weather.gov/icons/land/night/rain_showers,40?size=medium",
              shortForecast: "Chance Rain Showers",
              detailedForecast:
                "A chance of rain showers after 8pm. Mostly cloudy, with a low around 54. Chance of precipitation is 40%.",
            },
            {
              number: 12,
              name: "Saturday",
              startTime: "2023-04-22T06:00:00-04:00",
              endTime: "2023-04-22T18:00:00-04:00",
              isDaytime: true,
              temperature: 66,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 50,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 10.555555555555555,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 83,
              },
              windSpeed: "10 to 15 mph",
              windDirection: "SE",
              icon: "https://api.weather.gov/icons/land/day/rain_showers,50/tsra_sct,50?size=medium",
              shortForecast: "Chance Rain Showers",
              detailedForecast:
                "A chance of rain showers before 2pm, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 66. Chance of precipitation is 50%.",
            },
            {
              number: 13,
              name: "Saturday Night",
              startTime: "2023-04-22T18:00:00-04:00",
              endTime: "2023-04-23T06:00:00-04:00",
              isDaytime: false,
              temperature: 50,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 50,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 11.11111111111111,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 93,
              },
              windSpeed: "15 mph",
              windDirection: "SW",
              icon: "https://api.weather.gov/icons/land/night/tsra_sct,50/tsra_sct,40?size=medium",
              shortForecast: "Chance Showers And Thunderstorms",
              detailedForecast:
                "A chance of showers and thunderstorms. Mostly cloudy, with a low around 50. Chance of precipitation is 50%.",
            },
            {
              number: 14,
              name: "Sunday",
              startTime: "2023-04-23T06:00:00-04:00",
              endTime: "2023-04-23T18:00:00-04:00",
              isDaytime: true,
              temperature: 62,
              temperatureUnit: "F",
              temperatureTrend: null,
              probabilityOfPrecipitation: {
                unitCode: "wmoUnit:percent",
                value: 30,
              },
              dewpoint: {
                unitCode: "wmoUnit:degC",
                value: 7.222222222222222,
              },
              relativeHumidity: {
                unitCode: "wmoUnit:percent",
                value: 83,
              },
              windSpeed: "13 mph",
              windDirection: "W",
              icon: "https://api.weather.gov/icons/land/day/rain_showers,30?size=medium",
              shortForecast: "Chance Rain Showers",
              detailedForecast:
                "A chance of rain showers. Partly sunny, with a high near 62. Chance of precipitation is 30%.",
            },
          ],
        },
      })
    );
  });
};

export const handlers = [
  getCoordinatesFromAddress(),
  getForecastUrl(),
  getWeatherForecast(),
];
