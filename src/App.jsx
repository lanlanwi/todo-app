import './App.css';

import useAlert from './hooks/useAlert';
import useTodos from './hooks/useTodos';
import useControls from './hooks/useControls';
import useInfo from './hooks/useInfo';

import TodoInput from './components/TodoInput';
import SearchInput from './components/controls/SearchInput';
import FilterBar from './components/controls/FilterBar';
import SortSelect from './components/controls/SortSelect';
import TodoList from './components/TodoList';
import TodoInfo from './components/info/TodoInfo';



function App() {
  const {
    todoAlert, setAlert
  } = useAlert();

  const {
    todos,
    onAdd, onToggle, onEdit, onDelete
  } = useTodos(setAlert);

  const {
    filter, search, sort,
    onSetFilter, onSetSearch, onSetSort,
    filteredTodos,
    isNotFound
  } = useControls(todos);

  const {
    info, selectedItem,
    onSetInfo, onOpenAlert, onCloseAlert
  } = useInfo();


  return (
    <>
      <h1>Todo App</h1>

      <TodoInput
        onAdd={onAdd}
      />

      <div className="todo-controls">
        <SearchInput
          search={search}
          onSetSearch={onSetSearch}
        />

        <FilterBar
          filter={filter}
          onSetFilter={onSetFilter}
          count={filteredTodos.length}
        />

        <SortSelect
          sort={sort}
          onSetSort={onSetSort}
        />
      </div>

      {isNotFound
        ? <div 
          className="todo-not-found"
        >Not Found</div>
        : <TodoList
          list={filteredTodos}
          onToggle={onToggle}
          onSetInfo={onSetInfo}
        />}

      {info.open && <TodoInfo
        info={info}
        data={selectedItem}
        onSetInfo={onSetInfo}
        onOpenAlert={onOpenAlert}
        onCloseAlert={onCloseAlert}
        onEdit={onEdit}
        onDelete={onDelete}
      />}

      <div
        className={todoAlert.open ? "todo-alert open" : "todo-alert"}
      >{todoAlert.text}</div>
    </>
  );
}



export default App;
