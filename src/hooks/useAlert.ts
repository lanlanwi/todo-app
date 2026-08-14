import { useState, useEffect, useRef } from 'react';

function useAlert() {
  type AlertStateType = {
    open: boolean;
    text: string;
  };

  const [todoAlert, setTodoAlert] = useState<AlertStateType>({
    open: false,
    text: '',
  });

  const alertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (alertTimerRef.current) {
        clearTimeout(alertTimerRef.current);
      }
    };
  }, []);

  const setAlert = (text: string = '', duration: number = 2500) => {
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current);

    setTodoAlert({ open: true, text });

    alertTimerRef.current = window.setTimeout(() => {
      setTodoAlert((prev) => ({
        ...prev,
        open: false,
      }));
    }, duration);
  };

  return {
    todoAlert,
    setAlert,
  };
}

export default useAlert;
