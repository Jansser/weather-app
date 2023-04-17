import { QueryClient, QueryClientProvider } from "react-query";

import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";

describe("<App />", () => {
  test("Renders main page correctly", () => {
    render(<App />);
    expect(screen.getByText("Weather App")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
