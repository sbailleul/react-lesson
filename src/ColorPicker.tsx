import { useState } from "react";

export type Color = { r: number; g: number; b: number };
interface ColorProps {
  color: Color;
  onColorChanged: (color: Color) => void;
  borderColor: "black" | "red";
}
export function ColorPicker({
  color,
  onColorChanged,
  borderColor,
}: ColorProps) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="card" style={{ borderColor: borderColor }}>
      <h1>{counter}</h1>
      <label htmlFor="r-color">R : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setCounter(counter + 1);
          onColorChanged({ ...color, r: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">G : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setCounter(counter + 1);
          onColorChanged({ ...color, g: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">B : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setCounter(counter + 1);
          onColorChanged({ ...color, b: parseInt(e.target.value) });
        }}
      />
      <span
        style={{
          width: 30,
          height: 30,
          backgroundColor: `rgb(${color.r},${color.g},${color.b})`,
        }}
      ></span>
    </div>
  );
}
