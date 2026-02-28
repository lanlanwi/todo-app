import './FilterBar.css';



function FilterBar({ filter, setFilter }) {
  return (
    <div className="todo-filter">
      <label
        className="todo-filter-radio"
      >
        <input
          type="radio"
          name="Filter"
          value="All"
          defaultChecked
          onChange={(e) => setFilter(e.target.value)}
        />
        All   
      </label>

      <label
        className="todo-filter-radio"
      >
        <input
          type="radio"
          name="Filter"
          value="Active"
          onChange={(e) => setFilter(e.target.value)}
        />
        Active
      </label>

      <label
        className="todo-filter-radio"
      >
        <input
          type="radio"
          name="Filter"
          value="Completed"
          onChange={(e) => setFilter(e.target.value)}
        />
        Completed
      </label>
    </div>
  );
}



export default FilterBar;
