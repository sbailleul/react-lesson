import { useReducer, useState } from "react";

export type Todo = { title: string; description: string; status: boolean };
type UpdateTitleAction = { type: "UPDATE_TITLE"; title: string };
type UpdateDescriptionAction = {
  type: "UPDATE_DESCRIPTION";
  description: string;
};
type UpdateStatusAction = { type: "UPDATE_STATUS"; status: boolean };

function todoReducer(
  todo: Todo,
  action: UpdateTitleAction | UpdateDescriptionAction | UpdateStatusAction
): Todo {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...todo, title: action.title };
    case "UPDATE_DESCRIPTION":
      return { ...todo, description: action.description };
    case "UPDATE_STATUS":
      return { ...todo, status: action.status };
  }
}
type EditableTodoProps = { onSave: () => void };
export function EditableTodo({ onSave }: EditableTodoProps) {
  const [todo, dispatch] = useReducer(todoReducer, {
    title: "",
    description: "",
    status: false,
  });

  const canSaveTodo = !!todo.description && !!todo.title;
  console.log(todo)
  return (
    <div className="card bg-success">
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", title: e.target.value });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "UPDATE_DESCRIPTION", description: e.target.value });
        }}
      />
      <input
        type="checkbox"
        onChange={() => {
          dispatch({ type: "UPDATE_STATUS", status: !todo.status });
        }}
      />
      <button className="btn" disabled={!canSaveTodo} onClick={onSave}>
        Save
      </button>
    </div>
  );
}
