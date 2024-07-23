import { ChangeEvent, FC } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;