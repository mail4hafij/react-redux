import React from 'react';

function Todo({ todo, removeTodo }) {

  function removeHandler(e) {
    console.log(todo.id);
    removeTodo(todo.id);
    e.preventDefault();
  }

  return (
    <div>
      <span>{todo.name}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" onClick={removeHandler}>Remove</a>
    </div>
  )
}

export default Todo;