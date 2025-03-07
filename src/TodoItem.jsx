import React, { useState } from "react";

function TodoItem({ todo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    if (isEditing) {
      editTodo(todo.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default TodoItem;
