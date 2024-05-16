import { ColorPicker } from "@/ColorPicker";
import type { Color } from "@/ColorPicker";
import { useState } from "react";
export function Theme() {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  const [isStylized, setIsStylized] = useState(true);
  return (
    <>
      {isStylized === true && (
        <ColorPicker
          color={color}
          onColorChanged={setColor}
          borderColor="red"
        />
      )}
      {isStylized === false && (
        <ColorPicker
          color={color}
          onColorChanged={setColor}
          borderColor="black"
        />
      )}

      <button className="btn" onClick={() => setIsStylized(!isStylized)}>
        Stylize
      </button>
    </>
  );
}
