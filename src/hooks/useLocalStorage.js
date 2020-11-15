import { useState, useEffect } from 'react';



export default function useLocalStorage(key, initValue) {
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