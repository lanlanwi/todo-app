import { formatDate } from '../utils/date';

import './TodoList.css';



function OpenInfoIcon() {
  return (
    <svg
      viewBox="0 0 40 50" 
      width="100%" height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="50%" cy="25%"
        r="7.5%" fill="#000"
      />
      <circle
        cx="50%" cy="50%"
        r="7.5%" fill="#000"
      />
      <circle
        cx="50%" cy="75%"
        r="7.5%" fill="#000"
      />
    </svg>
  );
}



function TodoItem({ item, onToggle, onSetInfo }) {
  const formatted= formatDate(item.createdAt);

  return (
    <li className="todo-item">       
      <label className="ti-label">
        <input
          type="checkbox"
          checked={item.completed}
          aria-label="Mark task as completed"
          onChange={() => onToggle(item.id)}
        />
        <span className="ti-checkbox"></span>
        <span className="ti-date">
          <time
            dateTime={item.createdAt}
          >{formatted}</time>
        </span>
        <span className="ti-title">{item.text}</span>
      </label>
      <button
        type="button"
        aria-label="View todo info"
        className="ti-info"
        onClick={() => onSetInfo(true, item)}
      >
        <OpenInfoIcon />
      </button>
    </li>
  );
}





function TodoList({ list, onToggle, onSetInfo }) {
  return (
    <ul className="todo-list">
      {list.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onSetInfo={onSetInfo}
        />
      ))}
    </ul>
  );
}



export default TodoList;
