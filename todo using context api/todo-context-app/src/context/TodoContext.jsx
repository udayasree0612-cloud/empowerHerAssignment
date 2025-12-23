import { createContext, useState } from "react";

// Step 1: Create context
export const TodoContext = createContext();

// Step 2: Create Provider
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = (title) => {
    setTodos([
      ...todos,
      { id: Date.now(), title }
    ]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
