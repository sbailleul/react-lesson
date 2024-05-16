import { Todo } from "@/Todo";
import { useState } from "react";

type Todo = {
  id: string;
  title: string;
  description: string;
  status: boolean;
};
function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
type LoadingStatus = "idle" | "pending" | "done";
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState<string>();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("idle");
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={async () => {
          setLoadingStatus("pending");
          await delay(3000);
          setLoadingStatus("done");
        }}
      >
        Save
      </button>
      {loadingStatus === "pending" && <span>Pending : {todoList.length}</span>}
      {loadingStatus === "done" && <span>Done : {todoList.length}</span>}
      {/* {loadingStatus === 'pending' ? (
        <span>Pending : {todoList.length}</span>
      ) : (
        <span>Done : {todoList.length}</span>
      )} */}
      <input
        placeholder="Mon titre pas encore modifié"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          status={todo.status}
          onDelete={() => {
            setTodoList(todoList.filter(t => t.id !== todo.id))
          } }
        ></Todo>
      ))}
    </div>
  );
}
