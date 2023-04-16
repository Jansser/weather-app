import { ChangeEvent, FC, FormEvent, useState } from "react";
import { getCoordinatesFromAddress } from "./api/services/Geocoding";
import "./App.css";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { useQuery } from "@tanstack/react-query";

const App: FC = () => {
  const [fullAddressQuery, setFullAddressQuery] = useState("");

  const queryKey = ["forecast"];
  const {
    data: forecast,
    isLoading,
    isFetching,
    isFetched,
    isError,
    refetch,
  } = useQuery(queryKey, () => getCoordinatesFromAddress(fullAddressQuery), {
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

  return (
    <div className="App">
      <h1>Weather App</h1>

      <SearchForm
        query={fullAddressQuery}
        handleQueryChange={handleChange}
        handleSubmit={handleAddressSearch}
      />

      {isFetching && isLoading && <p>Loading...</p>}

      {isError && <span>Error</span>}
    </div>
  );
};

export default App;
