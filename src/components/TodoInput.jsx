import { useState } from 'react';

import './TodoInput.css';



function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };


  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        placeholder="Write a new todo..."
        aria-label="Add new todo"
        className="todo-input-field"
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" && !e.isComposing) {
            handleAdd();
          }
        }}
      />
      <button
        type="button"
        aria-label="Add todo"
        className="todo-input-add" 
        onClick={handleAdd}
      >+</button>
    </div>
  );
}



export default TodoInput;
