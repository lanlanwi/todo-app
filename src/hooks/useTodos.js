import { useState, useEffect, useRef } from 'react';



function useTodos() {
  /* State */
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("New");
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem("todos-data");
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  const [info, setInfo] = useState(
    {
      open: false,
      edit: false,
      alert: false,
      id: "",
      text: "",
      completed: "",
      createdAt: "",
      updatedAt: "",
      completedAt: "",
      lastAction: ""
    }
  );
  const [editText, setEditText] = useState("");
  const [alert, setAlert] = useState(
    { open: false, text: "" }
  );
  /* /State */


  let logText;    // Log

  useEffect(() => {
    localStorage.setItem("todos-data", JSON.stringify(todos));
  }, [todos]);    // Save LocalStorage

  useEffect(() => {
    document.body.style.overflow = info.open ? "hidden" : "";
  }, [info.open]);    // Stop Scroll

  /* Filter & Sort */
  const filteredTodos = todos.filter((todo) => {
    const matchFilter = filter === "All"
      ? true : filter === "Active"
      ? !todo.completed : todo.completed;

    const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  let sortedTodos = filteredTodos.slice();
  if (sort === "New") {
    sortedTodos = filteredTodos
      .slice().sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
  } else if (sort === "Old") {
    sortedTodos = filteredTodos
      .slice().sort((a, b) => 
        new Date(a.createdAt) - new Date(b.createdAt)
      );
  } else if (sort === "AZ") {
    sortedTodos = filteredTodos
      .slice()
      .sort((a, b) => 
        a.text.localeCompare(b.text, undefined, {
          numeric: true,
          sensitivity: "base"
        })
      );
  } else if (sort === "ZA") {
    sortedTodos = filteredTodos
      .slice()
      .sort((a, b) => 
        b.text.localeCompare(a.text, undefined, {
          numeric: true,
          sensitivity: "base"
        })
      );
  }
  
  const count = sortedTodos
    ? sortedTodos.length : 0;
  if (count === 0) logText = "Not Found";
  /* /Filter & Sort */


  /* Event */
  const handleAddTodo = () => {
    if (!text.trim()) return;
    const timeNow = new Date().toISOString();
    setTodos((prev) => [
      {
        id: self.crypto?.randomUUID?.() ?? Date.now().toString(),
        text: text.trim(),
        completed: false,
        createdAt: timeNow,
        updatedAt: timeNow,
        completedAt: null,
        lastAction: "Created"
      },
      ...prev
    ]);
    setText("");
  }

  const handleToggleTodo = (id) => {
    const timeNow = new Date().toISOString();
    setTodos((prev) =>
      prev.map(todo => (
        todo.id === id ? {
          ...todo,
          completed: !todo.completed,
          updatedAt: timeNow,
          completedAt: todo.completed ? "Not completed" : timeNow,
          lastAction: todo.completed ? "Reopened" : "Completed"
        } : todo
      )) 
    );
  }

  const handleSetupInfo = (data) => {
    if (info.edit) {
      addAlert("Hold on — you’re still editing.");
      return;
    }
    setInfo((prev) => (
      data ? {
        ...prev,
        open: !prev.open,
        alert: false,
        id: data.id,
        text: data.text,
        completed: data.completed,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        completedAt: data.completedAt,
        lastAction: data.lastAction
      }
      : {
        ...prev,
        open: !prev.open,
        alert: false,
        id: "",
        text: "",
        completed: "",
        createdAt: "",
        updatedAt: "",
        completedAt: "",
        lastAction: ""
      }
    ))
    setEditText("");
  }

  const handleEditTodo = () => {
    if (!info.edit) {
      setEditText(info.text);
      setInfo((prev) => ({ ...prev, edit: !prev.edit }));
    } else if (info.edit && !editText) {
      addAlert("This box is feeling a little empty.");
    } else {
      const timeNow = new Date().toISOString();
      setTodos((prev) =>
        prev.map(todo => (
          todo.id === info.id ? {
            ...todo,
            text: editText.trim(),
            updatedAt: timeNow,
            lastAction: "Edited"
          } : todo
        ))
      );
      setInfo((prev) => ({ ...prev, edit: !prev.edit }));
    }
  }

  const handleAlertToggle = (val) => {
    if (info.edit) {
      addAlert("Hold on — you’re still editing.");
      return;
    }
    setInfo((prev) => ({ ...prev, alert: val }));
  }

  const handleDeleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter(todo => todo.id !== id)
    );
    setInfo((prev) => (
      {
        ...prev,
        open: false,
        alert: false
      }
    ));
  }
  /* /Event */


  /* Focus Edit Input */
  const focusInputRef = useRef(null);
  useEffect(() => {
    if (info.edit) focusInputRef.current?.focus();
  }, [info.edit]);
  /* /Focus Edit Input */
  

  /* Alert */
  const alertTimerRef = useRef(null);

  const addAlert = (text = "") => {
    if (alertTimerRef.current) clearTimeout(alertTimerRef.current);

    setAlert({ open: true, text });

    alertTimerRef.current = setTimeout(() => {
      setAlert(prev => ({ ...prev, open: false }));
    }, 2000);
  }

  useEffect(() => {
    return () => clearTimeout(alertTimerRef.current);
  }, []);
  /* /Alert */

  return {
    text, setText,
    search, setSearch,
    filter, setFilter,
    sort, setSort,
    todos, setTodos,
    info, setInfo,
    editText, setEditText,
    alert, setAlert,
    logText,
    sortedTodos,
    count,
    handleAddTodo,
    handleToggleTodo,
    handleSetupInfo,
    handleEditTodo,
    focusInputRef,
    handleAlertToggle,
    handleDeleteTodo
  };
}



export default useTodos;
