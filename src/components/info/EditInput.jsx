import { useState, useEffect, useRef } from 'react';

import './EditInput.css';



function EditInput({ data, onEdit }) {
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);


  useEffect(() => {
    setText(data.text ?? "");
    setOriginalText(data.text ?? "");
  }, [data.text]);


  const inputRef = useRef(null);

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
        onChange={e => setText(e.target.value)}
      />

      {isReadOnly ? <>
        <button
          type="button"
          onClick={handleEdit}
        >Edit</button>
      </> : <>
        <button
          type="button"
          onClick={handleCancel}
        >Cancel</button>

        <button
          type="button"
          disabled={!text.trim()}
          onClick={handleSave}
        >Save</button>
      </>}
    </div>
  );
}



export default EditInput;
