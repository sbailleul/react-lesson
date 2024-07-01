import { ThemeContext } from "@/ThemeContext";
import { useContext, useState } from "react";

export const ColorPicker = () => {
  const {color, onColorChanged} = useContext(ThemeContext)
  return (
    <div className="card">
      <label htmlFor="r">R:</label>
      <input
        id="r"
        type="number"
        onChange={(e) => {
          onColorChanged({ ...color, r: e.target.valueAsNumber });
        }}
      />
      <label htmlFor="g">G:</label>
      <input
        id="g"
        type="number"
        onChange={(e) => onColorChanged({ ...color, g: e.target.valueAsNumber })}
      />
      <label htmlFor="b">B:</label>
      <input
        id="b"
        type="number"
        onChange={(e) => onColorChanged({ ...color, b: e.target.valueAsNumber })}
      />
      <span
        style={{
          width: 30,
          height: 30,
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
        }}
      ></span>
    </div>
  );
};
