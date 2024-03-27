import { ColorPicker } from "@/core/theme/ColorPicker";
import { Color, mapColorToStyleBackground } from "@/core/theme/shared";
import { ReactNode, useState } from "react";

type ThemeProps = { children: ReactNode };
export function Theme({ children }: ThemeProps) {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return (
    <div style={mapColorToStyleBackground(color)} className="p-0 m-0">
      <ColorPicker color={color} onColorChange={setColor} />
      {children}
    </div>
  );
}