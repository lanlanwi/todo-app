import { useState } from 'react';
import type { TodoType, InfoType } from '../types';

function useInfo() {
  const [info, setInfo] = useState<InfoType>({
    open: false,
    alert: false,
  });
  const [selectedItem, setSelectedItem] = useState<TodoType | null>(null);

  /* Actions */
  const handleSetInfo = (val: boolean, item: TodoType | null = null) => {
    setSelectedItem(item);
    setInfo((prev) => ({
      ...prev,
      open: val,
      alert: false,
    }));
  };

  const handleOpenAlert = () => {
    setInfo((prev) => ({ ...prev, alert: true }));
  };

  const handleCloseAlert = () => {
    setInfo((prev) => ({ ...prev, alert: false }));
  };

  return {
    info,
    selectedItem,
    onSetInfo: handleSetInfo,
    onOpenAlert: handleOpenAlert,
    onCloseAlert: handleCloseAlert,
  };
}

export default useInfo;
