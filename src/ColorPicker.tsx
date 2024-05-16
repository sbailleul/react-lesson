
export type Color = { r: number; g: number; b: number };
interface ColorProps{
  color: Color;
  onColorChanged: (color: Color ) => void
}
export function ColorPicker({color, onColorChanged}: ColorProps) {
  return (
    <div className="card">
      <label htmlFor="r-color">R : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          onColorChanged({ ...color, r: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">G : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
          onColorChanged({ ...color, g: parseInt(e.target.value) });
        }}
      />
      <label htmlFor="r-color">B : </label>
      <input
        id="r-color"
        type="number"
        onChange={(e) => {
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
