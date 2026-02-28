import TodoItem from './TodoItem';
import TodoInfo from './TodoInfo';

import './TodoList.css';



function TodoList({ todos, onToggle, info, onSetupInfo, onEdit, focusInput, setEdit, onToggleAlert, onDelete }) {
  return (
    <>
      <ul className="todo-list">
        {todos && todos.map((todo) => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onSetupInfo={onSetupInfo}
          />
        ))}
      </ul>
      {info.open && <TodoInfo
        info={info}
        onSetupInfo={onSetupInfo}
        onEdit={onEdit}
        focusInput={focusInput}
        setEdit={setEdit}
        onToggleAlert={onToggleAlert}
        onDelete={onDelete}
      />}
    </>
  );
}



export default TodoList;
