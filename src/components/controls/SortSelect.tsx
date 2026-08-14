import type { SortType, OnSetSortType } from '../../types';

import './SortSelect.scss';

type SortOption = {
  value: SortType;
  label: string;
};

const options: SortOption[] = [
  { value: 'new', label: 'New' },
  { value: 'old', label: 'Old' },
  { value: 'az', label: 'A→Z' },
  { value: 'za', label: 'Z→A' },
];

type SortSelectProps = {
  sort: SortType;
  onSetSort: OnSetSortType;
};

function SortSelect({ sort, onSetSort }: SortSelectProps) {
  return (
    <select
      value={sort}
      aria-label="Sort options"
      className="todo-sort"
      onChange={(e) => onSetSort(e.target.value as SortType)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default SortSelect;
