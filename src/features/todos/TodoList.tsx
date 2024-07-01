import { EditableTodo } from "@/features/todos/EditableTodo";
import { Todo } from "@/features/todos/Todo";
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
type LoadingStatus = "idle" | "pending" | "done" | "failed";
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  const [title, setTitle] = useState<string>();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("idle");
  const [todoList, setTodoList] = useState(todos);
  const [singleTodoSave, setSingleTodoSave] = useState<LoadingStatus>("idle");
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
            setTodoList(todoList.filter((t) => t.id !== todo.id));
          }}
        ></Todo>
      ))}
      <EditableTodo
        onSave={() => {
          setSingleTodoSave(
            singleTodoSave == "done" || singleTodoSave == "idle"
              ? "failed"
              : "done"
          );
        }}
      />
      {singleTodoSave  === 'failed' && <span className="alert alert-danger">an error occured</span>}
      {singleTodoSave  === 'done' && <span className="alert  alert-success">succesfully saved</span>}
    </div>
  );
}
