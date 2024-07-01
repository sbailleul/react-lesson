import { ThemeContext } from "@/ThemeContext";
import { useContext, useState } from "react";

type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};
type Todo = { title: string; description: string; status: boolean };

export function Todo({ title, description, status, onDelete }: TodoProps) {
  const [todo, setTodo] = useState({ title, description, status });
  const {
    color: { r, g, b },
  } = useContext(ThemeContext);
  return (
    <div>
      <h2>
        {r}
        {g}
        {b}
      </h2>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <span>
        <span>{todo.status ? "Done" : "Todo"}</span>
      </span>

      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => setTodo({ ...todo, status: !todo.status })}
      />
      <button onClick={onDelete} />
    </div>
  );
}
