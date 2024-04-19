import { useState } from "react";

type Color = { r: number; g: number; b: number };
export function ColorPicker() {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return (
    <div className="card">
      <label htmlFor="r-color">R : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setColor({ ...color, r: parseInt(e.target.value) });
        }}
      />
        <label htmlFor="r-color">G : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setColor({ ...color, g: parseInt(e.target.value) });
        }}
      />
        <label htmlFor="r-color">B : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          setColor({ ...color, b: parseInt(e.target.value) });
        }}
      />
      {/* <span style={{}}></span> */}
    </div>
  );
}
