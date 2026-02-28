import './TodoInput.css';



function TodoInput({ text, setText, onAdd }) {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        placeholder="Task"
        className="todo-input-field"
        aria-label="To do textbox"
        onChange={(e) => {setText(e.target.value)}}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd()
        }}
      />
      <button
        className="todo-input-add" 
        aria-label="Add"
        onClick={onAdd}
      >+</button>
    </div>
  );
}



export default TodoInput;
