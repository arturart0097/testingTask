import "./styles/index.css";
import { AppRouter } from "./provider/router";
import { useContext, useEffect, useState } from "react";
import { ThemeContex } from "./provider/themesContex/ThemeContext";

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
};

function App() {
  //! error for boundary
  // useEffect(() => {
  //   if (Math.random() < 0.5) {
  //     throw new Error();
  //   }
  // }, []);

  const { theme, setTheme } = useContext(ThemeContex);

  const handleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <>
      <div className={`app ${theme}`}>
        <AppRouter />
      </div>
      <button className="app__buttonThemes" onClick={() => handleTheme()} />
    </>
  );
}

export default App;
