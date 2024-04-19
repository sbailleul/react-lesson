import { Todo } from "@/Todo";
import { useState } from "react";

type Todo = {
  id?: string;
  title: string;
  description: string;
  status: boolean;
};
function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
type LoadingStatus = 'idle' | 'pending' | 'done';
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState<string>();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('idle');
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={async () => {
          setLoadingStatus('pending');
          await delay(3000);
          setLoadingStatus('done');
        }}
      >
        Save
      </button>
      {loadingStatus === 'pending' && <span>Pending : {todos.length}</span> }
      {loadingStatus === 'done' && <span>Done : {todos.length}</span> }
      {/* {loadingStatus === 'pending' ? (
        <span>Pending : {todos.length}</span>
      ) : (
        <span>Done : {todos.length}</span>
      )} */}
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
