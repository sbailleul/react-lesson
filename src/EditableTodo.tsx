import { useState } from "react";

export type Todo = { title: string; description: string; status: boolean };

export function EditableTodo() {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    status: false,
  });
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, title: e.target.value });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, description: e.target.value });
        }}
      />
      <input
        type="checkbox"
        onChange={() => {
          setTodo({ ...todo, status: !todo.status });
        }}
      />
    </div>
  );
}
