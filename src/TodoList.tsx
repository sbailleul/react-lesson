import { EditableTodo } from "@/EditableTodo";
import { Todo } from "@/Todo";
import { useState } from "react";

export type TodoListProps = { todos?: Todo[] };

function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
type Todo = { id: string; title: string; description: string; status: boolean };

type LoadingStatus = "idle" | "pending" | "success" | "error";
export function TodoLists() {
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [ownedTodos, setOwnedTodos] = useState<Todo[]>([
    {
      id: "t1",
      description: "test1",
      title: "test1description",
      status: false,
    },
    { id: "t2", description: "test2", title: "test2description", status: true },
  ]);
  const [title, setTitle] = useState("Default title");
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("idle");
  const handleSave = async () => {
    setLoadingStatus("pending");
    await delay();
    if (isSuccess) {
      setLoadingStatus("success");
      setIsSuccess(false);
    }else{
      setLoadingStatus("error");
      setIsSuccess(true);
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <button className="btn btn-success" onClick={handleSave}>
        Save
      </button>
      {loadingStatus === "success" && <div className="alert alert-success">Success</div>}
      {loadingStatus === "error" && <div className="alert alert-danger">Error</div>}
      <input
        className="form-control"
        placeholder="The todo title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      {loadingStatus === "pending" && (
        <h3 className="bg-info">Pending todos : {ownedTodos.length} </h3>
      )}
      {loadingStatus === "success" && (
        <h3 className="bg-success">Saved todos : {ownedTodos.length} </h3>
      )}
      <EditableTodo
        onAdd={(todo) => {
          setOwnedTodos([
            ...ownedTodos,
            { ...todo, id: `t${ownedTodos.length + 1}` },
          ]);
        }}
      />
      {ownedTodos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            status={todo.status}
            onDelete={() =>
              setOwnedTodos(ownedTodos.filter((t) => t.id !== todo.id))
            }
          />
        );
      })}
    </div>
  );
}
