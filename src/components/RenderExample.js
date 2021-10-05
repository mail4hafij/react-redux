import React, { useState, useEffect } from "react";

export default function RenderExample() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  // Will cause infitie render - since the component gets rendered everytime a state is changed
  // setCount(count + 1);

  useEffect(() => {
    // will cause to rerender once on the page load.
    setCount(count + 1);
    console.log("inside the useEffect count");
  }, []);

  useEffect(() => {
    // will cause to rerender once on the page load.
    setAnotherCount(anotherCount + 1);
    console.log("inside the useEffect anothercount");
  }, []);

  // Note: Both useEffects want to render the component since both chage the states (count, anotherCount)
  // But react will basically render once since it is enough to do so.

  function passingToChildElement() {
    setCount(count + 1);
    console.log("will be called from child element 1");
  }

  console.log("rendering");

  return (
    <>
      <ChildElement1 prop={count} pass={passingToChildElement}></ChildElement1>
      <ChildElement2></ChildElement2>
    </>
  );
}

export function ChildElement1({ prop, pass }) {
  useEffect(() => {
    console.log("\tinside the child 1 useEffect");
  }, []);

  function inTheChildElement() {
    console.log("\tin the child element 1");
    pass();
  }
  console.log("\trendering child 1");
  return (
    <>
      <h2>Rendering example</h2>
      <p>
        Open console to see in which sequence the components are rendered and
        re-renderd <button onClick={inTheChildElement}>Test</button>
      </p>
      <h3>{prop}</h3>
    </>
  );
}

export function ChildElement2() {
  console.log("\trendering child 2");
  return <></>;
}
