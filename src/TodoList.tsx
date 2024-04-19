import { Todo } from "@/Todo";
import { useState } from "react";

type Todo = { title: string; description: string; status: boolean };
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState("Default title");
  return (
    <div>
      <h1>{title}</h1>
      <input className="form-control" placeholder="The todo title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            status={todo.status}
            onDelete={() => alert(`todo deleted ${todo.title}`)}
          />
        );
      })}
    </div>
  );
}
