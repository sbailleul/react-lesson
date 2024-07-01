import React, { createContext, useState } from "react";

interface Color {
  r: number;
  g: number;
  b: number;
}
export interface ThemeContextType {
  color: Color;
  onColorChanged: (color: Color) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  color: { r: 0, g: 0, b: 0 },
  onColorChanged: () => undefined,
});

interface Props {
  children: React.ReactNode;
}
export function ThemeContextProvider({ children }: Props) {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return (
    <ThemeContext.Provider value={{ color: color, onColorChanged: setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
