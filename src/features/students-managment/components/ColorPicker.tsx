import { ThemeContext } from "@/features/students-managment/context/ThemeContext";
import { useContext } from "react";

export function ColorPicker() {
  const { exaColor, onColorChange } = useContext(ThemeContext);
  return (
    <div className="flex flex-column">
      <label htmlFor="color-picker">Choose a color:</label>
      <input
        type="color"
        id="color-picker"
        name="color-picker"
        defaultValue={exaColor}
        onChange={(e) => onColorChange(e.target.value)}
      />
    </div>
  );
}
