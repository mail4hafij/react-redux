import React, { useState, useContext } from 'react';

// Creating two contexts
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

// Custom hooks 1 (used by ContentExample)
export function useTheme() {
  return useContext(ThemeContext);
}

// Custom hooks 2 (used by ContextExample)
export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

// Custom hooks 3 (used by App)
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme]  = useState(false);

  function changeThemeHandler (e) {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={changeThemeHandler}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}