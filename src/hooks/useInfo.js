import { useState, useEffect } from 'react';



const initialInfo = {
  open: false, alert: false
};



function useInfo() {
  const [info, setInfo] = useState(initialInfo);
  const [selectedItem, setSelectedItem] = useState(null);


  /* Actions */
  const handleSetInfo = (val, item = null) => {
    setSelectedItem(item);
    setInfo(prev => ({
      ...prev, open: val, alert: false
    }));
  };

  const handleOpenAlert = () => {
    setInfo(prev => ({ ...prev, alert: true }));
  };

  const handleCloseAlert = () => {
    setInfo(prev => ({ ...prev, alert: false }));
  };


  return {
    info, selectedItem,
    onSetInfo: handleSetInfo,
    onOpenAlert: handleOpenAlert,
    onCloseAlert: handleCloseAlert
  };
}



export default useInfo;
