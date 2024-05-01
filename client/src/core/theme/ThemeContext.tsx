import { Color, mapColorToStyleBackground } from "@/core/theme/shared";
import { ReactNode, createContext, useState } from "react";

export type ThemeContext = { color: Color; onColorChanged: (color: Color) => void };
export const ThemeContext = createContext<ThemeContext>({
  color: { r: 0, g: 0, b: 0 },
  onColorChanged: () => {},
});
type ThemeProviderProps = { children: ReactNode };
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return (
    <ThemeContext.Provider value={{ color, onColorChanged: setColor }}>
      <div style={mapColorToStyleBackground(color)} className="p-0 m-0">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

