import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search a country..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input type="submit" value="search" onClick={submit} />
    </form>
  );
};

export default Search;
