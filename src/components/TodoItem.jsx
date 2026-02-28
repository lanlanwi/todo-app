import './TodoItem.css';



function TodoItem({ todo, onToggle, onSetupInfo }) {
  return (
    <li
      key={todo.id}
      className="todo-item"
    >
      <label className="todo-item-label">
        <input
          type="checkbox"
          checked={todo.completed}
          hidden
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-item-checkbox"></span>
        <span className="todo-item-date">
          <time
            dateTime={todo.createdAt}
          >
            {new Date(todo.createdAt).toLocaleString("ja-JP")}
          </time>
        </span>
        <span className="todo-item-title">{todo.text}</span>
      </label>
      <button  
        className="todo-item-info" 
        aria-label="Info Button"
        onClick={() => onSetupInfo(todo)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </li>
  );
}



export default TodoItem;
