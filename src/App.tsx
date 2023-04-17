import { ChangeEvent, FC, FormEvent, useState } from "react";

import { SearchForm } from "./components/SearchForm/SearchForm";
import { useQuery } from "@tanstack/react-query";

import { getWeatherForecast } from "./api/services/Weather";
import "./App.css";
import { ForecastInfo } from "./components/ForecastInfo/ForecastInfo";

const App: FC = () => {
  const [fullAddressQuery, setFullAddressQuery] = useState("");

  const queryKey = ["forecast"];
  const {
    data: forecastData,
    isLoading,
    isFetching,
    isFetched,
    isError,
    error,
    refetch,
  } = useQuery(queryKey, () => getWeatherForecast(fullAddressQuery), {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleAddressSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullAddressQuery.trim()) {
      refetch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullAddressQuery(e.target.value);
  };

  const renderForecast = () => {
    if (isFetching && isLoading) {
      return <p>Loading...</p>;
    }

    if (isError) {
      return <p>Error: {(error as any)?.message}</p>;
    }

    if (isFetched && forecastData) {
      return <ForecastInfo forecast={forecastData} />;
    }

    return null;
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <SearchForm
        query={fullAddressQuery}
        handleQueryChange={handleChange}
        handleSubmit={handleAddressSearch}
        isLoading={isFetching && isLoading}
      />

      {renderForecast()}
    </div>
  );
};

export default App;
