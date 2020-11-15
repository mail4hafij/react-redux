import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from "uuid";
// importing Components.
import Todo from './Todo';


export default function TodoList() {
  // useState gives us the opportunity to maintain state.
  const [todoList, setTodoList] = useState([]);

  // keys to store in localStorage
  const SAVED_TODO_LIST = "saved_todo_list";

  // useRef gives us the opportunity to get or set value for an element.
  const todoRef = useRef();


  
  // useEffect gives us the opportunity to react to changes on objects. 
  useEffect(() => {
    const savedTodoList = JSON.parse(localStorage.getItem(SAVED_TODO_LIST));
    if (savedTodoList) {
      setTodoList(savedTodoList);
    }
  }, []); // Only runs when the page loads.

  useEffect(() => {
    localStorage.setItem(SAVED_TODO_LIST, JSON.stringify(todoList));
  }, [todoList]); // Runs evertime when values are changed.
  


  // Handlers
  function addTodoHandler(e) {
    const todo = todoRef.current.value;
    if (todo === '')
      return

    setTodoList(elem => {
      // Concate
      return [...elem, { id: uuid(), name: todo }]
    })
    todoRef.current.value = null;
  }

  function clearTodoListHandler(e) {
    setTodoList([]);
  }



  // Functions to pass into components.
  function removeTodo(todoId) {
    // Remove a specific item.
    const copyTodoList = todoList.filter(todo => todo.id !== todoId);
    setTodoList(copyTodoList);
  }



  return (
    <div>
      <h2>TODO application using useState!</h2>
      {
        todoList.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo} />
          )
        })
      }
      <input ref={todoRef} type="text" />
      <button onClick={addTodoHandler}>Add</button>
      <button onClick={clearTodoListHandler}>Clear</button>
    </div>
  )
}