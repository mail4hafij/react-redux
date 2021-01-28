import React from "react";

export default function Todo({ todo, removeTodo }) {
  function removeHandler(e) {
    // can access the todo.id
    removeTodo(todo.id);
    e.preventDefault();
  }

  return (
    <div>
      <span>{todo.name}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" onClick={removeHandler}>
        Remove
      </a>
    </div>
  );
}
