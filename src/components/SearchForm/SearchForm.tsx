import { ChangeEvent, FC, FormEvent } from "react";

interface SearchFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  query: string;
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm: FC<SearchFormProps> = ({
  query,
  handleSubmit,
  handleQueryChange,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type the full address to search, example: 4600 SILVER HILL RD, WASHINGTON, DC, 20233"
        value={query}
        onChange={handleQueryChange}
      ></input>

      <button type="submit">Search</button>
    </form>
  </div>
);
