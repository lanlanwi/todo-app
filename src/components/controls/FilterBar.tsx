import type { FilterType, OnSetFilterType } from '../../types';

import './FilterBar.scss';

const options: FilterType[] = ['All', 'Active', 'Completed'];

type FilterBarProps = {
  filter: FilterType;
  onSetFilter: OnSetFilterType;
  count: number;
};

function FilterBar({ filter, onSetFilter, count }: FilterBarProps) {
  return (
    <>
      <div className="todo-filter">
        {options.map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="filter"
              value={item}
              checked={filter === item}
              onChange={() => onSetFilter(item)}
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
