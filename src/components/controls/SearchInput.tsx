import './SearchInput.scss';

type SearchInputProps = {
  search: string;
  onSetSearch: (val: string) => void;
};

function SearchInput({ search, onSetSearch }: SearchInputProps) {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search"
      aria-label="Search to do"
      autoComplete="off"
      inputMode="search"
      className="todo-search"
      onChange={(e) => onSetSearch(e.target.value)}
    />
  );
}

export default SearchInput;
