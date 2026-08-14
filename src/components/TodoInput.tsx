import { useState } from 'react';
import type { OnAddType } from '../types';

import './TodoInput.scss';

type TodoInputProps = {
  onAdd: OnAddType;
};

function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  const handleClickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleAdd();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        placeholder="Write a new todo..."
        aria-label="Add new todo"
        className="todo-input-field"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleClickEnter}
      />
      <button type="button" aria-label="Add todo" className="todo-input-add" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
