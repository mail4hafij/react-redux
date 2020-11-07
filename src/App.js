import React, { useState, useEffect } from 'react';
// importing Components.
import TodoList from './components/TodoList';
import Counter from './components/Counter';


function App () {
  // useState gives us the opportunity to maintain state.
  const [isLoggedIn, setLoggedIn] = useState(false);

  // keys to store in localStorage
  const IS_LOGGED_IN = "is_logged_in";


  // #region useEffect
  // useEffect gives us the opportunity to react to changes on objects. 
  useEffect(() => {
    const wasLoggedIn = JSON.parse(localStorage.getItem(IS_LOGGED_IN));
    if(wasLoggedIn) {
      setLoggedIn(wasLoggedIn);
    }
  }, []); // Only runs when the page loads.

  useEffect(() => {
    localStorage.setItem(IS_LOGGED_IN, JSON.stringify(isLoggedIn)); 
  }, [isLoggedIn]); // Runs evertime when values are changed.
  // #endregion


  // #region Handlers
  // Handlers
  function loginHandler (e) {
    setLoggedIn(true);
  }

  function logoutHandler (e) {
    setLoggedIn(false);
  }
  // #endregion
  


  if(isLoggedIn) {
    return (
      <div>
        <button onClick={logoutHandler}>Logout</button>
        <TodoList />
        <Counter />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={loginHandler}>Login</button>
      </div>
    )
  }
}

export default App;