import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

//Componente
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("escuro");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//Hook
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Você precisa instanciar o ThemeContext");
  }
  return context;
}

export { useTheme, ThemeProvider };
