import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorPicker = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <h1>Color Picker</h1>

      <div>
        <p>
          Selected Color:{" "}
          <span style={{ backgroundColor: color }}>{color}</span>
        </p>
      </div>
      <label>Select Color</label>
      <input type="color" value={color} onChange={handleColorPicker} />
    </div>
  );
}
