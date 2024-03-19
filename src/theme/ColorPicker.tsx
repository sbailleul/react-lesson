import { useState } from "react";
import { Card, CardBody, CardTitle, FormControl, FormGroup, FormLabel } from "react-bootstrap";

type Color = { r: number; g: number; b: number };
export function ColorPicker() {
  const [color, setColor] = useState<Color>({ r: 0, g: 0, b: 0 });
  return <Card>
    <CardTitle>Color picker</CardTitle>
    <CardBody>
      <FormGroup>
          <FormLabel>R</FormLabel>
          <FormControl type="number" onChange={e => setColor({...color, r: parseInt(e.target.value)})}/>
      </FormGroup>
      <FormGroup>
          <FormLabel>G</FormLabel>
          <FormControl type="number" onChange={e => setColor({...color, g: parseInt(e.target.value)})}/>
      </FormGroup>
      <FormGroup>
          <FormLabel>B</FormLabel>
          <FormControl type="number" onChange={e => setColor({...color, b: parseInt(e.target.value)})}/>
      </FormGroup>
      <div>
      <h1>Color : <div className="toto"style={{background: `rgb(${color.r} ${color.g} ${color.b})`, width: 20, height:20}}></div></h1>
    </div>
    </CardBody>
  </Card>;
}
