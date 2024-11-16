"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Toggling theme to:", newTheme);
    setTheme(newTheme);
    document.body.classList[newTheme === "dark" ? "add" : "remove"](
      "dark-mode"
    );
    console.log("Dark mode class applied:", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-mode");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* some comments here */
export const useTheme = () => useContext(ThemeContext);

