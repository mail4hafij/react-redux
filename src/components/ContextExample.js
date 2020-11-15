import React from 'react';
// importing custom hooks.
import { useTheme, useUpdateTheme } from '../hooks/ThemeContext';


export default function ContextExample() {
  const dark = useTheme();
  const changeThemeHandler = useUpdateTheme();

  const themeStyle = {
    backgroundColor: dark ? '#333' :  '#EEE',
    color: dark ? '#EEE' : '#333',
    padding: '20px 20px 20px 20px',
    margin: '20px 20px 20px 0px'
  }
  
  return (
    <div style={themeStyle}>
      <h2>UseContext example!</h2>
      <button onClick={changeThemeHandler}>Change theme</button>
    </div>
  )
}