import useTodos from './hooks/useTodos';

import TodoInput from './components/TodoInput';
import SearchInput from './components/SearchInput';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';

import './App.css';



function App() {
  const {
    text, setText,
    search, setSearch,
    filter, setFilter,
    sort, setSort,
    todos, setTodos,
    info, setInfo,
    editText, setEditText,
    alert, setAlert,
    logText,
    sortedTodos,
    count,
    handleAddTodo,
    handleToggleTodo,
    handleSetupInfo,
    handleEditTodo,
    focusInputRef,
    handleAlertToggle,
    handleDeleteTodo
  } = useTodos();


  return (
    <div
      className="app"
    >
      <h1>Todo App</h1>

      <TodoInput
        text={text}
        setText={setText}
        onAdd={handleAddTodo}
      />

      <div className="todo-controls">
        <SearchInput
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <div className="controls-group">
          <span className="todo-count">{filter} : {count}</span>
          <select
            className="todo-sort"
            onChange={(e) => setSort(e.target.value)}
          >
             <option value="New">New</option>
             <option value="Old">Old</option>
             <option value="AZ">A→Z</option>
             <option value="ZA">Z→A</option>
          </select>
        </div>
      </div>

      {logText && <p className="todo-log">{logText}</p>}

      <TodoList
        todos={sortedTodos}
        onToggle={handleToggleTodo}
        info={info}
        onSetupInfo={handleSetupInfo}
        onEdit={handleEditTodo}
        focusInput={focusInputRef}
        setEdit={setEditText}
        onToggleAlert={handleAlertToggle}
        onDelete={handleDeleteTodo}
      />
      
      <span
        className={alert.open ? "todo-alert open" : "todo-alert"}
      >{alert.text}</span>
    </div>
  );
}



export default App;
