import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function SomeInput() {
  const [value, updateValue] = useLocalStorage("SomeInput", "");


  function updateValueHandler(e) {
    updateValue(e.target.value); 
  }

  return (
    <div>
      <h2>Custom hooks example!</h2>
      <input 
        value={value}
        onChange={updateValueHandler} type="text"></input>
    </div>
  )
}

export default SomeInput;