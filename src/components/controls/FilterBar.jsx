import './FilterBar.css';



const options = ["All", "Active", "Completed"];



function FilterBar({ filter, onSetFilter, count }) {
  return (
    <>
      <div className="todo-filter">
        {options.map(item => (
          <label key={item}>
            <input
              type="radio"
              name="filter"          
              value={item}
              checked={filter === item}
              onChange={e => onSetFilter(e.target.value)}
            />
            {item}   
          </label>
        ))}
      </div>
      <span className="todo-count">
        {filter} : {count}
      </span>
    </>
  );
}



export default FilterBar;
