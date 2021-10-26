import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, set } from "../redux/counterSlice";

export default function CounterSliceExample() {
  // useSelector gives us the opportunity to access redux state.
  const counter = useSelector((state) => state.counterSlice.count);
  // useDispatch allows us to perform an action (sends action to reducer).
  const dispatch = useDispatch();

  // keys to store in localStorage
  const SAVED_COUNTER_SLICE = "saved_counter_slice";

  // useEffect gives us the opportunity to react to changes on objects.
  useEffect(() => {
    const savedCounter = JSON.parse(localStorage.getItem(SAVED_COUNTER_SLICE));
    if (savedCounter) {
      dispatch(set(savedCounter));
    }
  }, []); // Only runs when the page loads.

  useEffect(() => {
    localStorage.setItem(SAVED_COUNTER_SLICE, JSON.stringify(counter));
  }, [counter]); // Runs evertime when values are changed.

  return (
    <div>
      <h2>COUNTER application using redux toolkit!</h2>
      <input value={counter} type="text" readOnly />
      <button onClick={() => dispatch(inc(3))}>INC</button>
      <button onClick={() => dispatch(dec(3))}>DEC</button>
    </div>
  );
}
