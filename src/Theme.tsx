import type { Color } from "@/ColorPicker";
import { ReactNode, createContext, useState } from "react";
type ThemeContextType = {
  color: Color;
  updateColor: (color: Color) => void;
};
export const ThemeContext = createContext<ThemeContextType>(undefined!);

export function ThemeProvider({ children }: { children: ReactNode }) {
  7;
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });

  return (
    <ThemeContext.Provider value={{ color: color, updateColor: setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
