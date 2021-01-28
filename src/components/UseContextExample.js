import React from "react";
// importing custom hooks.
import { useGetTheme, useUpdateTheme } from "../hooks/UseThemeContext";

export default function UseContextExample() {
  const dark = useGetTheme();
  const changeThemeHandler = useUpdateTheme();

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#EEE",
    color: dark ? "#EEE" : "#333",
    padding: "20px 20px 20px 20px",
    margin: "20px 20px 20px 0px",
  };

  return (
    <div style={themeStyle}>
      <h2>useContext example!</h2>
      <button onClick={changeThemeHandler}>Change theme</button>
    </div>
  );
}
