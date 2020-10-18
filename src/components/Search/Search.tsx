import React, { useEffect, useState } from 'react';

interface SearchProps {
  initialValue?: string;
  searchQuery: (value: string) => void;
}

interface SearchState {
  value: string;
}

const Search: React.FC<SearchProps> = ({ initialValue = "", searchQuery }) => {
  const [state, setState] = useState<SearchState>({
    value: initialValue,
  });

  useEffect(() => {
    searchQuery(state.value);
  }, [state.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ value: e.target.value });
  };

  return (
    <input
      type="text"
      value={state.value}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default Search;
