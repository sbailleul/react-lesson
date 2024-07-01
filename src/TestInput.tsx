import { useState } from "react";

export function TestInput() {
  const [value, setValue] = useState<string>();
  return (
    <>
      <h1>{value?.toUpperCase()}</h1>
      <label htmlFor="input-id">Label</label>
      <input id="input-id" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}
