import './SearchInput.css';



function SearchInput({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search"
      className="todo-search" 
      aria-label="Search to do"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}



export default SearchInput;
