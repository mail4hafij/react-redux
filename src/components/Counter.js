import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setcounter } from '../actions';


function Counter() {
  // useSelector gives us the opportunity to access redux state.
  const counter = useSelector(state => state.counter);
  // useDispatch allows us to perform an action (sends action to reducer).
  const dispatch = useDispatch();

  // keys to store in localStorage
  const SAVED_COUNTER = "saved_counter";


  
  // useEffect gives us the opportunity to react to changes on objects. 
  useEffect(() => {
    const savedCounter = JSON.parse(localStorage.getItem(SAVED_COUNTER));
    if (savedCounter) {
      dispatch(setcounter(savedCounter));
    }
  }, []); // Only runs when the page loads.

  useEffect(() => {
    localStorage.setItem(SAVED_COUNTER, JSON.stringify(counter));
  }, [counter]); // Runs evertime when values are changed.
  
  

  return (
    <div>
      <h2>COUNTER application using redux!</h2>
      <input value={counter} type="text" readOnly />
      <button onClick={() => dispatch(increment(3))}>INC</button>
      <button onClick={() => dispatch(decrement(3))}>DEC</button>
    </div>
  )
}

export default Counter;