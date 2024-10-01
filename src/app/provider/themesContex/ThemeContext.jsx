import { createContext } from "react";

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContex = createContext({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
