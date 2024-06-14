import { ThemeContext } from "@/Theme";
import { useContext, useState } from "react";

export type Color = { r: number; g: number; b: number };
interface ColorProps {
  borderColor: "black" | "red";
}
export function ColorPicker({
  borderColor,
}: ColorProps) {
  const {color, updateColor} = useContext(ThemeContext);
  
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
          updateColor({ ...color, r: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">G : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setCounter(counter + 1);
          updateColor({ ...color, g: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">B : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setCounter(counter + 1);
          updateColor({ ...color, b: parseInt(e.target.value) });
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
