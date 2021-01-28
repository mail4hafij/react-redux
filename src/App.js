import React, { useState, useEffect } from "react";
// importing custom hooks
import { UseThemeProvider } from "./hooks/UseThemeContext";

// importing Components.
import TodoListExample from "./components/TodoListExample";
import CounterExample from "./components/CounterExample";
import RouterExample from "./components/RouterExample";
import AsyncExample from "./components/AsyncExample";
import CustomHookExample from "./components/CustomHookExample";
import UseContextExample from "./components/UseContextExample";
import UseFormExample from "./components/UseFormExample";
import UseMemoExample from "./components/UseMemoExample";

export default function App() {
  // useState gives us the opportunity to maintain state.
  const [isLoggedIn, setLoggedIn] = useState(false);
  // keys to store in localStorage
  const IS_LOGGED_IN = "is_logged_in";

  // useEffect gives us the opportunity to react to changes on objects.
  useEffect(() => {
    const wasLoggedIn = JSON.parse(localStorage.getItem(IS_LOGGED_IN));
    if (wasLoggedIn) {
      setLoggedIn(wasLoggedIn);
    }
  }, []); // Only runs when the page loads.

  useEffect(() => {
    localStorage.setItem(IS_LOGGED_IN, JSON.stringify(isLoggedIn));
  }, [isLoggedIn]); // Runs evertime when values are changed.

  // Handlers
  function loginHandler(e) {
    setLoggedIn(true);
  }

  function logoutHandler(e) {
    setLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <div>
        <button onClick={logoutHandler}>Logout</button>
        <UseMemoExample />
        <UseFormExample />
        <TodoListExample />
        <CounterExample />
        <RouterExample />
        <AsyncExample />
        <CustomHookExample />
        <UseThemeProvider>
          <UseContextExample />
        </UseThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={loginHandler}>Login</button>
      </div>
    );
  }
}
