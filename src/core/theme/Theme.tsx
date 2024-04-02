import { ColorPicker } from "@/core/theme/ColorPicker";
import { Color, mapColorToStyleBackground } from "@/core/theme/shared";
import { ReactNode, useState } from "react";

type ThemeProps = { children: ReactNode };
export function Theme({ children }: ThemeProps) {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  const [isStylizedPicker, setIsStylizedPicker] = useState(false);
  return (
    <div style={mapColorToStyleBackground(color)} className="p-0 m-0">
      <button className="btn btn-primary w-100" onClick={() => setIsStylizedPicker(!isStylizedPicker)}>
        {isStylizedPicker ?   "Black picker" : "Red picker"}
      </button>
      {isStylizedPicker ? (
        <ColorPicker borderColor="red" color={color} onColorChange={setColor} />
      ) : (
        <ColorPicker borderColor="black" color={color} onColorChange={setColor} />
      )}

      {children}
    </div>
  );
}
