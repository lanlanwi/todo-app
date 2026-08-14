import { useState, useEffect, useRef } from 'react';
import type { TodoType, OnEditType } from '../../types';

import './EditInput.scss';

type EditInputProps = {
  data: TodoType;
  onEdit: OnEditType;
};

function EditInput({ data, onEdit }: EditInputProps) {
  const [text, setText] = useState(data.text ?? '');
  const [originalText, setOriginalText] = useState(data.text ?? '');
  const [isReadOnly, setIsReadOnly] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isReadOnly) inputRef.current?.focus();
  }, [isReadOnly]);

  const handleEdit = () => {
    setIsReadOnly(false);
  };

  const handleCancel = () => {
    setText(originalText);
    setIsReadOnly(true);
  };

  const handleSave = () => {
    onEdit(data.id, text);
    setOriginalText(text);
    setIsReadOnly(true);
  };

  return (
    <div className="info-edit">
      <input
        ref={inputRef}
        type="text"
        value={text}
        readOnly={isReadOnly}
        aria-label="Edit Task"
        className="info-edit-input"
        onChange={(e) => setText(e.target.value)}
      />

      {isReadOnly ? (
        <>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </>
      ) : (
        <>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>

          <button type="button" disabled={!text.trim()} onClick={handleSave}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EditInput;
