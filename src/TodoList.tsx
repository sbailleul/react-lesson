import { Todo } from "@/Todo";
import { useState } from "react";

type Todo = {
  id?: string;
  title: string;
  description: string;
  status: boolean;
};
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState<string>();
  return (
    <div>
      <h1>{title}</h1>
      <input
        placeholder="Mon titre pas encore modifié"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          status={todo.status}
          onDelete={() => {
            alert("Todo deleted");
          }}
        ></Todo>
      ))}
    </div>
  );
}
