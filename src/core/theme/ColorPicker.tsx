import { useThemeContext } from "@/core/theme/useThemeContext";
import { Color, mapColorToStyleBackground } from "@/core/theme/shared";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

type ColorProps = {
  borderColor: "red" | "black";
};
export function ColorPicker({ borderColor }: ColorProps) {
  const [changesCount, setChangesCount] = useState(0);
  const { color, onColorChanged } = useThemeContext();
  const handleColorChanged = (color: Color) => {
    setChangesCount(changesCount + 1);
    onColorChanged(color);
  };
  return (
    <Card className="m-3" style={{ border: `5px solid ${borderColor}` }}>
      <CardTitle className="d-flex justify-content-between">
        Color picker
        <div className="border border-3 rounded-2 border-success">
          {changesCount}
        </div>
      </CardTitle>
      <CardBody>
        <FormGroup>
          <FormLabel>R</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              handleColorChanged({ ...color, r: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>G</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              handleColorChanged({ ...color, g: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>B</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              handleColorChanged({ ...color, b: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <div>
          <h1>
            Color
            <div
              style={{
                ...mapColorToStyleBackground(color),
                width: 20,
                height: 20,
              }}
            ></div>
          </h1>
        </div>
      </CardBody>
    </Card>
  );
}
