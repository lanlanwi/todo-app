import './TodoInfo.css';

import InfoMeta from './InfoMeta';
import InfoAlert from './InfoAlert';



function TodoInfo({ info, onSetupInfo, onEdit, focusInput, setEdit, onToggleAlert, onDelete }) {
  return (
    <div
      className="todo-list-info"
      aria-label="Info Overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onSetupInfo()
      }}
    >
      <div
        className="todo-info"
        aria-labellebdy="info-title"
      >
        <button
          className="info-close" 
          aria-label="Close Info Button"
          onClick={() => onSetupInfo()}
        >×</button>

        {info.alert 
          ? <InfoAlert
            info={info}
            onToggleAlert={onToggleAlert}
            onDelete={onDelete}
          />
          : <InfoMeta
            info={info}
            onEdit={onEdit}
            focusInput={focusInput}
            setEdit={setEdit}
            onToggleAlert={onToggleAlert}
          />
        }
      </div>
    </div>
  );
}



export default TodoInfo;
