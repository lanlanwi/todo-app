import './InfoMeta.css';



function InfoMeta({ info, onEdit, focusInput, setEdit, onToggleAlert}) {
  return (
    <>
      <h2 id="info-title">Info</h2>
      <span
        ref={focusInput}
        className="todo-info-text"
        contentEditable={info.edit}
        role={info.edit ? "textbox" : undefined}
        aria-multiline={info.edit ? "true" : undefined}
        aria-label={info.edit ? "Edit Textbox" : undefined}
        onInput={(e) => setEdit(e.target.textContent)}
      >{info.text}</span>
      <button
        className={info.edit ? "todo-info-text-edit editing" : "todo-info-text-edit"}
        onClick={() => onEdit()}
      >{info.edit ? "Done" : "Edit"}</button>

      <dl className="todo-info-meta">
        <dt>Created at</dt>
        <dd>
          <time 
            dateTime={info.createdAt}
          >
            {new Date(info.createdAt).toLocaleString("ja-JP")}
          </time>
        </dd>

        <dt className="meta-spc-top">Status</dt>
        <dd className="meta-spc-top meta-status">
          <span
            style={{
              fontWeight: info.completed ? "normal" : "bold",
              color: info.completed ? "#C0C0C0" : "#444"
            }}
          >Active</span>
          <span> / </span>
          <span
            style={{
              fontWeight: info.completed ? "bold" : "normal",
              color: info.completed ? "#444" : "#C0C0C0"
            }}
          >Completed</span>
        </dd>

        <dt>Completed at</dt>
        <dd>
          {info.completed
            ? <time 
                dateTime={info.completedAt}
            >
              {new Date(info.completedAt).toLocaleString("ja-JP")}
            </time>
            : "Not completed"}
        </dd>

        <dt className="meta-spc-top">Last Action</dt>
        <dd className="meta-spc-top">{info.lastAction}</dd>

        <dt>Updated at</dt>
        <dd>
          <time 
            dateTime={info.updatedAt}
          >
            {new Date(info.updatedAt).toLocaleString("ja-JP")}
          </time>
        </dd>
      </dl>

      <button
        className="todo-info-delete"
        aria-label="Delete Todo Button"
        onClick={() => onToggleAlert(true)}
      >Delete</button>
    </>
  );
}



export default InfoMeta;