import { useState, useEffect } from 'react';



// Ex: "2026-06-21T07:27:45.124Z"
const timeNow = () => (
  new Date().toISOString()
);

// Ex: "1782012811819-5f08e046066188"
const generateId = () => (
  crypto?.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(16).slice(2)}`
);

const storageKey = "todos-data";



function useTodos(setAlert) {
  const [todos, setTodos] = useState(() => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(storageKey);
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos]);
  

  /* Actions */
  const getTodoData = (id) => {
    if (typeof id !== "string") return;
    return todos.find(d => d.id === id) ?? null;
  }

  const handleAddTodo = (text = "") => {
    if (!text.trim()) return;
    const now = timeNow();
    setTodos(prev => [
      {
        id: generateId(),
        text: text.trim(),
        completed: false,
        createdAt: now,
        updatedAt: now,
        completedAt: null,
        lastAction: "Created"
      },
      ...prev
    ]);
    setAlert("Added task");
  };

  const handleToggleTodo = (id) => {
    const target = getTodoData(id);
    if (!target) return;

    const lastAction = target.completed
      ? "Reopened" : "Completed";

    const now = timeNow();
    setTodos(prev => prev.map(item => (
      item?.id === id ? {
        ...item,
        completed: !item.completed,
        updatedAt: now,
        completedAt: item.completed ? null : now,
        lastAction
      }: item
    )));
    setAlert(`${lastAction} task`);
  };

  const handleEditTodo = (id, text) => {
    if (!text.trim()) {
      setAlert("This box is feeling a little empty.");
      return;
    }

    const target = getTodoData(id);
    if (!target) return;
    const trimmed = text.trim();
    if (target.text === trimmed) return;

    const now = timeNow();
    setTodos(prev => prev.map(item => (
      item?.id === id ? {
        ...item,
        text: trimmed,
        updatedAt: now,
        lastAction: "Edited"
      } : item
    )));
    setAlert("Edited task");
  };

  const handleDeleteTodo = (id = "") => {
    setTodos(prev => prev.filter(item => item?.id !== id));
    setAlert("Deleted task");
  }


  return {
    todos,
    onAdd: handleAddTodo,
    onToggle: handleToggleTodo,
    onEdit: handleEditTodo,
    onDelete: handleDeleteTodo
  };
}



export default useTodos;
