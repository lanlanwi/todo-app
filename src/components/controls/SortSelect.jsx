import './SortSelect.css';



const options = [
  { value: "new", label: "New" },
  { value: "old", label: "Old" },
  { value: "az",  label: "A→Z" },
  { value: "za",  label: "Z→A" },
];



function SortSelect({ sort, onSetSort }) {
  return (
    <select
      value={sort}
      aria-label="Sort options"
      className="todo-sort"
      onChange={e => onSetSort(e.target.value)}
    >
      {options.map(opt => (
        <option
          key={opt.value}
          value={opt.value}
        >{opt.label}</option>
      ))}
    </select>
  );
}



export default SortSelect;
