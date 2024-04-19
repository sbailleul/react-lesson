import { useState } from "react";

type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};
export function Todo({ title, description, status, onDelete }: TodoProps) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{title}</h1>
      <h2>Count : {counter}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <span>
        <span>{status ? "Done" : "Todo"}</span>
      </span>
      <button onClick={onDelete} />
    </div>
  );
}
