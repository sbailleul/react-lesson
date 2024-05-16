import { useState } from "react";

interface Color {
  r: number;
  g: number;
  b: number;
}
export const ColorPicker = () => {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return (
    <div className="card">
      <label htmlFor="r">R:</label>
      <input
        id="r"
        type="number"
        onChange={(e) => {
          setColor({ ...color, r: e.target.valueAsNumber });
        }}
      />
      <label htmlFor="g">G:</label>
      <input
        id="g"
        type="number"
        onChange={(e) => setColor({ ...color, g: e.target.valueAsNumber })}
      />
      <label htmlFor="b">B:</label>
      <input
        id="b"
        type="number"
        onChange={(e) => setColor({ ...color, b: e.target.valueAsNumber })}
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
