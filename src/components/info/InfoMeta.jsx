import { formatDate } from '../../utils/date';

import './InfoMeta.css';

import EditInput from './EditInput';



function TodoMeta({ data }) {
  const activeClass = data.completed ? "" : "bold";
  const completedClass = data.completed ? "bold" : "";

 
  return (
    <dl className="info-meta">
      <dt>Created at</dt>
      <dd>
        <time dateTime={data.createdAt}>
          {formatDate(data.createdAt)}
        </time>
      </dd>

      <dt className="meta-spacer">Status</dt>
      <dd>
        <span
          className={activeClass}
        >Active</span>
        <span aria-hidden="true"> / </span>
        <span
          className={completedClass}
        >Completed</span>
      </dd>

      <dt>Completed at</dt>
      <dd>
        {data.completed
          ? <time
            dateTime={data.completedAt}
          >
            {formatDate(data.completedAt)}
          </time>
          : "Not completed"}
      </dd>

      <dt className="meta-spacer">Last Action</dt>
      <dd>{data.lastAction}</dd>

      <dt>Updated at</dt>
      <dd>
        <time dateTime={data.updatedAt}>
          {formatDate(data.updatedAt)}
        </time>
      </dd>
    </dl>
  );
}



function InfoMeta({ data, onEdit, onOpenAlert }) {
  if (!data) {
    return <p className="missing">Data missing</p>;
  }

  return (
    <>
      <div
        className="info-title"
      >Info</div>

      <EditInput
        data={data}
        onEdit={onEdit}
      />

      <TodoMeta data={data} />

      <button
        type="button"
        className="info-delete-btn"
        onClick={onOpenAlert}
      >Delete</button>
    </>
  );
}



export default InfoMeta;
