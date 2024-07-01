import { useState } from "react";

export function InputToTest() {
  const [value, setValue] = useState<string>();
  return (
    <>
      <h1 data-testid="input-value">{value}</h1>
      <label htmlFor="my-input">Foo</label>
      <input
        onChange={(e) => setValue(e.target.value)}
        id="my-input"
        type="text"
      ></input>
    </>
  );
}
