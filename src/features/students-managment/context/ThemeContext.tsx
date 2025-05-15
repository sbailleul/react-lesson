import { createContext, useState, type ReactNode } from "react";

type Theme  = {
    r: number;
    g: number;
    b: number;
    onColorChange: (r: number, g: number, b: number) => void;
}

export const ThemeContext =createContext<Theme>({r: 0, g: 0, b: 0, onColorChange: () => {}});

export const ThemeProvider = ({ children }: { children:ReactNode }) => {
  const [r, setR] =useState(0);
  const [g, setG] =useState(0);
  const [b, setB] =useState(0);

  const onColorChange = (r: number, g: number, b: number) => {
    setR(r);
    setG(g);
    setB(b);
  };

  return (
    <ThemeContext.Provider value={{ r, g, b, onColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
