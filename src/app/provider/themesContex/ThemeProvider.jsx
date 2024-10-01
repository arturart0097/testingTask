import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContex } from "./ThemeContext";

const defaultTheme =
  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContex.Provider value={defaultProps}>{children}</ThemeContex.Provider>
  );
}
