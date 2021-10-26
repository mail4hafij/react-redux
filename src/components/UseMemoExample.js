import React, { useState, useMemo, useEffect } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [clickme, setClickme] = useState(false);

  useEffect(() => {
    console.log("click me");
  }, [clickme]);

  // without useMemo
  // const doubleNumber = getDoubleNumber(number);

  // useMemo gives us the opportunity to memoize.
  // useMemo returns a value.
  // Note: Difference between useMemo and useCallback
  // useCallback is very similar to useMemo which gives us
  // the opportunity to momoize but it returns a function not a value.
  const doubleNumber = useMemo(() => {
    console.log("Inside the usememo");
    return getDoubleNumber(number);
  }, [number]);

  function hitDouble(e) {
    setNumber(doubleNumber);
    e.preventDefault();
  }

  function hitClickme(e) {
    // This will cause the component to rerender.
    setClickme(!clickme);
  }

  return (
    <div>
      <h2>useMemo example!</h2>
      <h4>{doubleNumber}</h4>
      <button onClick={hitDouble}>Double</button>
      <button onClick={hitClickme}>Click me</button>
    </div>
  );
}

function getDoubleNumber(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
