import { useState } from "react";

export type Todo = { title: string; description: string; status: boolean };

export function EditableTodo() {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    status: false,
  });
  const canSaveTodo = !!todo.description && !!todo.title;

  return (
    <div className="card bg-success">
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
      <button
        className="btn"
        disabled={!canSaveTodo}
      >
        Save
      </button>
    </div>
  );
}
