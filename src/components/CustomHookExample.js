import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


export default function CustomHookExample() {
  const [value, updateValue] = useLocalStorage("SomeInput", "");


  function updateValueHandler(e) {
    updateValue(e.target.value); 
  }

  return (
    <div>
      <h2>Custom hook example!</h2>
      <input 
        value={value}
        onChange={updateValueHandler} type="text"></input>
    </div>
  )
}