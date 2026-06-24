import * as Dialog from "@radix-ui/react-dialog";

import './TodoInfo.css';

import InfoAlert from './InfoAlert';
import InfoMeta from './InfoMeta';



function CloseInfoIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%" height="100%"
      aria-hidden="true"
    >
      <path d="M35 35 L65 65"
            stroke="#555"
            strokeWidth="7.5"
            fill="none" />
      <path d="M65 35 L35 65"
            stroke="#555"
            strokeWidth="7.5"
            fill="none" />
    </svg>
  );
}


 
function TodoInfo({
  info, data,
  onSetInfo,
  onOpenAlert, onCloseAlert,
  onEdit, onDelete
}) {
  return (
    <Dialog.Root
      open={info.open}
      onOpenChange={onSetInfo}
    >
      
      <Dialog.Portal>
        <Dialog.Overlay 
          className="info-overlay"
        />
        <Dialog.Content 
          className="todo-info"
        >
          <Dialog.Close asChild>
            <button
              type="button"
              className="info-close-btn"
              aria-label="Close Info Button"
            >
              <CloseInfoIcon />
            </button>
          </Dialog.Close>

          {info.alert ? (
            <InfoAlert
              id={data.id}
              onClose={() => onSetInfo(false)}
              onCancel={onCloseAlert}
              onDelete={onDelete}
            />
          ) : (
            <InfoMeta
              data={data}
              onEdit={onEdit}
              onOpenAlert={onOpenAlert}
            />
          )}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}



export default TodoInfo;