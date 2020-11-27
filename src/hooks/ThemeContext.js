import React, { useState, useContext } from 'react';

// Creating two contexts
export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

// Custom hooks 1 (used by ChangeThemeExample)
export function useTheme() {
  // useContext gives us the opportunity to get the 
  // value from a react context (i.e., ThemeContext)
  return useContext(ThemeContext);
}

// Custom hooks 2 (used by ChangeThemeExample)
export function useUpdateTheme() {
  // useContext gives us the opportunity to get the 
  // value from a react context (i.e., ThemeUpdateContext)
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