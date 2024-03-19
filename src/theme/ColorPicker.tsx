import {
  Color,
  mapColorToStyleBackground as mapColorToStyleBackground,
} from "@/theme/shared";
import {
  Card,
  CardBody,
  CardTitle,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

type ColorProps = { color: Color; onColorChange: (color: Color) => void };
export function ColorPicker({ color, onColorChange }: ColorProps) {
  return (
    <Card>
      <CardTitle>Color picker</CardTitle>
      <CardBody>
        <FormGroup>
          <FormLabel>R</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              onColorChange({ ...color, r: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>G</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              onColorChange({ ...color, g: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>B</FormLabel>
          <FormControl
            type="number"
            onChange={(e) =>
              onColorChange({ ...color, b: parseInt(e.target.value) })
            }
          />
        </FormGroup>
        <div>
          <h1>
            Color :{" "}
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
