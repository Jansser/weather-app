import { ChangeEvent, FC, FormEvent } from "react";
import { Form, Input } from "./SearchForm.styles";

interface SearchFormProps {
  query: string;
  isLoading: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm: FC<SearchFormProps> = ({
  query,
  isLoading,
  handleSubmit,
  handleQueryChange,
}) => (
  <Form onSubmit={handleSubmit}>
    <Input
      type="text"
      placeholder="Full address like: 4600 SILVER HILL RD, WASHINGTON, DC, 20233"
      value={query}
      onChange={handleQueryChange}
    ></Input>

    <button type="submit" disabled={isLoading}>
      Search
    </button>
  </Form>
);
