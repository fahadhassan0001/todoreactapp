import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  
  // Add a new task
  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  // Edit an existing task
  const editTodo = (id, newTitle) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo));
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

