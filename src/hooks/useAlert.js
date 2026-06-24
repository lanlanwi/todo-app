import { useState, useEffect, useRef } from 'react';



function useAlert() {
  const [todoAlert, setTodoAlert] = useState({ open: false, text: "" });


  const alertTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(alertTimerRef.current);
  }, []);


  const setAlert = (text = "", duration = 2500) => {
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current);

    setTodoAlert({ open: true, text });

    alertTimerRef.current = window.setTimeout(() => {
      setTodoAlert(prev => ({
        ...prev, open: false
      }));
    }, duration);
  }


  return {
    todoAlert, setAlert
  };
}



export default useAlert;
