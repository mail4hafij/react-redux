import React, { useState, useEffect } from 'react';



function useLocalStorage(key, initValue) {
  const [value, updateValue] = useState(initValue);
  

  useEffect(() => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
      updateValue(savedValue);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  
  return [value, updateValue];

}

export default useLocalStorage;