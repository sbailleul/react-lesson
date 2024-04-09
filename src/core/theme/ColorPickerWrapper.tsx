import { ColorPicker } from "@/core/theme/ColorPicker";
import { useState } from "react";

export function ColorPickerWrapper() {
  const [isStylizedPicker, setIsStylizedPicker] = useState(false);
  return (
    <div>
      <button
        className="btn btn-primary w-100"
        onClick={() => setIsStylizedPicker(!isStylizedPicker)}
      >
        {isStylizedPicker ? "Black picker" : "Red picker"}
      </button>
      {isStylizedPicker ? (
        <ColorPicker borderColor="red" />
      ) : (
        <ColorPicker borderColor="black" />
      )}
    </div>
  );
}
