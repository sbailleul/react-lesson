import { Todo } from "@/Todo";
import { useState } from "react";

type Todo = { title: string; description: string; status: boolean };
export type TodoListProps = { todos: Todo[] };

function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
type LoadingStatus = 'idle' | 'pending' | 'success'
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState("Default title");
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('idle');
  const handleSave = async () => {
    setLoadingStatus('pending');
    await delay()
    setLoadingStatus('success')
  }
  return (
    <div>
      <h1>{title}</h1>
      <button className="btn btn-success" onClick={handleSave}>
        Save
      </button>
      <input
        className="form-control"
        placeholder="The todo title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      {loadingStatus === 'pending' && <h3 className="bg-info">Pending todos : {todos.length} </h3>}
      {loadingStatus === 'success' && <h3 className="bg-success">Saved todos : {todos.length} </h3>}
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
